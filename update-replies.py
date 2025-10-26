#!/usr/bin/env python3
import re
import random

# Read the file
with open('lib/data/ask-dentist-questions.ts', 'r') as f:
    content = f.read()

# Patient locations to add
locations = [
    {"Chennai, Tamil Nadu", "India"},
    {"Mumbai, Maharashtra", "India"},
    {"Vellore, Tamil Nadu", "India"},
    {"Bangalore, Karnataka", "India"},
    {"Delhi", "India"},
    {"New York, NY", "USA"},
    {"London", "UK"},
    {"Dubai", "UAE"},
    {"Singapore", "Singapore"},
    {"Toronto", "Canada"},
]

# This script will add location:'City, Country' to existing patient replies
# Pattern: find patient replies without location
pattern = r"({\s+id: 'r\d+-\d+',\s+content: '[^']+',\s+author: '[^']+',\s+authorType: 'patient',)(\s+createdAt:)"

def add_location(match):
    loc = random.choice(list(locations))
    return f"{match.group(1)}\n        location: '{list(loc)[0]}, {list(loc)[1]}',{match.group(2)}"

# Apply the transformation
updated_content = re.sub(pattern, add_location, content)

# Write back
with open('lib/data/ask-dentist-questions.ts', 'w') as f:
    f.write(updated_content)

print("Added location info to patient replies")

