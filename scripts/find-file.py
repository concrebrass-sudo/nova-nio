import os
for root, dirs, files in os.walk('/'):
    for f in files:
        if f == 'main.dc89b634.js':
            print(os.path.join(root, f))
