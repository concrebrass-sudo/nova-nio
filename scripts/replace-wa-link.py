import re
import os

# Try multiple possible paths
paths = [
    os.path.join(os.path.dirname(os.path.abspath(__file__)), '..', 'nio', 'static', 'js', 'main.dc89b634.js'),
    '/vercel/share/v0-project/nio/static/js/main.dc89b634.js',
    '/home/user/nio/static/js/main.dc89b634.js',
]

file_path = None
for p in paths:
    rp = os.path.realpath(p)
    print(f'Trying: {rp}')
    if os.path.exists(rp):
        file_path = rp
        print(f'Found: {rp}')
        break

if not file_path:
    print('File not found, listing scripts dir parent:')
    parent = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
    for item in os.listdir(parent):
        print(f'  {item}')
    exit(1)

with open(file_path, 'r') as f:
    content = f.read()

matches = re.findall(r'https?://wa\.me/[^\s"\')\]]+', content)
print('Links encontrados:', matches)

new_link = 'https://wa.me/5511998822059'
new_content = re.sub(r'https?://wa\.me/[^\s"\')\]]+', new_link, content)

with open(file_path, 'w') as f:
    f.write(new_content)

print('Substituido com sucesso para:', new_link)
