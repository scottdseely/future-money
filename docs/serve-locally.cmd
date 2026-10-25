@echo off
rem Serves Pocket Ledger at http://localhost:8765 so Edge can install it.
rem After installing, the app opens offline; you only need this again to install updates.
cd /d "%~dp0"
start "" msedge http://localhost:8765
python -m http.server 8765 --bind 127.0.0.1
