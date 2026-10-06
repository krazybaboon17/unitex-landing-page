#!/bin/bash
# unitex Install Script

echo "Downloading unitex..."

# Replace this URL with the actual link to your uploaded executable later!
DOWNLOAD_URL="https://unitex-seven.vercel.app/unitex"

# Download the executable to a temporary location
curl -# -L -o /tmp/unitex_download "$DOWNLOAD_URL"

echo "Installing to /usr/local/bin..."
# Move it to the system PATH so it can be run from anywhere. 
# We use sudo because /usr/local/bin requires admin privileges.
sudo mv /tmp/unitex_download /usr/local/bin/unitex

# Make sure it is executable
sudo chmod +x /usr/local/bin/unitex

echo ""
echo "✅ unitex has been successfully installed!"
echo "You can now run it from any terminal by typing: unitex"
