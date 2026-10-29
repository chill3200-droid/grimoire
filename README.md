# Grimoire
Private reference site for Project Origin elements. Static: index.html + app.js + style.css render everything from **grimoire_data.json** — that is the only file to edit for content.

Structure: `{ "title", "artwork_dir": "art", "groups": { "<Tier or Fusion group name>": [ element, ... ] } }`
Element: `name`, `tier`, `themes` (T10 Null only, else null), `abilities` [{`n`,`name`,`description`}], `tags` (only those that apply: "Has Weapon", "Has Aura", "Has Partial Transformation", "Has Transformation"), `weapon` (name or null), `artwork` (filename in art/).
Group order in the file = order on the home page. Groups with "Fusion" in the name show under Fusions.
