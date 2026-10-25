# Future Money

A monthly budgeting app. Import the CSV of account activity from your bank and see what's left to spend, a 50/30/20 check, budgets by category, trends and recurring charges.

Everything stays on your PC. Transactions are stored in the app's own browser storage and never sent anywhere.

## Install on Windows

Future Money is a web app you install with Microsoft Edge (Chrome works too). Once installed it gets its own window, Start menu entry and taskbar icon, works offline, and shows up under **Open with** when you right-click a `.csv` file.

**From a hosted copy (recommended):** open the app's https address in Edge, then click the **App available / Install** icon at the right end of the address bar (or **... > Apps > Install Future Money**).

**From this folder, without hosting:** double-click `docs/serve-locally.cmd` (needs Python), then install from the Edge window it opens. After that the app opens on its own, offline. Run the script again only when you want to install an update.

## Each month

1. Download last month's activity from your bank as CSV.
2. Drag it onto Future Money, or right-click the file > **Open with > Future Money**.
3. Fix anything uncategorized, look at the Overview, and adjust next month's budgets.

Use **Setup > Export backup** now and then. If you uninstall the app and choose to clear its data, your transactions are deleted.

## Files

- `future-money.html`: the app itself (the same file is also published as a Claude artifact).
- `tools/build.js`: run `node tools/build.js` after editing the page to rebuild `docs/`.
- `docs/`: the installable app, published by GitHub Pages (Settings > Pages > Deploy from branch `main`, folder `/docs`). Any static host works.
