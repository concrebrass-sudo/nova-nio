import os
import re
import subprocess

# Find the JS file
result = subprocess.run(['find', '/', '-name', 'main.dc89b634.js', '-type', 'f'], 
                       capture_output=True, text=True, timeout=10)
print("Find result:", result.stdout)
print("Find errors:", result.stderr[:500] if result.stderr else "none")

# Also try to read from the project path
for base in ['/vercel/share/v0-project', '/vercel/share', '/home/user', '.']:
    path = os.path.join(base, 'nio', 'static', 'js', 'main.dc89b634.js')
    if os.path.exists(path):
        print(f"Found at: {path}")
        with open(path) as f:
            content = f.read()
        
        matches = re.findall(r'https?://wa\.me[^\s"\'`,)}\]\\]*', content)
        if matches:
            print("WhatsApp URLs found:")
            for i, m in enumerate(matches):
                idx = content.index(m)
                start = max(0, idx - 80)
                end = min(len(content), idx + len(m) + 80)
                print(f"\n--- Match {i+1} ---")
                print(f"URL: {m}")
                print(f"Context: ...{content[start:end]}...")
        else:
            print("No wa.me URLs found directly")
            # broader search
            broader = list(re.finditer(r'whatsapp|wa\.me', content, re.IGNORECASE))
            print(f"Broader search: {len(broader)} matches")
            for i, m in enumerate(broader):
                idx = m.start()
                start = max(0, idx - 100)
                end = min(len(content), idx + len(m.group()) + 100)
                print(f"\nMatch {i+1}: ...{content[start:end]}...")
        break
else:
    print("File not found at any expected path")
