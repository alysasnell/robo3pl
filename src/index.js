/*
 * RoboShip Request Board — Cloudflare Worker + KV
 *
 * Replaces the claude.ai Artifact version. Serves the board's HTML/CSS/JS
 * directly and persists requests in a KV namespace (binding: BOARD_KV) under
 * a single key, "board", holding {v, seq, items:[...]}. Fully open: no
 * account or login is required to read or write.
 */

var SEED_STATE = {"v":1,"seq":18,"items":[{"id":"rmt7mojnj7cc1a","num":1,"client":"Fygg","requester":"Lysa","priority":"critical","status":"new","need":"Fygg Nitric Oxide Mints are getting marked as fulfilled in Robo and Packiyo, but they are on backorder in Packiyo (-515). To our understanding, we do not have these in the warehouse and they are not actually being fulfilled. Customers are reporting they are not receiving these. Can we look into why they are being marked as fulfilled while they are on backorder? Is it Robo or Packiyo?","ref":"#116163, NOX-LOZ-30","due":"2026-08-25","createdAt":"2026-08-24T19:27:37.855Z","updatedAt":"2026-08-24T19:27:37.855Z","notes":[]},{"id":"rmt7mz59w30i3o","num":2,"client":"GLP-1 SOS","requester":"Lysa","priority":"medium","status":"new","need":"Date of when we turned on Passport for GLP-1 SOS","ref":"","due":"2026-08-26","createdAt":"2026-08-24T19:35:52.436Z","updatedAt":"2026-08-24T19:37:27.414Z","notes":[{"by":"Lysa","text":"They have shipments that went out with USPS as the carrier up to 7/16 with customs issues and we just want to verify that there wasn't an error and those should have used Passport as the carrier. I don't think so, but double checking.\n\nCan we add this info as a timeline history with the user attached to it in Robo when updating the carriers per client?","at":"2026-08-24T19:37:27.414Z"}]},{"id":"rmt7n2ohxvkqyu","num":3,"client":"Beauty Sleep Club","requester":"Lysa","priority":"low","status":"new","need":"Can I turn on UniUni for Beauty Sleep? Can I check the box or uncheck the box for carriers at anytime for clients?","ref":"","due":"2026-08-28","createdAt":"2026-08-24T19:38:37.317Z","updatedAt":"2026-08-24T19:38:37.317Z","notes":[]},{"id":"rmt7n3jldpdrdf","num":4,"client":"Rielle","requester":"Lysa","priority":"low","status":"new","need":"Is Robo going to have API or MCP access for clients?","ref":"","due":"2026-08-28","createdAt":"2026-08-24T19:39:17.617Z","updatedAt":"2026-08-24T19:39:17.617Z","notes":[]},{"id":"rmt7n4uhcigsjw","num":5,"client":"Kinova & Shush","requester":"Lysa","priority":"low","status":"new","need":"Can you give me an ETA on their first invoice? They have questions on shipment cost $ and it would be helpful to just get their first invoice over to them.","ref":"","due":"2026-08-26","createdAt":"2026-08-24T19:40:18.384Z","updatedAt":"2026-08-24T19:40:18.384Z","notes":[]},{"id":"rmt7n89hdvb32c","num":6,"client":"Hug Sleep","requester":"Lysa","priority":"high","status":"new","need":"Should we be disconnecting clients from Packiyo once they are fully transferred to Robo?\n\n\"Fulfilled externally\" is happening: Robo fulfills or makes an update > Marks fulfilled in Shopify > Shopify updates Packiyo > Packiyo updates Robo. Is this updating inventory twice and that is contributing to inventory being off?","ref":"","due":"2026-08-25","createdAt":"2026-08-24T19:42:57.793Z","updatedAt":"2026-08-24T19:42:57.793Z","notes":[]},{"id":"rmt7nb39buybfa","num":7,"client":"Fygg","requester":"Lysa","priority":"medium","status":"new","need":"Whitney @ Fygg requests:\n- Scheduling a call, send a few times to Lysa or she will block off a time on your cal\n- Support needs while they are in a transition: Should we charge? Sounds like it would be mainly SKU management, not CS.\n- Mark provided some feedback on communication and standard operation that Whitney requested and I would love to discuss before sending her way.","ref":"","due":"2026-08-26","createdAt":"2026-08-24T19:45:09.695Z","updatedAt":"2026-08-24T19:45:09.695Z","notes":[]},{"id":"rmt7nce2kzpuxq","num":8,"client":"Hug Sleep","requester":"Lysa","priority":"medium","status":"new","need":"Order status \"Not Ready\" - The team is skipping over orders in this status. How can they keep an eye on these and how can they move them into ship ready?","ref":"","due":"2026-08-26","createdAt":"2026-08-24T19:46:10.364Z","updatedAt":"2026-08-24T19:46:10.364Z","notes":[]},{"id":"rmt7ndsurm8x0a","num":9,"client":"Hug Sleep","requester":"Lysa","priority":"high","status":"new","need":"Were you able to review the report of orders tagged with 'orderediting' to see which orders haven't had reshipment created so we can have RS create reshipments for all of the remaining past orders?","ref":"","due":"","createdAt":"2026-08-24T19:47:16.179Z","updatedAt":"2026-08-24T19:47:16.179Z","notes":[]},{"id":"rmt7nex5bfugzf","num":10,"client":"Fieldy","requester":"Lysa","priority":"medium","status":"new","need":"How do I provide a quote for ONLY USPS rates to Fieldy?\nAll zones\n\nWe have a blended UniUni/USPS card","ref":"","due":"2026-08-25","createdAt":"2026-08-24T19:48:08.399Z","updatedAt":"2026-08-24T19:48:08.399Z","notes":[]},{"id":"rmt7ng5ox0njbz","num":11,"client":"Internal team","requester":"Lysa","priority":"low","status":"new","need":"Give leads the option to create new internal team members in RS or add Lysa and Mark as admins so we don't have to get you to add new team members","ref":"","due":"","createdAt":"2026-08-24T19:49:06.129Z","updatedAt":"2026-08-24T19:49:06.129Z","notes":[]},{"id":"rmt7ni2iakv37p","num":12,"client":"Internal team","requester":"Lysa","priority":"low","status":"new","need":"Address Issues: After a certain time period without a response from the client, should we cancel the order?\n\nWill the relay (new automation) sort the orders into a different queue so the team doesn't have to see them? Should we remove them from our list to follow up on?","ref":"","due":"","createdAt":"2026-08-24T19:50:35.314Z","updatedAt":"2026-08-24T19:50:35.314Z","notes":[]},{"id":"rmt7nje9rj5kj5","num":13,"client":"Internal team","requester":"Lysa","priority":"low","status":"new","need":"When using the reship option and you select the reason, after hitting 'reship' when you're done, it will erase any notes and your selection for the reason and go to \"other/exchange\" instead of what you put in.","ref":"","due":"","createdAt":"2026-08-24T19:51:37.215Z","updatedAt":"2026-08-24T19:51:37.215Z","notes":[]},{"id":"rmt7nkxkjc7nwl","num":14,"client":"Wild Pouches","requester":"Ariel","priority":"high","status":"new","need":"Fix Wild Pouch batches for Robo and correct error \" No carrier\" in batches\n\nYou were working on it 8/24, but had to step away for a meeting.","ref":"","due":"2026-08-24","createdAt":"2026-08-24T19:52:48.883Z","updatedAt":"2026-08-24T19:52:48.883Z","notes":[]},{"id":"rmt7nlqsaz8q3a","num":15,"client":"Opal & Vitamin G","requester":"Ariel","priority":"medium","status":"new","need":"Adding in RS for restocks","ref":"","due":"2026-08-28","createdAt":"2026-08-24T19:53:26.746Z","updatedAt":"2026-08-24T19:53:26.746Z","notes":[]},{"id":"rmt7nmstcqfvcw","num":16,"client":"Kinova Labs and Clarity MD","requester":"Coya","priority":"high","status":"new","need":"Fixing \"Packiyo creds\" so we can add inventory in RS","ref":"","due":"2026-08-25","createdAt":"2026-08-24T19:54:16.032Z","updatedAt":"2026-08-24T19:54:16.032Z","notes":[]},{"id":"rmt7nr9kc70oi6","num":17,"client":"System Error","requester":"Jentsyn","priority":"critical","status":"new","need":"#450773 - Can't ship this order\n409 error","ref":"#450773","due":"2026-08-24","createdAt":"2026-08-24T19:57:44.364Z","updatedAt":"2026-08-24T19:57:44.364Z","notes":[]}]};

