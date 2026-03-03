import re
import os

file_path = '/vercel/share/v0-project/nio/static/js/main.dc89b634.js'
with open(file_path, 'r') as f:
    content = f.read()

# Find all wa.me links
matches = re.findall(r'https?://wa\.me/[^\s"\')\]]+', content)
print('Links encontrados:', matches)

# Replace all wa.me links with the new one
new_link = 'https://wa.me/5511998822059'
new_content = re.sub(r'https?://wa\.me/[^\s"\')\]]+', new_link, content)

with open(file_path, 'w') as f:
    f.write(new_content)

print('Links substituidos para:', new_link)
