import os
import re

# Try multiple paths
for base in ['/vercel/share/v0-project', '/vercel/share', '/home/user', '.']:
    path = os.path.join(base, 'nio', 'static', 'js', 'main.dc89b634.js')
    if os.path.exists(path):
        print(f"Found at: {path}")
        with open(path) as f:
            content = f.read()
        
        # Search for LFYNCWLVBJGVN1
        idx = content.find('LFYNCWLVBJGVN1')
        if idx >= 0:
            start = max(0, idx - 200)
            end = min(len(content), idx + 200)
            print(f"\nContext around LFYNCWLVBJGVN1 (pos {idx}):")
            print(repr(content[start:end]))
        else:
            print("LFYNCWLVBJGVN1 not found")
        
        # Also search for api.whatsapp
        idx2 = content.find('api.whatsapp')
        if idx2 >= 0:
            start = max(0, idx2 - 200)
            end = min(len(content), idx2 + 200)
            print(f"\nContext around api.whatsapp (pos {idx2}):")
            print(repr(content[start:end]))
        else:
            print("api.whatsapp not found")

        # Also search for wa.me
        idx3 = content.find('wa.me')
        if idx3 >= 0:
            start = max(0, idx3 - 200)
            end = min(len(content), idx3 + 200)
            print(f"\nContext around wa.me (pos {idx3}):")
            print(repr(content[start:end]))
        else:
            print("wa.me not found")
        
        break
else:
    print("File not found at any expected path")