var CSS_TEXT = ':root{\n' +
'  --brand:#3d7bfb; --brand-eye:#131c2e;\n' +
'  --ground:#edf0f5; --surface:#ffffff; --surface-2:#f5f7fa; --surface-3:#e6eaf1;\n' +
'  --line:#d5dbe6; --line-2:#c1cad9;\n' +
'  --ink:#141b2b; --ink-2:#4a5570; --ink-3:#79839a;\n' +
'  --accent:#2f6bf5; --accent-2:#2455cc; --accent-ink:#ffffff; --accent-soft:#e4ecfe;\n' +
'  --crit:#c8372c; --crit-bg:#fae8e6; --crit-line:#eec5c0;\n' +
'  --high:#9a5f0d; --high-bg:#f9eeda; --high-line:#e9d2a8;\n' +
'  --med:#2f7d6e;  --med-bg:#e2f0ec;  --med-line:#bcdbd3;\n' +
'  --low:#77839a;  --low-bg:#edeff4;  --low-line:#d8dde7;\n' +
'  --ok:#2c8348; --ok-bg:#e3f1e7; --ok-line:#bedcc7;\n' +
'  --shadow:0 1px 2px rgba(20,27,43,.05),0 8px 22px rgba(20,27,43,.08);\n' +
'  --sans:"IBM Plex Sans",ui-sans-serif,system-ui,-apple-system,"Segoe UI",sans-serif;\n' +
'  --display:"Archivo",var(--sans);\n' +
'  --mono:"IBM Plex Mono",ui-monospace,"SF Mono",Menlo,Consolas,monospace;\n' +
'}\n' +
'@media (prefers-color-scheme:dark){\n' +
'  :root:not([data-theme="light"]){\n' +
'    --ground:#141b2b; --surface:#1b2436; --surface-2:#212b40; --surface-3:#2a3448;\n' +
'    --line:#303b52; --line-2:#3f4b66;\n' +
'    --ink:#e8ecf5; --ink-2:#a4aec6; --ink-3:#7a849c;\n' +
'    --accent:#5b8dff; --accent-2:#7aa3ff; --accent-ink:#0d1425; --accent-soft:#1c2b4d;\n' +
'    --crit:#ff7a68; --crit-bg:#3a1e1b; --crit-line:#5c2f28;\n' +
'    --high:#eaa63f; --high-bg:#382b14; --high-line:#57431f;\n' +
'    --med:#4fc0aa;  --med-bg:#143029;  --med-line:#22493f;\n' +
'    --low:#98a3ba;  --low-bg:#232c3e;  --low-line:#333e55;\n' +
'    --ok:#5cc87a; --ok-bg:#16301f; --ok-line:#274a33;\n' +
'    --shadow:0 1px 2px rgba(0,0,0,.32),0 8px 22px rgba(0,0,0,.34);\n' +
'  }\n' +
'}\n' +
':root[data-theme="dark"]{\n' +
'  --ground:#141b2b; --surface:#1b2436; --surface-2:#212b40; --surface-3:#2a3448;\n' +
'  --line:#303b52; --line-2:#3f4b66;\n' +
'  --ink:#e8ecf5; --ink-2:#a4aec6; --ink-3:#7a849c;\n' +
'  --accent:#5b8dff; --accent-2:#7aa3ff; --accent-ink:#0d1425; --accent-soft:#1c2b4d;\n' +
'  --crit:#ff7a68; --crit-bg:#3a1e1b; --crit-line:#5c2f28;\n' +
'  --high:#eaa63f; --high-bg:#382b14; --high-line:#57431f;\n' +
'  --med:#4fc0aa;  --med-bg:#143029;  --med-line:#22493f;\n' +
'  --low:#98a3ba;  --low-bg:#232c3e;  --low-line:#333e55;\n' +
'  --ok:#5cc87a; --ok-bg:#16301f; --ok-line:#274a33;\n' +
'  --shadow:0 1px 2px rgba(0,0,0,.32),0 8px 22px rgba(0,0,0,.34);\n' +
'}\n' +
'*{box-sizing:border-box}\n' +
'body{margin:0;background:var(--ground);color:var(--ink);font-family:var(--sans);font-size:15px;line-height:1.55;-webkit-font-smoothing:antialiased}\n' +
'h1,h2,h3{font-family:var(--display);margin:0;text-wrap:balance;letter-spacing:-.01em}\n' +
'button,input,select,textarea{font:inherit;color:inherit}\n' +
':focus-visible{outline:2px solid var(--accent);outline-offset:2px;border-radius:4px}\n' +
'.wrap{max-width:1180px;margin:0 auto;padding:0 20px}\n' +
'.mono{font-family:var(--mono);font-variant-numeric:tabular-nums}\n' +
'.eyebrow{font-family:var(--display);font-size:11px;font-weight:600;letter-spacing:.13em;text-transform:uppercase;color:var(--ink-3)}\n' +
'\n' +
'/* ---------- header ---------- */\n' +
'.top{position:sticky;top:0;z-index:30;background:var(--surface);border-bottom:1px solid var(--line)}\n' +
'.top-in{display:flex;align-items:center;gap:14px;padding:13px 0;flex-wrap:wrap}\n' +
'.mark{flex:none;color:var(--brand);display:block}\n' +
'.wordmark{display:block;font-family:var(--display);font-size:12.5px;font-weight:700;letter-spacing:.01em;color:var(--brand);line-height:1;margin-bottom:2px}\n' +
'.brand h1{font-size:clamp(17px,2.2vw,20px);font-weight:700;line-height:1.15}\n' +
'.top-right{margin-left:auto;display:flex;align-items:center;gap:8px;flex-wrap:wrap}\n' +
'.who{display:flex;align-items:center;gap:7px;font-size:12.5px;color:var(--ink-2)}\n' +
'.who select{padding:6px 9px;font-size:13px}\n' +
'.who input{padding:6px 9px;font-size:13px;max-width:150px}\n' +
'.delconfirm{font-size:12.5px;color:var(--crit);font-weight:600}\n' +
'.tabs{display:flex;gap:2px;background:var(--surface-2);border:1px solid var(--line);border-radius:8px;padding:3px}\n' +
'.tabs button{font-family:var(--display);font-size:13px;font-weight:600;border:0;background:transparent;color:var(--ink-2);padding:6px 14px;border-radius:6px;cursor:pointer}\n' +
'.tabs button[aria-selected="true"]{background:var(--surface);color:var(--ink);box-shadow:0 1px 2px rgba(18,32,30,.10)}\n' +
'.tabs button:hover{color:var(--ink)}\n' +
'\n' +
'/* ---------- stats ---------- */\n' +
'.stats{display:grid;grid-template-columns:repeat(4,1fr);gap:10px;padding:16px 0 4px}\n' +
'.stat{background:var(--surface);border:1px solid var(--line);border-radius:9px;padding:11px 13px;display:flex;flex-direction:column;justify-content:space-between;gap:2px}\n' +
'.stat .k{display:block;font-family:var(--display);font-size:10.5px;font-weight:600;letter-spacing:.12em;text-transform:uppercase;color:var(--ink-3)}\n' +
'.stat .v{font-family:var(--mono);font-variant-numeric:tabular-nums;font-size:25px;font-weight:500;line-height:1.25;display:flex;align-items:baseline;gap:5px}\n' +
'.stat .v small{font-family:var(--sans);font-size:12px;color:var(--ink-3);font-weight:400}\n' +
'.stat.hot{background:var(--crit-bg);border-color:var(--crit-line)}\n' +
'.stat.hot .v,.stat.hot .k{color:var(--crit)}\n' +
'.stat.warm{background:var(--high-bg);border-color:var(--high-line)}\n' +
'.stat.warm .v,.stat.warm .k{color:var(--high)}\n' +
'\n' +
'/* ---------- controls ---------- */\n' +
'.controls{display:flex;gap:9px;align-items:center;flex-wrap:wrap;padding:14px 0 0}\n' +
'.controls.filters{padding:9px 0 13px}\n' +
'.field{display:flex;align-items:center;gap:6px}\n' +
'.search{position:relative;flex:1 1 200px;min-width:170px;max-width:420px}\n' +
'.search input{width:100%;padding:8px 11px 8px 30px;border:1px solid var(--line);border-radius:7px;background:var(--surface)}\n' +
'.search svg{position:absolute;left:9px;top:50%;transform:translateY(-50%);color:var(--ink-3)}\n' +
'select,.inp{padding:8px 10px;border:1px solid var(--line);border-radius:7px;background:var(--surface)}\n' +
'select{cursor:pointer}\n' +
'.seg{display:flex;border:1px solid var(--line);border-radius:7px;overflow:hidden;background:var(--surface)}\n' +
'.seg button{border:0;background:transparent;padding:8px 12px;font-size:13px;font-weight:500;color:var(--ink-2);cursor:pointer;border-right:1px solid var(--line)}\n' +
'.seg button:last-child{border-right:0}\n' +
'.seg button[aria-pressed="true"]{background:var(--accent-soft);color:var(--accent-2);font-weight:600}\n' +
'.seg button:hover{color:var(--ink)}\n' +
'.btn{font-family:var(--display);font-weight:600;font-size:13.5px;border:1px solid var(--line);background:var(--surface);color:var(--ink);padding:8px 14px;border-radius:7px;cursor:pointer;display:inline-flex;align-items:center;gap:7px}\n' +
'.btn:hover{border-color:var(--line-2);background:var(--surface-2)}\n' +
'.btn.primary{background:var(--accent);border-color:var(--accent);color:var(--accent-ink)}\n' +
'.btn.primary:hover{background:var(--accent-2);border-color:var(--accent-2)}\n' +
'.btn.ghost{border-color:transparent;background:transparent;color:var(--ink-2);padding:6px 9px}\n' +
'.btn.ghost:hover{background:var(--surface-3);color:var(--ink)}\n' +
'.btn.danger{color:var(--crit);border-color:var(--crit-line)}\n' +
'.btn.danger:hover{background:var(--crit-bg)}\n' +
'.btn[disabled]{opacity:.5;cursor:not-allowed}\n' +
'.btn.sm{font-size:12.5px;padding:6px 11px}\n' +
'\n' +
'/* ---------- board ---------- */\n' +
'.board{background:var(--surface);border:1px solid var(--line);border-radius:10px;box-shadow:var(--shadow);overflow:hidden;margin-bottom:26px}\n' +
'.scroller{overflow-x:auto}\n' +
'.grid{display:grid;grid-template-columns:4px 54px 104px minmax(240px,2.4fr) 118px 82px 104px 132px 34px;align-items:center;min-width:900px}\n' +
'.head{border-bottom:1px solid var(--line);background:var(--surface-2)}\n' +
'.head .cell{padding:9px 10px}\n' +
'.head button{all:unset;cursor:pointer;font-family:var(--display);font-size:10.5px;font-weight:600;letter-spacing:.11em;text-transform:uppercase;color:var(--ink-3);display:inline-flex;align-items:center;gap:4px}\n' +
'.head button:hover{color:var(--ink)}\n' +
'.head button[data-active="1"]{color:var(--accent-2)}\n' +
'.head .arrow{font-size:9px;opacity:.9}\n' +
'.row{border-bottom:1px solid var(--line);cursor:pointer;background:var(--surface)}\n' +
'.row:last-of-type{border-bottom:0}\n' +
'.row:hover{background:var(--surface-2)}\n' +
'.row .cell{padding:11px 10px;min-width:0}\n' +
'.row .stripe{align-self:stretch;background:var(--low)}\n' +
'.row[data-p="critical"] .stripe{background:var(--crit)}\n' +
'.row[data-p="high"] .stripe{background:var(--high)}\n' +
'.row[data-p="medium"] .stripe{background:var(--med)}\n' +
'.row[data-p="low"] .stripe{background:var(--low)}\n' +
'.row[data-done="1"]{background:var(--surface-2)}\n' +
'.row[data-done="1"] .cell:not(.c-status){opacity:.62}\n' +
'.row[data-done="1"] .stripe{opacity:.4}\n' +
'.row[data-sample="1"]{background:repeating-linear-gradient(135deg,transparent,transparent 9px,var(--surface-2) 9px,var(--surface-2) 18px)}\n' +
'.num{font-family:var(--mono);font-size:12px;color:var(--ink-3)}\n' +
'.client{font-weight:600;font-size:14.5px;letter-spacing:-.005em}\n' +
'.need{color:var(--ink-2);font-size:13px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}\n' +
'.who-cell{font-size:13px;color:var(--ink-2);overflow:hidden;text-overflow:ellipsis;white-space:nowrap}\n' +
'.pill{display:inline-flex;align-items:center;gap:5px;font-family:var(--display);font-size:10.5px;font-weight:600;letter-spacing:.09em;text-transform:uppercase;padding:3px 8px;border-radius:999px;border:1px solid;white-space:nowrap}\n' +
'.p-critical{color:var(--crit);background:var(--crit-bg);border-color:var(--crit-line)}\n' +
'.p-high{color:var(--high);background:var(--high-bg);border-color:var(--high-line)}\n' +
'.p-medium{color:var(--med);background:var(--med-bg);border-color:var(--med-line)}\n' +
'.p-low{color:var(--low);background:var(--low-bg);border-color:var(--low-line)}\n' +
'.s-new{color:var(--ink-2);background:var(--surface-3);border-color:var(--line)}\n' +
'.s-active{color:var(--med);background:var(--med-bg);border-color:var(--med-line)}\n' +
'.s-blocked{color:var(--high);background:var(--high-bg);border-color:var(--high-line)}\n' +
'.s-done{color:var(--ok);background:var(--ok-bg);border-color:var(--ok-line)}\n' +
'.age{font-family:var(--mono);font-variant-numeric:tabular-nums;font-size:13px;color:var(--ink-2)}\n' +
'.age b{font-weight:600;color:var(--ink)}\n' +
'.age.warn b{color:var(--high)}\n' +
'.age.hot b{color:var(--crit)}\n' +
'.due{font-family:var(--mono);font-size:12.5px;color:var(--ink-2)}\n' +
'.due.over{color:var(--crit);font-weight:600}\n' +
'.tag{display:inline-block;font-family:var(--display);font-size:9.5px;font-weight:600;letter-spacing:.1em;text-transform:uppercase;color:var(--ink-3);border:1px solid var(--line-2);border-radius:3px;padding:0 4px;margin-left:6px;vertical-align:1px}\n' +
'.chev{color:var(--ink-3);transition:transform .16s ease;display:block}\n' +
'.row[aria-expanded="true"] .chev{transform:rotate(90deg)}\n' +
'.notecount{display:block;font-family:var(--mono);font-size:11px;color:var(--ink-3);margin-top:3px;white-space:nowrap}\n' +
'\n' +
'/* ---------- detail ---------- */\n' +
'.detail{border-bottom:1px solid var(--line);background:var(--surface-2);padding:16px 18px 18px 18px}\n' +
'.detail-grid{display:grid;grid-template-columns:minmax(0,1.6fr) minmax(240px,1fr);gap:22px}\n' +
'.detail h3{font-size:12px;font-family:var(--display);letter-spacing:.11em;text-transform:uppercase;color:var(--ink-3);margin-bottom:6px;font-weight:600}\n' +
'.detail .body{white-space:pre-wrap;font-size:14.5px;max-width:66ch;margin:0 0 16px}\n' +
'.meta{display:grid;grid-template-columns:auto 1fr;gap:5px 14px;font-size:13px;color:var(--ink-2);align-items:baseline}\n' +
'.meta dt{color:var(--ink-3);font-size:11px;font-family:var(--display);font-weight:600;letter-spacing:.09em;text-transform:uppercase;white-space:nowrap}\n' +
'.meta dd{margin:0;color:var(--ink)}\n' +
'.thread{display:flex;flex-direction:column;gap:9px;margin:0 0 14px}\n' +
'.note{background:var(--surface);border:1px solid var(--line);border-left:2px solid var(--accent);border-radius:6px;padding:8px 11px}\n' +
'.note .n-head{display:flex;gap:8px;align-items:baseline;font-size:11.5px;color:var(--ink-3);margin-bottom:2px}\n' +
'.note .n-head b{color:var(--ink);font-size:12.5px;font-weight:600}\n' +
'.note p{margin:0;font-size:14px;white-space:pre-wrap}\n' +
'.actions{display:flex;gap:8px;flex-wrap:wrap;align-items:center;padding-top:14px;margin-top:2px;border-top:1px solid var(--line)}\n' +
'.actions .spacer{flex:1}\n' +
'textarea.inp{width:100%;resize:vertical;min-height:64px;line-height:1.5}\n' +
'\n' +
'/* ---------- empty ---------- */\n' +
'.empty{padding:52px 24px;text-align:center}\n' +
'.empty h2{font-size:18px;margin-bottom:6px}\n' +
'.empty p{margin:0 auto 16px;max-width:46ch;color:var(--ink-2);font-size:14px}\n' +
'.empty .btn{margin:0 4px}\n' +
'\n' +
'/* ---------- form ---------- */\n' +
'.panel{background:var(--surface);border:1px solid var(--line);border-radius:10px;box-shadow:var(--shadow);padding:24px;max-width:760px;margin:18px auto 30px}\n' +
'.panel>header{margin-bottom:18px}\n' +
'.panel h2{font-size:20px;font-weight:700}\n' +
'.panel>header p{margin:4px 0 0;color:var(--ink-2);font-size:13.5px;max-width:58ch}\n' +
'.form-grid{display:grid;grid-template-columns:1fr 1fr;gap:16px}\n' +
'label.lab{display:block;font-family:var(--display);font-size:11px;font-weight:600;letter-spacing:.1em;text-transform:uppercase;color:var(--ink-2);margin-bottom:5px}\n' +
'label.lab span{color:var(--ink-3);text-transform:none;letter-spacing:0;font-family:var(--sans);font-weight:400;font-size:11.5px;margin-left:5px}\n' +
'.f-full{grid-column:1/-1}\n' +
'.inp{width:100%}\n' +
'.inp:focus{border-color:var(--accent)}\n' +
'.prios{display:grid;grid-template-columns:repeat(4,1fr);gap:8px}\n' +
'.prio{border:1px solid var(--line);border-radius:8px;padding:9px 10px;cursor:pointer;background:var(--surface);display:block;transition:border-color .12s,background .12s}\n' +
'.prio:hover{border-color:var(--line-2)}\n' +
'.prio input{position:absolute;opacity:0;pointer-events:none}\n' +
'.prio .pn{display:flex;align-items:center;gap:6px;font-family:var(--display);font-weight:600;font-size:13.5px}\n' +
'.prio .dot{width:9px;height:9px;border-radius:2px;flex:none}\n' +
'.prio .ph{display:block;font-size:11.5px;color:var(--ink-3);line-height:1.35;margin-top:3px}\n' +
'.prio[data-on="1"]{border-color:currentColor;box-shadow:inset 0 0 0 1px currentColor}\n' +
'.prio[data-k="critical"]{color:var(--crit)} .prio[data-k="critical"] .dot{background:var(--crit)}\n' +
'.prio[data-k="high"]{color:var(--high)} .prio[data-k="high"] .dot{background:var(--high)}\n' +
'.prio[data-k="medium"]{color:var(--med)} .prio[data-k="medium"] .dot{background:var(--med)}\n' +
'.prio[data-k="low"]{color:var(--low)} .prio[data-k="low"] .dot{background:var(--low)}\n' +
'.prio[data-on="1"] .pn,.prio[data-on="1"] .ph{color:inherit}\n' +
'.prio .pn,.prio .ph{color:var(--ink)}\n' +
'.prio .ph{color:var(--ink-3)}\n' +
'.form-foot{display:flex;align-items:center;gap:12px;margin-top:20px;padding-top:18px;border-top:1px solid var(--line)}\n' +
'.form-foot .hint{font-size:12.5px;color:var(--ink-3);flex:1}\n' +
'.err{color:var(--crit);font-size:12.5px;margin-top:5px;display:none}\n' +
'.err[data-on="1"]{display:block}\n' +
'.inp[aria-invalid="true"]{border-color:var(--crit)}\n' +
'\n' +
'/* ---------- misc ---------- */\n' +
'.banner{display:flex;gap:9px;align-items:center;flex-wrap:wrap;border:1px solid var(--high-line);background:var(--high-bg);color:var(--high);border-radius:8px;padding:9px 13px;font-size:13px;margin:14px 0 0}\n' +
'.banner b{font-weight:600}\n' +
'.banner .spacer{flex:1;min-width:8px}\n' +
'.banner .btn{color:var(--high);border-color:var(--high-line)}\n' +
'.banner .btn:hover{background:var(--surface)}\n' +
'.toast{position:fixed;left:50%;bottom:22px;transform:translateX(-50%) translateY(8px);background:var(--ink);color:var(--ground);padding:10px 16px;border-radius:8px;font-size:13.5px;box-shadow:var(--shadow);opacity:0;pointer-events:none;transition:opacity .18s ease,transform .18s ease;z-index:60;max-width:min(520px,90vw);text-align:center}\n' +
'.toast[data-on="1"]{opacity:1;transform:translateX(-50%) translateY(0)}\n' +
'.toast[data-kind="warn"]{background:var(--crit);color:#fff}\n' +
'.saving{font-size:12px;color:var(--ink-3);display:none;align-items:center;gap:6px}\n' +
'.saving[data-on="1"]{display:inline-flex}\n' +
'.spin{width:11px;height:11px;border:2px solid var(--line-2);border-top-color:var(--accent);border-radius:50%;animation:sp .7s linear infinite}\n' +
'@keyframes sp{to{transform:rotate(1turn)}}\n' +
'.foot{padding:6px 0 34px;color:var(--ink-3);font-size:12px;display:flex;gap:14px;flex-wrap:wrap;align-items:center}\n' +
'.controls-right{margin-left:auto;display:flex;align-items:center;gap:10px}\n' +
'.count{font-size:12.5px;color:var(--ink-3);white-space:nowrap}\n' +
'[hidden]{display:none !important}\n' +
'@media (prefers-reduced-motion:reduce){*{animation-duration:.01ms !important;transition-duration:.01ms !important}}\n' +
'\n' +
'/* ---------- narrow ---------- */\n' +
'@media (max-width:940px){\n' +
'  .stats{grid-template-columns:repeat(2,1fr)}\n' +
'  .grid{display:block;min-width:0}\n' +
'  .head{display:none}\n' +
'  .grid.row{display:grid;grid-template-columns:4px auto auto auto 1fr;grid-template-rows:auto auto auto;column-gap:11px;padding-right:13px;align-items:center}\n' +
'  .row .stripe{grid-column:1;grid-row:1/4}\n' +
'  .row .cell{padding:0}\n' +
'  .row .c-num{grid-column:2;grid-row:1;padding:11px 0 0;display:flex;gap:7px;align-items:center}\n' +
'  .row .c-prio{grid-column:3/6;grid-row:1;padding:11px 0 0;justify-self:start}\n' +
'  .row .c-main{grid-column:2/6;grid-row:2;padding:5px 0 0}\n' +
'  .need{white-space:normal;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical}\n' +
'  .row .c-who,.row .c-age,.row .c-due{grid-row:3;padding:9px 0 12px;align-self:start}\n' +
'  .row .c-who{grid-column:2}\n' +
'  .row .c-age{grid-column:3}\n' +
'  .row .c-due{grid-column:4}\n' +
'  .row .c-status{grid-column:5;grid-row:3;padding:9px 0 12px;justify-self:start;align-self:start}\n' +
'  .notecount{display:inline;margin-left:6px}\n' +
'  .row .c-chev{display:none}\n' +
'  .detail-grid{grid-template-columns:1fr;gap:16px}\n' +
'  .form-grid{grid-template-columns:1fr}\n' +
'  .prios{grid-template-columns:1fr 1fr}\n' +
'  .top-in{gap:10px}\n' +
'}\n' +
'@media (max-width:560px){\n' +
'  .wrap{padding:0 13px}\n' +
'  .stats{grid-template-columns:1fr 1fr;gap:8px}\n' +
'  .panel{padding:17px}\n' +
'}';

