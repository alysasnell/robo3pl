# RoboShip Request Board

A shared board where the team logs what they're waiting on from Glen in RoboShip (our WMS),
so nothing lives in scattered DMs. Submissions land in one queue, sorted worst-first.

**Live board:** https://claude.ai/code/artifact/2542a3a2-ad9f-418d-bfc6-70ece595706e

## What it does

**For the team — "New request" tab**
- Pick your name and the client from dropdowns, say what you need, set a priority
- Optional order/ref # and a "needed by" date
- Drafts are kept in your browser, so a half-typed request survives a refresh
- On submit it opens a pre-filled email to Glen (see **Emailing Glen** below)

**For Glen — "Queue" tab**
- Default sort is priority (Critical → Low), oldest first inside each level
- He can re-sort by any column: request #, priority, client, who asked, days waiting,
  needed by, or status — click a header again to reverse it
- Filter by open/resolved/all, by client, by priority, or search across everything
- Counters up top: open requests, critical waiting, longest wait in days, resolved this week
- Open a row to read the full request, post a note back, change status or priority,
  mark it resolved, re-send the email, or delete it
- Export the current view to CSV

Statuses are **Submitted** (waiting on Glen), **Glen working**, **Needs your reply**
(he's waiting on the submitter), and **Resolved**.

Rows age visibly: the day count turns amber at 4 days, red at 7 — or at 2 days if it's
critical. A past "needed by" date flags as overdue.

## Emailing Glen

A published page has no server and is blocked from calling outside services, so it cannot
send mail by itself. What it does instead: submitting a request opens a pre-filled email in
the submitter's own mail app, addressed to glen@robo3pl.com, with the priority in the
subject line:

```
[CRITICAL] Envitamin — RoboShip request #12 (Ariel)
```

The body carries priority, client, submitter, ref #, needed-by, the full request text, and a
link back to the board. If the sandbox blocks the mail app from opening, the confirmation
panel has **Open the email again** and **Copy it instead**, which puts the whole message on
the clipboard.

Because the page can't see inside anyone's mail client, it can't know whether the message
was actually sent — so the submitter confirms with **I sent it**. That records who marked it
and when, shows an "✉ Emailed" marker on the row, and fills in the **Email to Glen** line in
the request detail (which otherwise reads "Not marked as sent"). Requests can also be
emailed or marked from their detail panel later.

Making this fully automatic would need either an email connector in claude.ai (the page could
then send through the submitter's own account) or a real backend — neither exists here today.

## Rosters

`index.html` holds two lists near the top of the script, edit them there to change the options:

- `TEAM` — Ariel, Coya, Shay, Mylene, Lysa, Mark
- `CLIENTS` — the 30 RoboShip clients: Beauty Sleep Club, Bioroot Labs, Botanē, CRWN,
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

`index.html` is the whole thing — one self-contained page, no server and no database.
It runs as a Claude Artifact using the `artifact` capability: the page stores its data as
JSON inside itself, and each submission or edit publishes a new version of the page, which
every open browser reloads to. The `downloads` capability powers the CSV export.

Everyone who writes to the board needs **edit access** to the artifact. Viewers with
read-only access see the queue but get a "View only" banner instead of the write controls.

There are no native `alert`/`confirm`/`prompt` dialogs anywhere — sandboxed frames often
block them — so deletes use a two-step inline confirm and identity is a picker in the header.

### Redeploying

Republishing `index.html` from this repo **replaces the live page, including its data**.
Once the team has real requests on the board, pull the live state first: read the published
artifact, copy the JSON out of its `<script id="rs-state">` tag into the local file, then
publish. Otherwise the board resets to empty.

### Local development

The file is published as a fragment (no `<html>`/`<head>`/`<body>` — those get added at
publish time), so to open it directly in a browser, wrap it:

```sh
{ echo '<!doctype html><html><head><meta charset="utf-8"></head><body>'; cat index.html; echo '</body></html>'; } > /tmp/preview.html
```

Saving is inert outside the artifact viewer — the page says so with a "Not saving" banner
rather than silently dropping changes.
