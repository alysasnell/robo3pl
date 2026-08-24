# RoboShip Request Board

A shared board where the team logs what they're waiting on from Glen in RoboShip (our WMS),
so nothing lives in scattered DMs. Submissions land in one queue, sorted worst-first.

**Live board:** https://claude.ai/code/artifact/2542a3a2-ad9f-418d-bfc6-70ece595706e

## What it does

**For the team — "New request" tab**
- Your name, client, what you need or are waiting on, and a priority
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
- Export the current view to CSV

Statuses are **Submitted** (waiting on Glen), **Glen working**, **Needs your reply**
(he's waiting on the submitter), and **Resolved**.

Rows age visibly: the day count turns amber at 4 days, red at 7 — or at 2 days if it's
critical. A past "needed by" date flags as overdue.

## How it's built

`index.html` is the whole thing — one self-contained page, no server and no database.
It runs as a Claude Artifact using the `artifact` capability: the page stores its data as
JSON inside itself, and each submission or edit publishes a new version of the page, which
every open browser reloads to. The `downloads` capability powers the CSV export.

Everyone who writes to the board needs **edit access** to the artifact. Viewers with
read-only access see the queue but get a "View only" banner instead of the write controls.

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