var CLIENT_JS = '(function(){\n' +
'"use strict";\n' +
'\n' +
'/* ---------------- constants ---------------- */\n' +
'var CLIENTS = [\n' +
'  "Beauty Sleep Club",\n' +
'  "Bioroot Labs",\n' +
'  "Botane",\n' +
'  "CRWN",\n' +
'  "Clarity MD",\n' +
'  "Clean Supplement USA",\n' +
'  "Drop Guys",\n' +
'  "Earthline Naturals",\n' +
'  "Envitamin",\n' +
'  "Erae Paris",\n' +
'  "Fieldy",\n' +
'  "Fygg",\n' +
'  "GLP-1 SOS",\n' +
'  "GumPlus",\n' +
'  "Honey Mark",\n' +
'  "Hug Sleep",\n' +
'  "Hushed Socks",\n' +
'  "Hydrant",\n' +
'  "Hyro",\n' +
'  "JadyK",\n' +
'  "Kinova Labs",\n' +
'  "Nectar Hydration",\n' +
'  "Nova",\n' +
'  "Nutrissa",\n' +
'  "Purriq",\n' +
'  "Salt of the Earth",\n' +
'  "Saphire Saffron",\n' +
'  "Shush",\n' +
'  "Vayose",\n' +
'  "Wild Pouches"\n' +
'];\n' +
'var LOGO = \'<svg class="mark" width="42" height="34" viewBox="0 0 46 36" fill="none" aria-hidden="true">\' +\n' +
'  \'<path d="M32.5 8.2c1.6-3.2 2.7-4.9 4.4-5.8" stroke="currentColor" stroke-width="2.1" stroke-linecap="round"/>\' +\n' +
'  \'<circle cx="37.8" cy="2.1" r="2.1" fill="currentColor"/>\' +\n' +
'  \'<rect x="7" y="7" width="34" height="26" rx="13" fill="currentColor"/>\' +\n' +
'  \'<circle cx="9.5" cy="20" r="9.6" fill="currentColor"/>\' +\n' +
'  \'<rect x="17.5" y="17.4" width="7.4" height="4.6" rx="2.3" fill="var(--brand-eye)"/>\' +\n' +
'  \'<rect x="28" y="17.4" width="7.4" height="4.6" rx="2.3" fill="var(--brand-eye)"/>\' +\n' +
'"<\\/svg>";\n' +
'var TEAM = ["Ariel","Coya","Shay","Mylene","Lysa","Mark","Jentsyn"];\n' +
'var PRIOS = [\n' +
'  {k:"critical",n:"Critical",hint:"Shipments stopped or client escalating"},\n' +
'  {k:"high",n:"High",hint:"Blocking someone\\\'s work today"},\n' +
'  {k:"medium",n:"Medium",hint:"Needed this week"},\n' +
'  {k:"low",n:"Low",hint:"Whenever there\\\'s room"}\n' +
'];\n' +
'var PRIO_RANK = {critical:0,high:1,medium:2,low:3};\n' +
'var STATUSES = [\n' +
'  {k:"new",n:"Submitted",hint:"Waiting on Glen"},\n' +
'  {k:"active",n:"Glen working",hint:"Picked up"},\n' +
'  {k:"blocked",n:"Needs your reply",hint:"Glen needs info back"},\n' +
'  {k:"done",n:"Resolved",hint:"Closed out"}\n' +
'];\n' +
'var STATUS_RANK = {blocked:0,active:1,new:2,done:3};\n' +
'var SORTS = [\n' +
'  {k:"priority",n:"Priority"},\n' +
'  {k:"waiting",n:"Longest waiting"},\n' +
'  {k:"created",n:"Newest first"},\n' +
'  {k:"due",n:"Needed by"},\n' +
'  {k:"client",n:"Client"},\n' +
'  {k:"requester",n:"Who asked"},\n' +
'  {k:"status",n:"Status"},\n' +
'  {k:"num",n:"Request #"}\n' +
'];\n' +
'var SAMPLES = [\n' +
'  {id:"s1",num:0,sample:true,client:"Northline Outdoors",requester:"Maya",priority:"critical",status:"new",ref:"SO-88412",\n' +
'   need:"Inventory in RoboShip shows 340 units of the trail jacket but the bin is empty. Two orders are stuck in pick and the client is asking for a ship date.",\n' +
'   due:"",createdAt:iso(-3),updatedAt:iso(-3),notes:[]},\n' +
'  {id:"s2",num:0,sample:true,client:"Cedar & Co",requester:"Devon",priority:"high",status:"active",ref:"",\n' +
'   need:"Need a new pack station mapped to dock door 4 before the Thursday surge.",\n' +
'   due:"",createdAt:iso(-1),updatedAt:iso(-1),notes:[{by:"Glen",text:"Mapping it tonight after the last wave.",at:iso(-1)}]},\n' +
'  {id:"s3",num:0,sample:true,client:"Harbor Supply",requester:"Priya",priority:"low",status:"done",ref:"",\n' +
'   need:"Add me to the daily cycle-count report distribution list.",\n' +
'   due:"",createdAt:iso(-9),updatedAt:iso(-6),notes:[]}\n' +
'];\n' +
'function iso(dayOffset){var d=new Date();d.setDate(d.getDate()+dayOffset);return d.toISOString();}\n' +
'\n' +
'/* ---------------- state ---------------- */\n' +
'var state = readState();\n' +
'var prefs = loadPrefs();\n' +
'if(!prefs.sort){prefs.sort="priority";prefs.dir="nat";}\n' +
'if(!prefs.tab) prefs.tab = "queue";\n' +
'if(!prefs.view) prefs.view = "open";\n' +
'var expanded = {};\n' +
'var previewOn = false;\n' +
'var noteOpen = {};\n' +
'var confirmDel = null;\n' +
'\n' +
'function readState(){\n' +
'  try{\n' +
'    var raw = document.getElementById("rs-state").textContent;\n' +
'    var s = JSON.parse(raw);\n' +
'    if(s && Array.isArray(s.items)) return s;\n' +
'  }catch(e){}\n' +
'  return {v:1,seq:1,items:[]};\n' +
'}\n' +
'function loadPrefs(){\n' +
'  try{ return JSON.parse(localStorage.getItem("rs-board-prefs")||"{}") || {}; }catch(e){ return {}; }\n' +
'}\n' +
'function savePrefs(){\n' +
'  try{ localStorage.setItem("rs-board-prefs", JSON.stringify(prefs)); }catch(e){}\n' +
'}\n' +
'\n' +
'/* ---------------- helpers ---------------- */\n' +
'function esc(s){\n' +
'  return String(s==null?"":s).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/\\\'/g,"&#39;");\n' +
'}\n' +
'function byId(id){ return document.getElementById(id); }\n' +
'function prioName(k){ for(var i=0;i<PRIOS.length;i++) if(PRIOS[i].k===k) return PRIOS[i].n; return k; }\n' +
'function statusName(k){ for(var i=0;i<STATUSES.length;i++) if(STATUSES[i].k===k) return STATUSES[i].n; return k; }\n' +
'function isOpen(it){ return it.status !== "done"; }\n' +
'function days(fromIso){\n' +
'  var t = Date.parse(fromIso);\n' +
'  if(isNaN(t)) return 0;\n' +
'  return Math.max(0, Math.floor((Date.now()-t)/86400000));\n' +
'}\n' +
'function fmtDate(isoStr){\n' +
'  var d = new Date(isoStr);\n' +
'  if(isNaN(d.getTime())) return "";\n' +
'  var now = new Date();\n' +
'  var opts = {month:"short",day:"numeric"};\n' +
'  if(d.getFullYear() !== now.getFullYear()) opts.year = "numeric";\n' +
'  return d.toLocaleDateString(undefined,opts);\n' +
'}\n' +
'function fmtDateTime(isoStr){\n' +
'  var d = new Date(isoStr);\n' +
'  if(isNaN(d.getTime())) return "";\n' +
'  return d.toLocaleDateString(undefined,{month:"short",day:"numeric"}) + ", " + d.toLocaleTimeString(undefined,{hour:"numeric",minute:"2-digit"});\n' +
'}\n' +
'function dueDate(s){\n' +
'  if(!s) return null;\n' +
'  var p = String(s).split("-");\n' +
'  if(p.length !== 3) return null;\n' +
'  var d = new Date(+p[0], +p[1]-1, +p[2]);\n' +
'  return isNaN(d.getTime()) ? null : d;\n' +
'}\n' +
'function fmtDue(s){\n' +
'  var d = dueDate(s);\n' +
'  if(!d) return "";\n' +
'  var opts = {month:"short",day:"numeric"};\n' +
'  if(d.getFullYear() !== new Date().getFullYear()) opts.year = "numeric";\n' +
'  return d.toLocaleDateString(undefined,opts);\n' +
'}\n' +
'function isOverdue(it){\n' +
'  var d = dueDate(it.due);\n' +
'  if(!d || !isOpen(it)) return false;\n' +
'  var today = new Date(); today.setHours(0,0,0,0);\n' +
'  return d < today;\n' +
'}\n' +
'function uid(){\n' +
'  return "r" + Date.now().toString(36) + Math.random().toString(36).slice(2,7);\n' +
'}\n' +
'function allItems(){\n' +
'  var list = state.items.slice();\n' +
'  if(previewOn && !state.items.length) list = list.concat(SAMPLES);\n' +
'  return list;\n' +
'}\n' +
'\n' +
'/* ---------------- api + save ---------------- */\n' +
'function apiFetch(method, path, body){\n' +
'  var opts = {method: method, headers:{}};\n' +
'  if(body !== undefined){\n' +
'    opts.headers["Content-Type"] = "application/json";\n' +
'    opts.body = JSON.stringify(body);\n' +
'  }\n' +
'  return fetch(path, opts).then(function(res){\n' +
'    if(res.status === 204) return null;\n' +
'    return res.json().catch(function(){ return null; }).then(function(data){\n' +
'      if(!res.ok){\n' +
'        var e = new Error((data && data.error) || ("HTTP " + res.status));\n' +
'        e.status = res.status;\n' +
'        throw e;\n' +
'      }\n' +
'      return data;\n' +
'    });\n' +
'  });\n' +
'}\n' +
'function errMsg(err){\n' +
'  if(err && err.status === 404) return "That request no longer exists - someone may have deleted it.";\n' +
'  if(err && err.status === 429) return "Too many changes at once. Wait a moment and try again.";\n' +
'  if(err && err.status >= 400 && err.status < 500) return err.message || "That change couldn\\\'t be saved.";\n' +
'  return "Couldn\\\'t reach the server. Check your connection and try again.";\n' +
'}\n' +
'function setSaving(on){\n' +
'  var el = byId("saving");\n' +
'  if(el) el.setAttribute("data-on", on ? "1" : "0");\n' +
'}\n' +
'var toastTimer = null;\n' +
'function toast(msg, kind){\n' +
'  var el = byId("toast");\n' +
'  if(!el) return;\n' +
'  el.textContent = msg;\n' +
'  el.setAttribute("data-kind", kind || "ok");\n' +
'  el.setAttribute("data-on","1");\n' +
'  clearTimeout(toastTimer);\n' +
'  toastTimer = setTimeout(function(){ el.setAttribute("data-on","0"); }, 4200);\n' +
'}\n' +
'function commit(action){\n' +
'  var snapshot = JSON.stringify(state);\n' +
'  action.apply(state);\n' +
'  renderAll();\n' +
'  setSaving(true);\n' +
'  apiFetch(action.method, action.path, action.body).then(function(resp){\n' +
'    setSaving(false);\n' +
'    if(resp && action.reconcile) action.reconcile(state, resp);\n' +
'    toast(action.okMsg || "Saved for the whole team.");\n' +
'    renderAll();\n' +
'  }).catch(function(err){\n' +
'    setSaving(false);\n' +
'    state = JSON.parse(snapshot);\n' +
'    toast(errMsg(err), "warn");\n' +
'    renderAll();\n' +
'  });\n' +
'}\n' +
'\n' +
'/* ---------------- sorting + filtering ---------------- */\n' +
'function cmpFor(key){\n' +
'  switch(key){\n' +
'    case "waiting":  return function(a,b){ return Date.parse(a.createdAt) - Date.parse(b.createdAt); };\n' +
'    case "created":  return function(a,b){ return Date.parse(b.createdAt) - Date.parse(a.createdAt); };\n' +
'    case "client":   return function(a,b){ return String(a.client).toLowerCase().localeCompare(String(b.client).toLowerCase()); };\n' +
'    case "requester":return function(a,b){ return String(a.requester).toLowerCase().localeCompare(String(b.requester).toLowerCase()); };\n' +
'    case "status":   return function(a,b){ return STATUS_RANK[a.status] - STATUS_RANK[b.status]; };\n' +
'    case "num":      return function(a,b){ return b.num - a.num; };\n' +
'    case "due":      return function(a,b){\n' +
'      var da = dueDate(a.due), db = dueDate(b.due);\n' +
'      if(!da && !db) return 0;\n' +
'      if(!da) return 1;\n' +
'      if(!db) return -1;\n' +
'      return da - db;\n' +
'    };\n' +
'    default:         return function(a,b){ return PRIO_RANK[a.priority] - PRIO_RANK[b.priority]; };\n' +
'  }\n' +
'}\n' +
'function visibleItems(){\n' +
'  var q = (prefs.q||"").trim().toLowerCase();\n' +
'  var list = allItems().filter(function(it){\n' +
'    if(prefs.view === "open" && !isOpen(it)) return false;\n' +
'    if(prefs.view === "done" && isOpen(it)) return false;\n' +
'    if(prefs.client && it.client !== prefs.client) return false;\n' +
'    if(prefs.prio && it.priority !== prefs.prio) return false;\n' +
'    if(q){\n' +
'      var hay = [it.client,it.requester,it.need,it.ref,("#"+it.num)].join(" ").toLowerCase();\n' +
'      if(hay.indexOf(q) === -1) return false;\n' +
'    }\n' +
'    return true;\n' +
'  });\n' +
'  var base = cmpFor(prefs.sort);\n' +
'  var tie = function(a,b){ return Date.parse(a.createdAt) - Date.parse(b.createdAt); };\n' +
'  list.sort(function(a,b){\n' +
'    if(prefs.sort !== "status"){\n' +
'      var ao = isOpen(a) ? 0 : 1, bo = isOpen(b) ? 0 : 1;\n' +
'      if(ao !== bo) return ao - bo;\n' +
'    }\n' +
'    var r = base(a,b);\n' +
'    if(prefs.dir === "rev") r = -r;\n' +
'    return r !== 0 ? r : tie(a,b);\n' +
'  });\n' +
'  return list;\n' +
'}\n' +
'function activeFilters(){\n' +
'  return !!((prefs.q && prefs.q.trim()) || prefs.client || prefs.prio || prefs.view !== "open");\n' +
'}\n' +
'function clients(){\n' +
'  var seen = {}, out = [];\n' +
'  allItems().forEach(function(it){ if(it.client && !seen[it.client]){ seen[it.client]=1; out.push(it.client); } });\n' +
'  out.sort(function(a,b){ return a.toLowerCase().localeCompare(b.toLowerCase()); });\n' +
'  return out;\n' +
'}\n' +
'\n' +
'/* ---------------- render: shell ---------------- */\n' +
'function renderAll(){\n' +
'  var app = byId("app");\n' +
'  var focusId = document.activeElement && document.activeElement.id;\n' +
'  var selStart = null;\n' +
'  if(focusId === "q" && document.activeElement.selectionStart != null) selStart = document.activeElement.selectionStart;\n' +
'  app.innerHTML = shellHTML();\n' +
'  bind();\n' +
'  if(focusId){\n' +
'    var again = byId(focusId);\n' +
'    if(again && again.focus){\n' +
'      again.focus();\n' +
'      if(selStart != null && again.setSelectionRange) try{ again.setSelectionRange(selStart, selStart); }catch(e){}\n' +
'    }\n' +
'  }\n' +
'}\n' +
'function shellHTML(){\n' +
'  return header() +\n' +
'    \'<main class="wrap">\' +\n' +
'      (prefs.tab === "queue" ? queueHTML() : formHTML()) +\n' +
'    "</main>" +\n' +
'    \'<div class="wrap"><p class="foot">\' +\n' +
'      "<span>Every change saves to this board for everyone.</span>" +\n' +
'      \'<span class="saving" id="saving"><span class="spin"></span>Saving...</span>\' +\n' +
'    "</p></div>" +\n' +
'    \'<div class="toast" id="toast" role="status" aria-live="polite"></div>\';\n' +
'}\n' +
'function header(){\n' +
'  var name = prefs.name ? esc(prefs.name) : "";\n' +
'  var custom = !!(prefs.name && TEAM.indexOf(prefs.name) === -1);\n' +
'  return \'<header class="top"><div class="wrap top-in">\' +\n' +
'    LOGO +\n' +
'    \'<div class="brand"><span class="wordmark">Robo3PL</span>\' +\n' +
'    "<h1>RoboShip Request Board</h1></div>" +\n' +
'    \'<div class="top-right">\' +\n' +
'      \'<span class="who"><label class="eyebrow" for="whoami">You are</label>\' +\n' +
'        \'<select id="whoami" aria-label="Who are you?">\' +\n' +
'          \'<option value="">Choose...</option>\' +\n' +
'          TEAM.map(function(t){ return \'<option value="\' + esc(t) + \'"\' + (prefs.name===t?" selected":"") + ">" + esc(t) + "</option>"; }).join("") +\n' +
'          (custom ? \'<option value="\' + name + \'" selected>\' + name + "</option>" : "") +\n' +
'          \'<option value="__other">Someone else...</option>\' +\n' +
'        "</select>" +\n' +
'        \'<input id="whoami-other" class="inp" placeholder="Your name" autocomplete="off" aria-label="Your name" hidden>\' +\n' +
'      "</span>" +\n' +
'      \'<div class="tabs" role="tablist">\' +\n' +
'        \'<button role="tab" aria-selected="\' + (prefs.tab==="queue") + \'" data-act="tab" data-tab="queue">Queue</button>\' +\n' +
'        \'<button role="tab" aria-selected="\' + (prefs.tab==="submit") + \'" data-act="tab" data-tab="submit">New request</button>\' +\n' +
'      "</div>" +\n' +
'    "</div>" +\n' +
'  "</div></header>";\n' +
'}\n' +
'\n' +
'/* ---------------- render: queue ---------------- */\n' +
'function queueHTML(){\n' +
'  return statsHTML() + bannerHTML() + controlsHTML() +\n' +
'    \'<div class="board"><div class="scroller">\' + headHTML() + listHTML() + "</div></div>";\n' +
'}\n' +
'function statsHTML(){\n' +
'  var items = allItems();\n' +
'  var open = items.filter(isOpen);\n' +
'  var crit = open.filter(function(i){ return i.priority === "critical"; }).length;\n' +
'  var oldest = 0;\n' +
'  open.forEach(function(i){ var d = days(i.createdAt); if(d > oldest) oldest = d; });\n' +
'  var weekAgo = Date.now() - 7*86400000;\n' +
'  var closed = items.filter(function(i){ return !isOpen(i) && Date.parse(i.updatedAt||i.createdAt) >= weekAgo; }).length;\n' +
'  function tile(k,v,unit,cls){\n' +
'    return \'<div class="stat\' + (cls?" "+cls:"") + \'"><span class="k">\' + k + "</span>" +\n' +
'      \'<span class="v">\' + v + (unit ? "<small>" + unit + "</small>" : "") + "</span></div>";\n' +
'  }\n' +
'  return \'<div class="wrap"><div class="stats">\' +\n' +
'    tile("Open requests", open.length, open.length === 1 ? "request" : "requests", "") +\n' +
'    tile("Critical", crit, crit === 1 ? "waiting" : "waiting", crit > 0 ? "hot" : "") +\n' +
'    tile("Longest wait", oldest, oldest === 1 ? "day" : "days", oldest >= 7 ? "hot" : (oldest >= 4 ? "warm" : "")) +\n' +
'    tile("Resolved this week", closed, "", "") +\n' +
'  "</div></div>";\n' +
'}\n' +
'function bannerHTML(){\n' +
'  var out = "";\n' +
'  if(previewOn){\n' +
'    out += \'<div class="wrap"><div class="banner"><b>Just an example.</b>&nbsp;These rows aren\\\'t real requests and nothing here is saved.\' +\n' +
'      \'<span class="spacer"></span><button class="btn ghost sm" data-act="exit-preview">Back to your requests</button></div></div>\';\n' +
'  }\n' +
'  return out;\n' +
'}\n' +
'function controlsHTML(){\n' +
'  var cs = clients();\n' +
'  var opts = cs.map(function(c){ return \'<option value="\' + esc(c) + \'"\' + (prefs.client===c?" selected":"") + ">" + esc(c) + "</option>"; }).join("");\n' +
'  var prioOpts = PRIOS.map(function(p){ return \'<option value="\' + p.k + \'"\' + (prefs.prio===p.k?" selected":"") + ">" + p.n + "</option>"; }).join("");\n' +
'  var sortOpts = SORTS.map(function(s){ return \'<option value="\' + s.k + \'"\' + (prefs.sort===s.k?" selected":"") + ">" + s.n + "</option>"; }).join("");\n' +
'  var n = visibleItems().length;\n' +
'  return \'<div class="wrap"><div class="controls">\' +\n' +
'    \'<div class="seg" role="group" aria-label="Which requests to show">\' +\n' +
'      \'<button data-act="view" data-view="open" aria-pressed="\' + (prefs.view==="open") + \'">Open</button>\' +\n' +
'      \'<button data-act="view" data-view="done" aria-pressed="\' + (prefs.view==="done") + \'">Resolved</button>\' +\n' +
'      \'<button data-act="view" data-view="all" aria-pressed="\' + (prefs.view==="all") + \'">All</button>\' +\n' +
'    "</div>" +\n' +
'    \'<div class="search"><svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">\' +\n' +
'      \'<circle cx="7" cy="7" r="4.5" stroke="currentColor" stroke-width="1.6"/><path d="M10.5 10.5 14 14" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/></svg>\' +\n' +
'      \'<input id="q" type="search" placeholder="Search client, person, or wording" value="\' + esc(prefs.q||"") + \'" aria-label="Search requests">\' +\n' +
'    "</div>" +\n' +
'    \'<div class="controls-right">\' +\n' +
'      \'<span class="count">\' + n + " of " + allItems().length + " shown</span>" +\n' +
'      \'<button class="btn sm" data-act="csv">Copy as CSV</button>\' +\n' +
'    "</div>" +\n' +
'  "</div>" +\n' +
'  \'<div class="controls filters">\' +\n' +
'    \'<select id="f-client" aria-label="Filter by client"><option value="">All clients</option>\' + opts + "</select>" +\n' +
'    \'<select id="f-prio" aria-label="Filter by priority"><option value="">Any priority</option>\' + prioOpts + "</select>" +\n' +
'    \'<div class="field"><label class="eyebrow" for="f-sort">Sort by</label>\' +\n' +
'      \'<select id="f-sort">\' + sortOpts + "</select>" +\n' +
'      \'<button class="btn ghost sm" data-act="dir" title="Reverse the order" aria-label="Reverse the order">\' + (prefs.dir==="rev" ? "\\u2191" : "\\u2193") + "</button>" +\n' +
'    "</div>" +\n' +
'    (activeFilters() ? \'<button class="btn ghost sm" data-act="clearfilters">Clear filters</button>\' : "") +\n' +
'  "</div></div>";\n' +
'}\n' +
'function headHTML(){\n' +
'  function h(key,label,cls){\n' +
'    var on = prefs.sort === key;\n' +
'    var arrow = on ? \'<span class="arrow">\' + (prefs.dir==="rev" ? "\\u25b2" : "\\u25bc") + "</span>" : "";\n' +
'    return \'<div class="cell \' + cls + \'"><button data-act="sort" data-sort="\' + key + \'" data-active="\' + (on?1:0) + \'"\' +\n' +
'      \' aria-label="Sort by \' + label + \'">\' + label + arrow + "</button></div>";\n' +
'  }\n' +
'  return \'<div class="grid head" role="row">\' +\n' +
'    \'<div class="cell"></div>\' +\n' +
'    h("num","#","c-num") +\n' +
'    h("priority","Priority","c-prio") +\n' +
'    h("client","Client &amp; request","c-main") +\n' +
'    h("requester","From","c-who") +\n' +
'    h("waiting","Waiting","c-age") +\n' +
'    h("due","Needed by","c-due") +\n' +
'    h("status","Status","c-status") +\n' +
'    \'<div class="cell"></div>\' +\n' +
'  "</div>";\n' +
'}\n' +
'function listHTML(){\n' +
'  var list = visibleItems();\n' +
'  if(!list.length) return emptyHTML();\n' +
'  return list.map(rowHTML).join("");\n' +
'}\n' +
'function emptyHTML(){\n' +
'  var total = state.items.length;\n' +
'  if(total === 0 && !previewOn){\n' +
'    return \'<div class="empty"><h2>Nothing in the queue yet</h2>\' +\n' +
'      "<p>When someone on the team is waiting on Glen for something, they add it here: client, what they need, and how urgent it is. Everything lands on this board, worst first.</p>" +\n' +
'      \'<button class="btn primary" data-act="tab" data-tab="submit">Add the first request</button>\' +\n' +
'      \'<button class="btn" data-act="preview">Show me an example</button></div>\';\n' +
'  }\n' +
'  if(total === 0 && previewOn){\n' +
'    return "";\n' +
'  }\n' +
'  return \'<div class="empty"><h2>Nothing matches those filters</h2>\' +\n' +
'    "<p>There are " + total + " request" + (total===1?"":"s") + " on the board. Try widening the view or clearing the search.</p>" +\n' +
'    \'<button class="btn" data-act="clearfilters">Clear filters</button></div>\';\n' +
'}\n' +
'function rowHTML(it){\n' +
'  var open = !!expanded[it.id];\n' +
'  var age = days(it.createdAt);\n' +
'  var ageCls = !isOpen(it) ? "" : (age >= 7 || (it.priority === "critical" && age >= 2) ? "hot" : (age >= 4 ? "warn" : ""));\n' +
'  var overdue = isOverdue(it);\n' +
'  var notes = (it.notes && it.notes.length) || 0;\n' +
'  var row = \'<div class="grid row" role="row" tabindex="0" data-act="expand" data-id="\' + esc(it.id) + \'" data-p="\' + esc(it.priority) + \'"\' +\n' +
'      \' data-done="\' + (isOpen(it) ? 0 : 1) + \'" data-sample="\' + (it.sample?1:0) + \'" aria-expanded="\' + open + \'">\' +\n' +
'    \'<div class="stripe"></div>\' +\n' +
'    \'<div class="cell c-num"><span class="num">\' + (it.sample ? "-" : "#" + it.num) + "</span>" +\n' +
'      (it.sample ? \'<span class="tag">Example</span>\' : "") + "</div>" +\n' +
'    \'<div class="cell c-prio"><span class="pill p-\' + esc(it.priority) + \'">\' + prioName(it.priority) + "</span></div>" +\n' +
'    \'<div class="cell c-main"><div class="client">\' + esc(it.client) +\n' +
'      (it.ref ? \'<span class="tag">\' + esc(it.ref) + "</span>" : "") + "</div>" +\n' +
'      \'<div class="need">\' + esc(it.need) + "</div></div>" +\n' +
'    \'<div class="cell c-who"><span class="who-cell">\' + esc(it.requester) + "</span></div>" +\n' +
'    \'<div class="cell c-age"><span class="age \' + ageCls + \'">\' + (isOpen(it) ? "<b>" + age + "</b>d" : "-") + "</span></div>" +\n' +
'    \'<div class="cell c-due"><span class="due\' + (overdue ? " over" : "") + \'">\' + (it.due ? fmtDue(it.due) + (overdue ? " \\u26a0" : "") : "-") + "</span></div>" +\n' +
'    \'<div class="cell c-status"><span class="pill s-\' + esc(it.status) + \'">\' + statusName(it.status) + "</span>" +\n' +
'      (notes ? \'<span class="notecount">\' + notes + " note" + (notes===1?"":"s") + "</span>" : "") +\n' +
'      "</div>" +\n' +
'    \'<div class="cell c-chev"><svg class="chev" width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">\' +\n' +
'      \'<path d="m6 3 5 5-5 5" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/></svg></div>\' +\n' +
'  "</div>";\n' +
'  return row + (open ? detailHTML(it) : "");\n' +
'}\n' +
'function detailHTML(it){\n' +
'  var canEdit = !it.sample;\n' +
'  var statusOpts = STATUSES.map(function(s){\n' +
'    return \'<option value="\' + s.k + \'"\' + (it.status===s.k?" selected":"") + ">" + s.n + "</option>";\n' +
'  }).join("");\n' +
'  var notes = (it.notes||[]).map(function(n){\n' +
'    return \'<div class="note"><div class="n-head"><b>\' + esc(n.by) + \'</b><span class="mono">\' + fmtDateTime(n.at) + "</span></div>" +\n' +
'      "<p>" + esc(n.text) + "</p></div>";\n' +
'  }).join("");\n' +
'  var noteBox = noteOpen[it.id]\n' +
'    ? \'<div style="margin-bottom:14px"><textarea class="inp" id="note-\' + esc(it.id) + \'" placeholder="Add an update, a question, or what you need back" aria-label="New note"></textarea>\' +\n' +
'      \'<div style="display:flex;gap:8px;margin-top:8px">\' +\n' +
'      \'<button class="btn primary sm" data-act="note-save" data-id="\' + esc(it.id) + \'">Post note</button>\' +\n' +
'      \'<button class="btn ghost sm" data-act="note-cancel" data-id="\' + esc(it.id) + \'">Cancel</button></div></div>\'\n' +
'    : "";\n' +
'  return \'<div class="detail">\' +\n' +
'    \'<div class="detail-grid">\' +\n' +
'      "<div>" +\n' +
'        "<h3>What they need</h3><p class=\\"body\\">" + esc(it.need) + "</p>" +\n' +
'        "<h3>Notes</h3>" +\n' +
'        (notes ? \'<div class="thread">\' + notes + "</div>" : \'<p style="color:var(--ink-3);font-size:13.5px;margin:0 0 14px">No notes yet.</p>\') +\n' +
'        noteBox +\n' +
'        (canEdit && !noteOpen[it.id] ? \'<button class="btn sm" data-act="note-open" data-id="\' + esc(it.id) + \'">Add a note</button>\' : "") +\n' +
'      "</div>" +\n' +
'      "<div>" +\n' +
'        "<h3>Details</h3>" +\n' +
'        \'<dl class="meta">\' +\n' +
'          "<dt>Client</dt><dd>" + esc(it.client) + "</dd>" +\n' +
'          "<dt>Submitted by</dt><dd>" + esc(it.requester) + "</dd>" +\n' +
'          \'<dt>Submitted</dt><dd class="mono">\' + fmtDateTime(it.createdAt) + "</dd>" +\n' +
'          (it.ref ? \'<dt>Order / ref</dt><dd class="mono">\' + esc(it.ref) + "</dd>" : "") +\n' +
'          (it.due ? \'<dt>Needed by</dt><dd class="mono\' + (isOverdue(it) ? " due over" : "") + \'">\' + fmtDue(it.due) + "</dd>" : "") +\n' +
'          \'<dt>Last update</dt><dd class="mono">\' + fmtDateTime(it.updatedAt || it.createdAt) + "</dd>" +\n' +
'        "</dl>" +\n' +
'      "</div>" +\n' +
'    "</div>" +\n' +
'    \'<div class="actions">\' +\n' +
'      (canEdit\n' +
'        ? \'<label class="eyebrow" for="st-\' + esc(it.id) + \'">Status</label>\' +\n' +
'          \'<select id="st-\' + esc(it.id) + \'" data-act="status" data-id="\' + esc(it.id) + \'">\' + statusOpts + "</select>" +\n' +
'          \'<label class="eyebrow" for="pr-\' + esc(it.id) + \'" style="margin-left:8px">Priority</label>\' +\n' +
'          \'<select id="pr-\' + esc(it.id) + \'" data-act="reprio" data-id="\' + esc(it.id) + \'">\' +\n' +
'            PRIOS.map(function(p){ return \'<option value="\' + p.k + \'"\' + (it.priority===p.k?" selected":"") + ">" + p.n + "</option>"; }).join("") +\n' +
'          "</select>" +\n' +
'          \'<span class="spacer"></span>\' +\n' +
'          (isOpen(it)\n' +
'            ? \'<button class="btn sm" data-act="resolve" data-id="\' + esc(it.id) + \'">Mark resolved</button>\'\n' +
'            : \'<button class="btn sm" data-act="reopen" data-id="\' + esc(it.id) + \'">Reopen</button>\') +\n' +
'          (confirmDel === it.id\n' +
'            ? \'<span class="delconfirm">Delete #\' + it.num + " for everyone?</span>" +\n' +
'              \'<button class="btn sm danger" data-act="del-yes" data-id="\' + esc(it.id) + \'">Yes, delete</button>\' +\n' +
'              \'<button class="btn ghost sm" data-act="del-no" data-id="\' + esc(it.id) + \'">Keep it</button>\'\n' +
'            : \'<button class="btn ghost sm danger" data-act="del" data-id="\' + esc(it.id) + \'">Delete</button>\')\n' +
'        : \'<span style="font-size:12.5px;color:var(--ink-3)">Example row - not saved to the board.</span>\') +\n' +
'    "</div>" +\n' +
'  "</div>";\n' +
'}\n' +
'\n' +
'/* ---------------- render: form ---------------- */\n' +
'function formHTML(){\n' +
'  var d = prefs.draft || {};\n' +
'  var prio = d.priority || "";\n' +
'  var otherClient = !!(d.client && CLIENTS.indexOf(d.client) === -1);\n' +
'  var who = d.requester != null ? d.requester : (prefs.name||"");\n' +
'  var otherName = !!(who && TEAM.indexOf(who) === -1);\n' +
'  return \'<div class="panel"><header>\' +\n' +
'    "<h2>New request for Glen</h2>" +\n' +
'    "<p>Say what you need and how urgent it is. It lands on the board straight away, and Glen sees the worst first.</p>" +\n' +
'    "</header>" +\n' +
'    \'<form id="rs-form" novalidate>\' +\n' +
'    \'<div class="form-grid">\' +\n' +
'      \'<div><label class="lab" for="f-name">Your name</label>\' +\n' +
'        \'<select class="inp" id="f-name">\' +\n' +
'          \'<option value="">Who is asking?...</option>\' +\n' +
'          TEAM.map(function(t){ return \'<option value="\' + esc(t) + \'"\' + (who===t?" selected":"") + ">" + esc(t) + "</option>"; }).join("") +\n' +
'          \'<option value="__other"\' + (otherName?" selected":"") + ">Someone else...</option>" +\n' +
'        "</select>" +\n' +
'        \'<input class="inp" id="f-name-other" placeholder="Your name" autocomplete="off" style="margin-top:8px"\' +\n' +
'          (otherName ? \' value="\' + esc(who) + \'"\' : " hidden") + ">" +\n' +
'        \'<p class="err" id="e-name">Pick your name so Glen knows who to answer.</p></div>\' +\n' +
'      \'<div><label class="lab" for="f-client-in">Client</label>\' +\n' +
'        \'<select class="inp" id="f-client-in">\' +\n' +
'          \'<option value="">Choose a client...</option>\' +\n' +
'          CLIENTS.map(function(c){ return \'<option value="\' + esc(c) + \'"\' + (d.client===c?" selected":"") + ">" + esc(c) + "</option>"; }).join("") +\n' +
'          \'<option value="__other"\' + (otherClient?" selected":"") + ">Another client...</option>" +\n' +
'        "</select>" +\n' +
'        \'<input class="inp" id="f-client-other" placeholder="Client name" autocomplete="off" style="margin-top:8px"\' +\n' +
'          (otherClient ? \' value="\' + esc(d.client||"") + \'"\' : " hidden") + ">" +\n' +
'        \'<p class="err" id="e-client">Pick the client this is for.</p></div>\' +\n' +
'      \'<div class="f-full"><label class="lab" for="f-need">What you need <span>or what you\\\'re waiting on</span></label>\' +\n' +
'        \'<textarea class="inp" id="f-need" rows="4" placeholder="Be specific: what is stuck, which orders or SKUs, what you already tried">\' + esc(d.need||"") + "</textarea>" +\n' +
'        \'<p class="err" id="e-need">Describe what you need from Glen.</p></div>\' +\n' +
'      \'<div class="f-full"><label class="lab">Priority</label>\' +\n' +
'        \'<div class="prios">\' + PRIOS.map(function(p){\n' +
'          return \'<label class="prio" data-k="\' + p.k + \'" data-on="\' + (prio===p.k?1:0) + \'">\' +\n' +
'            \'<input type="radio" name="prio" value="\' + p.k + \'"\' + (prio===p.k?" checked":"") + ">" +\n' +
'            \'<span class="pn"><span class="dot"></span>\' + p.n + "</span>" +\n' +
'            \'<span class="ph">\' + p.hint + "</span></label>";\n' +
'        }).join("") + "</div>" +\n' +
'        \'<p class="err" id="e-prio">Pick a priority so Glen can order the queue.</p></div>\' +\n' +
'      \'<div><label class="lab" for="f-ref">Order or ref # <span>optional</span></label>\' +\n' +
'        \'<input class="inp" id="f-ref" value="\' + esc(d.ref||"") + \'" placeholder="SO-12345, ASN, SKU..." autocomplete="off"></div>\' +\n' +
'      \'<div><label class="lab" for="f-due">Needed by <span>optional</span></label>\' +\n' +
'        \'<input class="inp" id="f-due" type="date" value="\' + esc(d.due||"") + \'"></div>\' +\n' +
'    "</div>" +\n' +
'    \'<div class="form-foot">\' +\n' +
'      \'<span class="hint">The second you hit send, it lands at the top of Glen\\\'s queue, sorted by urgency - nothing gets lost in DMs.</span>\' +\n' +
'      \'<button type="button" class="btn" data-act="cancel-form">Cancel</button>\' +\n' +
'      \'<button type="submit" class="btn primary" data-act="submit">Send to the board</button>\' +\n' +
'    "</div>" +\n' +
'    "</form></div>";\n' +
'}\n' +
'\n' +
'/* ---------------- events ---------------- */\n' +
'function bind(){\n' +
'  var app = byId("app");\n' +
'  app.addEventListener("click", onClick);\n' +
'  app.addEventListener("change", onChange);\n' +
'  app.addEventListener("input", onInput);\n' +
'  app.addEventListener("keydown", onKeydown);\n' +
'  var form = byId("rs-form");\n' +
'  if(form) form.addEventListener("submit", function(e){ e.preventDefault(); submitForm(); });\n' +
'}\n' +
'function closestAct(el){\n' +
'  while(el && el !== document){\n' +
'    if(el.getAttribute && el.getAttribute("data-act")) return el;\n' +
'    el = el.parentNode;\n' +
'  }\n' +
'  return null;\n' +
'}\n' +
'function onKeydown(e){\n' +
'  if(e.key !== "Enter" && e.key !== " ") return;\n' +
'  var t = e.target;\n' +
'  if(t && t.classList && t.classList.contains("row")){\n' +
'    e.preventDefault();\n' +
'    toggle(t.getAttribute("data-id"));\n' +
'  }\n' +
'}\n' +
'function toggle(id){\n' +
'  if(confirmDel && confirmDel !== id) confirmDel = null;\n' +
'  if(expanded[id]){ delete expanded[id]; if(confirmDel === id) confirmDel = null; } else expanded[id] = true;\n' +
'  renderAll();\n' +
'}\n' +
'function onClick(e){\n' +
'  var el = closestAct(e.target);\n' +
'  if(!el) return;\n' +
'  var act = el.getAttribute("data-act");\n' +
'  var id = el.getAttribute("data-id");\n' +
'\n' +
'  if(act === "expand"){\n' +
'    if(e.target.closest && e.target.closest("button,select,textarea,a")) return;\n' +
'    toggle(id); return;\n' +
'  }\n' +
'  if(act === "tab"){ prefs.tab = el.getAttribute("data-tab"); savePrefs(); renderAll(); window.scrollTo(0,0); return; }\n' +
'  if(act === "view"){ prefs.view = el.getAttribute("data-view"); savePrefs(); renderAll(); return; }\n' +
'  if(act === "dir"){ prefs.dir = prefs.dir === "rev" ? "nat" : "rev"; savePrefs(); renderAll(); return; }\n' +
'  if(act === "sort"){\n' +
'    var k = el.getAttribute("data-sort");\n' +
'    if(prefs.sort === k) prefs.dir = prefs.dir === "rev" ? "nat" : "rev";\n' +
'    else { prefs.sort = k; prefs.dir = "nat"; }\n' +
'    savePrefs(); renderAll(); return;\n' +
'  }\n' +
'  if(act === "preview"){ previewOn = true; renderAll(); return; }\n' +
'  if(act === "exit-preview"){ previewOn = false; renderAll(); return; }\n' +
'  if(act === "clearfilters"){ prefs.q = ""; prefs.client = ""; prefs.prio = ""; prefs.view = "open"; savePrefs(); renderAll(); return; }\n' +
'  if(act === "csv"){ exportCsv(); return; }\n' +
'  if(act === "cancel-form"){ prefs.draft = {}; savePrefs(); prefs.tab = "queue"; renderAll(); return; }\n' +
'  if(act === "note-open"){ noteOpen[id] = true; renderAll(); var t = byId("note-"+id); if(t) t.focus(); return; }\n' +
'  if(act === "note-cancel"){ delete noteOpen[id]; renderAll(); return; }\n' +
'  if(act === "note-save"){ saveNote(id); return; }\n' +
'  if(act === "resolve"){ setStatus(id, "done"); return; }\n' +
'  if(act === "reopen"){ setStatus(id, "active"); return; }\n' +
'  if(act === "del"){ confirmDel = id; renderAll(); return; }\n' +
'  if(act === "del-no"){ confirmDel = null; renderAll(); return; }\n' +
'  if(act === "del-yes"){\n' +
'    confirmDel = null;\n' +
'    commit({\n' +
'      method:"DELETE", path:"/api/requests/" + encodeURIComponent(id),\n' +
'      apply:function(s){ s.items = s.items.filter(function(x){ return x.id !== id; }); },\n' +
'      okMsg:"Request deleted."\n' +
'    });\n' +
'    return;\n' +
'  }\n' +
'}\n' +
'function onChange(e){\n' +
'  var el = e.target;\n' +
'  var act = el.getAttribute && el.getAttribute("data-act");\n' +
'  if(el.id === "f-client"){ prefs.client = el.value; savePrefs(); renderAll(); return; }\n' +
'  if(el.id === "f-prio"){ prefs.prio = el.value; savePrefs(); renderAll(); return; }\n' +
'  if(el.id === "f-sort"){ prefs.sort = el.value; prefs.dir = "nat"; savePrefs(); renderAll(); return; }\n' +
'  if(act === "status"){ setStatus(el.getAttribute("data-id"), el.value); return; }\n' +
'  if(act === "reprio"){\n' +
'    var id = el.getAttribute("data-id"), v = el.value;\n' +
'    commit({\n' +
'      method:"PATCH", path:"/api/requests/" + encodeURIComponent(id),\n' +
'      body:{priority:v},\n' +
'      apply:function(s){ var it = findIn(s, id); if(it){ it.priority = v; it.updatedAt = new Date().toISOString(); } },\n' +
'      okMsg:"Priority updated."\n' +
'    });\n' +
'    return;\n' +
'  }\n' +
'  if(el.id === "f-name" || el.id === "f-client-in"){\n' +
'    var otherId = el.id === "f-name" ? "f-name-other" : "f-client-other";\n' +
'    var other = byId(otherId);\n' +
'    if(other){\n' +
'      if(el.value === "__other"){ other.hidden = false; other.focus(); }\n' +
'      else { other.hidden = true; other.value = ""; }\n' +
'    }\n' +
'    var eid = el.id === "f-name" ? "e-name" : "e-client";\n' +
'    var eb = byId(eid); if(eb) eb.setAttribute("data-on","0");\n' +
'    el.setAttribute("aria-invalid","false");\n' +
'    saveDraft();\n' +
'    return;\n' +
'  }\n' +
'  if(el.id === "whoami-other"){\n' +
'    var nv = el.value.trim().slice(0,40);\n' +
'    if(nv){ prefs.name = nv; savePrefs(); }\n' +
'    renderAll();\n' +
'    return;\n' +
'  }\n' +
'  if(el.id === "whoami"){\n' +
'    if(el.value === "__other"){\n' +
'      var wi = byId("whoami-other");\n' +
'      if(wi){ wi.hidden = false; wi.focus(); }\n' +
'      return;\n' +
'    }\n' +
'    prefs.name = el.value;\n' +
'    savePrefs();\n' +
'    renderAll();\n' +
'    return;\n' +
'  }\n' +
'  if(el.name === "prio"){\n' +
'    var wrap = el.closest(".prios");\n' +
'    if(wrap) Array.prototype.forEach.call(wrap.querySelectorAll(".prio"), function(l){\n' +
'      l.setAttribute("data-on", l.querySelector("input").checked ? "1" : "0");\n' +
'    });\n' +
'    saveDraft();\n' +
'    var err = byId("e-prio"); if(err) err.setAttribute("data-on","0");\n' +
'    return;\n' +
'  }\n' +
'}\n' +
'function onInput(e){\n' +
'  var el = e.target;\n' +
'  if(el.id === "q"){ prefs.q = el.value; savePrefs(); renderAll(); return; }\n' +
'  if(el.id === "whoami-other"){ return; }\n' +
'  if(el.id && el.id.indexOf("f-") === 0){\n' +
'    saveDraft();\n' +
'    var map = {"f-name":"e-name","f-name-other":"e-name","f-client-in":"e-client","f-client-other":"e-client","f-need":"e-need"};\n' +
'    if(map[el.id]){\n' +
'      var err = byId(map[el.id]);\n' +
'      if(err) err.setAttribute("data-on","0");\n' +
'      el.setAttribute("aria-invalid","false");\n' +
'    }\n' +
'  }\n' +
'}\n' +
'function saveDraft(){\n' +
'  var f = byId("rs-form");\n' +
'  if(!f) return;\n' +
'  var checked = f.querySelector(\'input[name="prio"]:checked\');\n' +
'  prefs.draft = {\n' +
'    requester: pickVal("f-name","f-name-other"),\n' +
'    client: pickVal("f-client-in","f-client-other"),\n' +
'    need: val("f-need"),\n' +
'    ref: val("f-ref"),\n' +
'    due: val("f-due"),\n' +
'    priority: checked ? checked.value : ""\n' +
'  };\n' +
'  savePrefs();\n' +
'}\n' +
'function val(id){ var el = byId(id); return el ? el.value : ""; }\n' +
'function pickVal(selId, otherId){\n' +
'  var sel = byId(selId);\n' +
'  if(!sel) return "";\n' +
'  if(sel.value === "__other"){ var o = byId(otherId); return o ? o.value : ""; }\n' +
'  return sel.value;\n' +
'}\n' +
'function find(id){ return findIn(state, id); }\n' +
'function findIn(s, id){\n' +
'  for(var i=0;i<s.items.length;i++) if(s.items[i].id === id) return s.items[i];\n' +
'  return null;\n' +
'}\n' +
'\n' +
'/* ---------------- actions ---------------- */\n' +
'function whoAmI(){\n' +
'  if(prefs.name) return prefs.name;\n' +
'  var sel = byId("whoami");\n' +
'  if(sel && sel.focus) sel.focus();\n' +
'  return null;\n' +
'}\n' +
'function setStatus(id, next){\n' +
'  var it = find(id);\n' +
'  if(!it || it.status === next) return;\n' +
'  commit({\n' +
'    method:"PATCH", path:"/api/requests/" + encodeURIComponent(id),\n' +
'    body:{status:next},\n' +
'    apply:function(s){ var t = findIn(s, id); if(t){ t.status = next; t.updatedAt = new Date().toISOString(); } },\n' +
'    okMsg: next === "done" ? "Marked resolved." : "Status updated to \\\'" + statusName(next) + "\\\'."\n' +
'  });\n' +
'}\n' +
'function saveNote(id){\n' +
'  var box = byId("note-" + id);\n' +
'  if(!box) return;\n' +
'  var text = box.value.trim();\n' +
'  if(!text){ box.focus(); return; }\n' +
'  var who = whoAmI();\n' +
'  if(!who){ toast("Choose your name in the top bar first, so the note is attributed.","warn"); return; }\n' +
'  delete noteOpen[id];\n' +
'  var now = new Date().toISOString();\n' +
'  commit({\n' +
'    method:"POST", path:"/api/requests/" + encodeURIComponent(id) + "/notes",\n' +
'    body:{by:who, text:text},\n' +
'    apply:function(s){ var t = findIn(s, id); if(t){ t.notes = t.notes || []; t.notes.push({by:who, text:text, at:now}); t.updatedAt = now; } },\n' +
'    okMsg:"Note posted."\n' +
'  });\n' +
'}\n' +
'function submitForm(){\n' +
'  var f = byId("rs-form");\n' +
'  if(!f) return;\n' +
'  var checked = f.querySelector(\'input[name="prio"]:checked\');\n' +
'  var data = {\n' +
'    requester: pickVal("f-name","f-name-other").trim(),\n' +
'    client: pickVal("f-client-in","f-client-other").trim(),\n' +
'    need: val("f-need").trim(),\n' +
'    ref: val("f-ref").trim(),\n' +
'    due: val("f-due"),\n' +
'    priority: checked ? checked.value : ""\n' +
'  };\n' +
'  var bad = null;\n' +
'  function flag(inputId, errId){\n' +
'    var err = byId(errId); if(err) err.setAttribute("data-on","1");\n' +
'    var inp = byId(inputId); if(inp){ inp.setAttribute("aria-invalid","true"); }\n' +
'    if(!bad) bad = inp;\n' +
'  }\n' +
'  if(!data.requester) flag("f-name","e-name");\n' +
'  if(!data.client) flag("f-client-in","e-client");\n' +
'  if(!data.need) flag("f-need","e-need");\n' +
'  if(!data.priority) flag(null,"e-prio");\n' +
'  if(bad){ bad.focus(); return; }\n' +
'  if(!data.priority){ toast("Pick a priority so Glen can order the queue.","warn"); return; }\n' +
'\n' +
'  prefs.name = data.requester;\n' +
'  prefs.draft = {};\n' +
'  prefs.tab = "queue";\n' +
'  prefs.view = "open";\n' +
'  savePrefs();\n' +
'  previewOn = false;\n' +
'  var now = new Date().toISOString();\n' +
'  var tempId = uid();\n' +
'  var tempItem = {\n' +
'    id: tempId, num: "",\n' +
'    client: data.client, requester: data.requester,\n' +
'    priority: data.priority, status: "new",\n' +
'    need: data.need, ref: data.ref, due: data.due,\n' +
'    createdAt: now, updatedAt: now, notes: []\n' +
'  };\n' +
'  commit({\n' +
'    method:"POST", path:"/api/requests",\n' +
'    body: data,\n' +
'    apply:function(s){ s.items.push(tempItem); },\n' +
'    reconcile:function(s, created){\n' +
'      var idx = -1;\n' +
'      for(var i=0;i<s.items.length;i++) if(s.items[i].id === tempId){ idx = i; break; }\n' +
'      if(idx >= 0) s.items[idx] = created;\n' +
'      if(created && created.num >= s.seq) s.seq = created.num + 1;\n' +
'    },\n' +
'    okMsg:"Sent to the board."\n' +
'  });\n' +
'  window.scrollTo(0,0);\n' +
'}\n' +
'function exportCsv(){\n' +
'  var rows = visibleItems().filter(function(i){ return !i.sample; });\n' +
'  if(!rows.length){ toast("Nothing to export in this view.","warn"); return; }\n' +
'  var head = ["Request #","Priority","Status","Client","Submitted by","What they need","Order/ref","Needed by","Submitted","Days waiting","Notes"];\n' +
'  function cell(v){ return \'"\' + String(v==null?"":v).replace(/"/g,\'""\') + \'"\'; }\n' +
'  var lines = [head.map(cell).join(",")];\n' +
'  rows.forEach(function(it){\n' +
'    lines.push([\n' +
'      it.num, prioName(it.priority), statusName(it.status), it.client, it.requester,\n' +
'      it.need, it.ref, it.due, new Date(it.createdAt).toISOString().slice(0,10),\n' +
'      isOpen(it) ? days(it.createdAt) : "",\n' +
'      (it.notes||[]).map(function(n){ return n.by + ": " + n.text; }).join(" | ")\n' +
'    ].map(cell).join(","));\n' +
'  });\n' +
'  var csv = lines.join("\\r\\n");\n' +
'  var n = rows.length;\n' +
'  function done(){\n' +
'    toast(n + " request" + (n===1?"":"s") + " copied - paste into Excel or Sheets.");\n' +
'  }\n' +
'  function fallback(){\n' +
'    var ta = document.createElement("textarea");\n' +
'    ta.value = csv;\n' +
'    ta.setAttribute("readonly","");\n' +
'    ta.style.position = "fixed";\n' +
'    ta.style.top = "-1000px";\n' +
'    document.body.appendChild(ta);\n' +
'    ta.select();\n' +
'    var ok = false;\n' +
'    try{ ok = document.execCommand("copy"); }catch(e){}\n' +
'    document.body.removeChild(ta);\n' +
'    if(ok) done();\n' +
'    else toast("Couldn\\\'t copy from this view. Try selecting the rows by hand.","warn");\n' +
'  }\n' +
'  if(navigator.clipboard && navigator.clipboard.writeText){\n' +
'    navigator.clipboard.writeText(csv).then(done, fallback);\n' +
'  } else fallback();\n' +
'}\n' +
'\n' +
'/* ---------------- go ---------------- */\n' +
'renderAll();\n' +
'})();';

