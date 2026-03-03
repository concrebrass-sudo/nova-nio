import os
import re
import glob

cwd = os.getcwd()
print("CWD:", cwd)

# Find all JS files recursively from cwd
js_files = glob.glob(os.path.join(cwd, '**', '*.js'), recursive=True)
print("JS files:", js_files)

# Also try /vercel paths
for base in ['/vercel', '/home']:
    js_files += glob.glob(os.path.join(base, '**', 'main.dc89b634.js'), recursive=True)

for f in js_files:
    content = open(f, 'r').read()
    if 'wa.me' in content:
        print(f"Found wa.me in: {f}")
        idx = content.index('wa.me')
        print(f"Context: {content[max(0,idx-60):idx+60]}")
        new_content = re.sub(r'https?://wa\.me/[0-9]+', 'https://wa.me/5511998822059', content)
        open(f, 'w').write(new_content)
        print("Done!")
