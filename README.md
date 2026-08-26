# RoboShip Request Board

A shared board where the team logs what they're waiting on from Glen in RoboShip (our WMS),
so nothing lives in scattered DMs. Submissions land in one queue, sorted worst-first.

**Live board:** https://teamrobo.help

## What it does

**For the team — "New request" tab**
- Pick your name and the client from dropdowns, say what you need, set a priority
- Optional order/ref # and a "needed by" date
- Drafts are kept in your browser, so a half-typed request survives a refresh

**For Glen — "Queue" tab**
- Default sort is priority (Critical → Low), oldest first inside each level
- He can re-sort by any column: request #, priority, client, who asked, days waiting,
  needed by, or status — click a header again to reverse it
- Filter by open/resolved/all, by client, by priority, or search across everything
- Counters up top: open requests, critical waiting, longest wait in days, resolved this week
- Open a row to read the full request, post a note back, change status or priority,
  mark it resolved, or delete it
- Copy the current view as CSV to the clipboard

Statuses are **Submitted** (waiting on Glen), **Glen working**, **Needs your reply**
(he's waiting on the submitter), and **Resolved**.

Rows age visibly: the day count turns amber at 4 days, red at 7 — or at 2 days if it's
critical. A past "needed by" date flags as overdue.

## Rosters

`src/index.js` holds two lists near the top of `CLIENT_JS`, edit them there to change the
options:

- `TEAM` — Ariel, Coya, Shay, Mylene, Lysa, Mark, Jentsyn
- `CLIENTS` — the 30 RoboShip clients: Beauty Sleep Club, Bioroot Labs, Botane, CRWN,
  Clarity MD, Clean Supplement USA, Drop Guys, Earthline Naturals, Envitamin, Erae Paris,
  Fieldy, Fygg, GLP-1 SOS, GumPlus, Honey Mark, Hug Sleep, Hushed Socks, Hydrant, Hyro,
  JadyK, Kinova Labs, Nectar Hydration, Nova, Nutrissa, Purriq, Salt of the Earth,
  Saphire Saffron, Shush, Vayose, Wild Pouches

Both pickers have an "Another client…" / "Someone else…" option, so a name that isn't on a
list can still be typed in without a code change.

## Branding

Robo3PL blue (`--brand: #3d7bfb`) on navy-tinted neutrals, with the robot mark drawn as
inline SVG in the header lockup. Priority colors are deliberately kept off the brand hue so
they never read as an accent: Critical red, High amber, Medium teal, Low grey.

The mark is a hand-drawn approximation of the logo. Drop the real asset in and it can be
embedded properly instead.

## How it's built

This used to run as a Claude Artifact (self-contained HTML, saved by republishing the whole
page). It's now a **Cloudflare Worker + KV** app instead, so it can live at
`teamrobo.help` directly with no claude.ai account needed to read or write:

- `src/index.js` is the whole thing: a Worker that serves the page (HTML/CSS/JS, all
  embedded as strings) and a small JSON API under `/api/*`.
- State lives in a KV namespace (binding `BOARD_KV`) under one key, `board`, holding
  `{v, seq, items: [...]}`. On first read, if that key is empty, the Worker seeds it from
  `SEED_STATE` (a snapshot of the real queue at the time of the migration) so the switch
  from the artifact doesn't lose anything.
- The client JS renders from the state the Worker embeds in the initial HTML response
  (same render code as before), then talks to `/api/requests` for every write instead of
  publishing a whole new document.

API surface:

| Method | Path | Does |
|---|---|---|
| GET | `/api/state` | Returns `{v, seq, items}` |
| POST | `/api/requests` | Creates a request; body `{requester, client, priority, need, ref, due}` |
| PATCH | `/api/requests/:id` | Updates `status` and/or `priority` |
| POST | `/api/requests/:id/notes` | Appends a note; body `{by, text}` |
| DELETE | `/api/requests/:id` | Removes a request |

Access is fully open — same as the old "anyone with the link" artifact sharing — there's no
login. Anyone who can reach the domain can submit, edit, resolve, or delete. If that ever
needs to change (e.g. a shared passphrase gating Glen's actions), that's a small addition to
the Worker, not a rebuild.

### Deploying

```sh
npm install
npx wrangler login
npx wrangler kv namespace create BOARD_KV
```

Paste the namespace id the last command prints into `wrangler.toml`'s `kv_namespaces` entry,
then:

```sh
npx wrangler deploy
```

Point `teamrobo.help` at the deployed Worker (Cloudflare dashboard → Workers & Pages → your
Worker → **Settings → Domains & Routes** → Add a custom domain), or uncomment the `routes`
block in `wrangler.toml` and redeploy once the domain's zone is on this account.

The very first deploy seeds KV from `SEED_STATE` in `src/index.js` automatically — no manual
data import needed. After that, KV is the source of truth; `SEED_STATE` is only a fallback
for an empty namespace, not something to keep syncing.

### Local development

```sh
npm install
npx wrangler dev
```

Serves the board at `http://localhost:8787` against a local KV emulation — safe to hit the
API and mutate freely without touching production data.