var FONTS = "https://fonts.googleapis.com/css2?family=Archivo:wght@500;600;700&family=IBM+Plex+Mono:wght@400;500;600&family=IBM+Plex+Sans:wght@400;500;600&display=swap";
var TITLE = "RoboShip Request Board";

function renderShell(state){
  var json = JSON.stringify(state).replace(/</g, "\\u003c");
  return '<!doctype html><html lang="en"><head><meta charset="utf-8">' +
    '<meta name="viewport" content="width=device-width,initial-scale=1">' +
    '<title>' + TITLE + '</title>' +
    '<link rel="stylesheet" href="' + FONTS + '">' +
    '<style id="rs-css">' + CSS_TEXT + '</style></head><body>' +
    '<div id="app"></div>' +
    '<script id="rs-state" type="application/json">' + json + '<\/script>' +
    '<script id="rs-js">' + CLIENT_JS + '<\/script>' +
    '</body></html>';
}

/* ---------------- KV state helpers ---------------- */
var STATE_KEY = "board";

async function getState(env){
  var raw = await env.BOARD_KV.get(STATE_KEY);
  if(raw){
    try{
      var parsed = JSON.parse(raw);
      if(parsed && Array.isArray(parsed.items)) return parsed;
    }catch(e){}
  }
  await env.BOARD_KV.put(STATE_KEY, JSON.stringify(SEED_STATE));
  return SEED_STATE;
}
async function saveState(env, state){
  await env.BOARD_KV.put(STATE_KEY, JSON.stringify(state));
}

