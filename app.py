import sys
import os
import webbrowser
from pathlib import Path

def main():
    html_path = Path(__file__).parent.resolve() / "clawd-app" / "index.html"
    if not html_path.exists():
        print(f"Error: Could not find {html_path}")
        return

    file_url = html_path.as_uri()
    print("Launching Clawd Desktop Pet Web App...")
    print(f"URL: {file_url}")

    if os.name == "nt":
        import subprocess
        try:
            edge_cmd = f'start "" msedge.exe --app="{file_url}" --window-size=910,850'
            subprocess.run(edge_cmd, shell=True, check=True)
            return
        except Exception:
            pass
        try:
            chrome_cmd = f'start "" chrome.exe --app="{file_url}" --window-size=910,850'
            subprocess.run(chrome_cmd, shell=True, check=True)
            return
        except Exception:
            pass

    webbrowser.open(file_url)

if __name__ == "__main__":
    main()