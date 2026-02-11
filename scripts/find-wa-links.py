import os
import subprocess

# Discovery: find the file on the filesystem
print("CWD:", os.getcwd())
print("CWD contents:", os.listdir('.'))
print()

# Use find command to locate the file
result = subprocess.run(['find', '/', '-name', 'main.dc89b634.js', '-type', 'f'], 
                       capture_output=True, text=True, timeout=10)
print("Find results:", result.stdout.strip())
print("Find errors:", result.stderr.strip() if result.stderr.strip() else "none")

paths_found = result.stdout.strip().split('\n')
for path in paths_found:
    path = path.strip()
    if not path:
        continue
    print(f"\nReading: {path}")
    with open(path) as f:
        content = f.read()
    print(f"File size: {len(content)} chars")
    
    # Search for LFYNCWLVBJGVN1
    idx = content.find('LFYNCWLVBJGVN1')
    if idx >= 0:
        start = max(0, idx - 200)
        end = min(len(content), idx + 200)
        print(f"\nContext around LFYNCWLVBJGVN1 (pos {idx}):")
        print(repr(content[start:end]))
    
    # Search for wa.me
    idx3 = content.find('wa.me')
    if idx3 >= 0:
        start = max(0, idx3 - 200)
        end = min(len(content), idx3 + 200)
        print(f"\nContext around wa.me (pos {idx3}):")
        print(repr(content[start:end]))
