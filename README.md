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

`public/index.html` holds two lists near the top of the script, edit them there to change
the options:

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

The mark is a hand-drawn approximation of the logo. Drop the real asset in the repo and it
can be embedded properly instead.

## How it's built

This is a self-contained Cloudflare Worker, deployed straight from this repo — no claude.ai
involvement at all. Three files:

- **`public/index.html`** — the whole UI: markup, styling, and client-side JS in one file.
- **`src/index.js`** — the Worker. Serves `public/index.html` (and its assets) for normal
  page loads, and handles `/api/state` for reading and saving the board's data.
- **`wrangler.jsonc`** — Worker config: points at `src/index.js`, wires up the static assets
  directory, and binds the KV namespace the data lives in.

**Data model:** one JSON blob (`{v, seq, items: [...]}`) stored under a KV key, plus a
revision counter. The page fetches it on load (`GET /api/state`), and every change (a new
request, a note, a status flip, a delete) sends the whole updated blob back
(`POST /api/state`) along with the revision it started from. If someone else saved in the
meantime, the server rejects the write with a 409 and hands back the current data; the page
then shows a toast and refreshes to the latest version rather than silently overwriting it.

There are no native `alert`/`confirm`/`prompt` dialogs anywhere — sandboxed frames often
block them — so deletes use a two-step inline confirm and identity is a picker in the header
kept in `localStorage`, not a real login. Anyone who can load the page can also write to it;
there's no authentication layer.

CSV export copies to the clipboard rather than downloading a file (kept from the original
design — works everywhere, no download-permission fuss).

**Cost:** everything here runs on Cloudflare's free tier (Workers: 100k requests/day, KV:
thousands of reads/writes a day). A small internal team board doesn't come close to those
limits.

### Deploying

Cloudflare's Workers Builds is connected to this repo and auto-deploys `main` on every push
— nothing manual needed. The KV namespace is provisioned once in the Cloudflare dashboard and
referenced by ID in `wrangler.jsonc`; deploys never touch the data stored there, so shipping a
code change is completely decoupled from the board's actual requests.

### Local development

```sh
npx wrangler dev
```

Runs the Worker locally with a local (in-memory) copy of KV — safe to poke at without
touching the real board's data. First load seeds the local KV from the `SEED` constant at
the top of `src/index.js`.
