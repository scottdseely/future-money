// Wraps pocket-ledger.html into an installable web app in ./docs
const fs=require('fs'), path=require('path');
const root=path.join(__dirname,'..'), out=path.join(root,'docs');
const page=fs.readFileSync(path.join(root,'pocket-ledger.html'),'utf8');
const head=`<!doctype html>
<html lang="en"><head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover">
<meta name="theme-color" content="#141A2E">
<meta name="description" content="Import your bank CSV each month and see what's left to spend.">
<link rel="manifest" href="manifest.webmanifest">
<link rel="icon" href="icons/icon.svg" type="image/svg+xml">
<link rel="apple-touch-icon" href="icons/icon-192.png">
<style>:root{color-scheme:light;padding-top:env(safe-area-inset-top,0px);padding-bottom:env(safe-area-inset-bottom,0px)}body{margin:0;font:14px system-ui,-apple-system,"Segoe UI",sans-serif}img{max-width:100%}[hidden]{display:none!important}</style>
</head><body>
`;
fs.writeFileSync(path.join(out,'index.html'),head+page+'\n</body></html>\n');
// bump the cache name whenever the page changes so installed copies update
const ver=require('crypto').createHash('sha1').update(page).digest('hex').slice(0,10);
const sw=fs.readFileSync(path.join(__dirname,'sw.template.js'),'utf8').replace('__VERSION__',ver);
fs.writeFileSync(path.join(out,'sw.js'),sw);
console.log('built docs/ version',ver);