/* ---------------- request helpers ---------------- */
function json(data, status){
  return new Response(JSON.stringify(data), {
    status: status || 200,
    headers: {"Content-Type": "application/json", "Cache-Control": "no-store"}
  });
}
function errorJson(message, status){
  return json({error: message}, status);
}
async function readJsonBody(request){
  try{
    return await request.json();
  }catch(e){
    return null;
  }
}
function nowIso(){ return new Date().toISOString(); }

/* ---------------- API handlers ---------------- */
async function handleCreate(request, env){
  var body = await readJsonBody(request);
  if(!body) return errorJson("Invalid JSON body.", 400);
  var requester = String(body.requester || "").trim();
  var client = String(body.client || "").trim();
  var need = String(body.need || "").trim();
  var priority = String(body.priority || "").trim();
  if(!requester || !client || !need || !priority){
    return errorJson("requester, client, need, and priority are required.", 400);
  }
  var state = await getState(env);
  var now = nowIso();
  var item = {
    id: crypto.randomUUID(),
    num: state.seq || 1,
    client: client,
    requester: requester,
    priority: priority,
    status: "new",
    need: need,
    ref: String(body.ref || ""),
    due: String(body.due || ""),
    createdAt: now,
    updatedAt: now,
    notes: []
  };
  state.seq = item.num + 1;
  state.items.push(item);
  await saveState(env, state);
  return json(item, 201);
}
async function handlePatch(request, env, id){
  var body = await readJsonBody(request);
  if(!body) return errorJson("Invalid JSON body.", 400);
  var state = await getState(env);
  var item = state.items.find(function(x){ return x.id === id; });
  if(!item) return errorJson("Request not found.", 404);
  if(body.status !== undefined) item.status = String(body.status);
  if(body.priority !== undefined) item.priority = String(body.priority);
  item.updatedAt = nowIso();
  await saveState(env, state);
  return json(item);
}
async function handleNote(request, env, id){
  var body = await readJsonBody(request);
  if(!body) return errorJson("Invalid JSON body.", 400);
  var by = String(body.by || "").trim();
  var text = String(body.text || "").trim();
  if(!by || !text) return errorJson("by and text are required.", 400);
  var state = await getState(env);
  var item = state.items.find(function(x){ return x.id === id; });
  if(!item) return errorJson("Request not found.", 404);
  var now = nowIso();
  item.notes = item.notes || [];
  item.notes.push({by: by, text: text, at: now});
  item.updatedAt = now;
  await saveState(env, state);
  return json(item);
}
async function handleDelete(env, id){
  var state = await getState(env);
  var before = state.items.length;
  state.items = state.items.filter(function(x){ return x.id !== id; });
  if(state.items.length === before) return errorJson("Request not found.", 404);
  await saveState(env, state);
  return new Response(null, {status: 204});
}

/* ---------------- router ---------------- */
export default {
  async fetch(request, env){
    var url = new URL(request.url);
    var path = url.pathname;
    var method = request.method;

    if(path === "/" && method === "GET"){
      var state = await getState(env);
      return new Response(renderShell(state), {
        headers: {"Content-Type": "text/html; charset=utf-8", "Cache-Control": "no-store"}
      });
    }

    if(path === "/api/state" && method === "GET"){
      return json(await getState(env));
    }

    if(path === "/api/requests" && method === "POST"){
      return handleCreate(request, env);
    }

    var itemMatch = path.match(/^\/api\/requests\/([^\/]+)$/);
    if(itemMatch){
      var id = decodeURIComponent(itemMatch[1]);
      if(method === "PATCH") return handlePatch(request, env, id);
      if(method === "DELETE") return handleDelete(env, id);
    }

    var noteMatch = path.match(/^\/api\/requests\/([^\/]+)\/notes$/);
    if(noteMatch && method === "POST"){
      return handleNote(request, env, decodeURIComponent(noteMatch[1]));
    }

    if(path.indexOf("/api/") === 0) return errorJson("Not found.", 404);
    return new Response("Not found.", {status: 404});
  }
};
