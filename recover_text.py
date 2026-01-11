
import re

file_path = r"c:\projects\project-60\dist\assets\index-Cgg4LlTn.js"

try:
    with open(file_path, "r", encoding="utf-8") as f:
        content = f.read()
        
    keywords = [
        "What we own",
        "Outbound runs",
        "Commercial structure",
        "What changes",
        "Book a time",
        "Results",
        "Process",
        "Outcome"
    ]
    
    for kw in keywords:
        print(f"--- SEARCHING FOR: {kw} ---")
        matches = [m.start() for m in re.finditer(re.escape(kw), content)]
        if matches:
            for start in matches:
                # Print context around keywor
                s = max(0, start - 500)
                e = min(len(content), start + 2000) # Get enough context to reconstruct the section
                print(f"MATCH AT {start}:")
                snippet = content[s:e]
                print(snippet)
                print("-" * 50)
        else:
            print("NOT FOUND")
            
except Exception as e:
    print(f"Error: {e}")
