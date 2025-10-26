#!/usr/bin/env python3
import os
import re
from pathlib import Path

print("="*80)
print("COMPREHENSIVE SECURITY & DATA INTEGRITY AUDIT")
print("="*80)

# Step 1: Check for exposed secrets
print("\n🔐 SCANNING FOR EXPOSED SECRETS...")

exposed_secrets = []
secret_patterns = [
    (r'(api_key|apikey|api-key)\s*[:=]\s*["\']([^"\']+)["\']', 'API Key'),
    (r'(secret|SECRET)\s*[:=]\s*["\']([^"\']+)["\']', 'Secret'),
    (r'(password|PASSWORD)\s*[:=]\s*["\']([^"\']+)["\']', 'Password'),
    (r'(token|TOKEN)\s*[:=]\s*["\']([^"\']+)["\']', 'Token'),
    (r'(private_key|privatekey)\s*[:=]\s*["\']([^"\']+)["\']', 'Private Key'),
]

for root, dirs, files in os.walk('.'):
    # Skip safe directories
    if any(skip in root for skip in ['node_modules', '.next', '.git', '.pnpm']):
        continue
    
    for file in files:
        if file.endswith(('.ts', '.tsx', '.js', '.jsx', '.env')):
            filepath = os.path.join(root, file)
            try:
                with open(filepath, 'r', encoding='utf-8') as f:
                    content = f.read()
                    
                    for pattern, secret_type in secret_patterns:
                        matches = re.findall(pattern, content, re.IGNORECASE)
                        if matches:
                            # Filter out obvious false positives
                            for match in matches:
                                value = match[1] if isinstance(match, tuple) else match
                                # Skip if it's clearly a placeholder or env var reference
                                if value and not any(x in value.lower() for x in ['your', 'process.env', 'placeholder', 'example', 'xxx', '***']):
                                    if len(value) > 10:  # Likely real secret
                                        exposed_secrets.append((filepath, secret_type, value[:20] + '...'))
            except:
                pass

if exposed_secrets:
    print(f"\n⚠️  FOUND {len(exposed_secrets)} POTENTIAL EXPOSED SECRETS:")
    for filepath, stype, value in exposed_secrets[:10]:
        print(f"  • {stype} in {filepath}: {value}")
else:
    print("✅ No exposed secrets found in code")

# Step 2: Check .env files
print("\n📄 ENVIRONMENT FILES:")
env_files = ['.env', '.env.local', '.env.production', '.env.development']
for env_file in env_files:
    exists = os.path.exists(env_file)
    in_gitignore = False
    
    if os.path.exists('.gitignore'):
        with open('.gitignore', 'r') as f:
            in_gitignore = env_file in f.read()
    
    if exists:
        print(f"  • {env_file}: {'✅ EXISTS' if exists else ''} | {'✅ Gitignored' if in_gitignore else '⚠️  NOT in .gitignore!'}")

# Step 3: Check API routes
print("\n🔌 API ROUTE SECURITY:")
api_routes = []
for root, dirs, files in os.walk('app/api'):
    for file in files:
        if file.endswith(('.ts', '.tsx', '.js')):
            filepath = os.path.join(root, file)
            api_routes.append(filepath)
            
            with open(filepath, 'r') as f:
                content = f.read()
            
            has_auth = any(keyword in content for keyword in ['auth', 'verify', 'token', 'session'])
            has_validation = any(keyword in content for keyword in ['validate', 'zod', 'schema', 'check'])
            has_rate_limit = 'rate' in content.lower() and 'limit' in content.lower()
            
            print(f"  • {filepath.replace('app/', '/')}")
            print(f"    - Auth check: {'✅' if has_auth else '⚠️  None'}")
            print(f"    - Input validation: {'✅' if has_validation else '⚠️  None'}")
            print(f"    - Rate limiting: {'✅' if has_rate_limit else '⚠️  None'}")

# Step 4: Check middleware
print("\n🛡️  MIDDLEWARE & SECURITY HEADERS:")
middleware_exists = os.path.exists('middleware.ts') or os.path.exists('middleware.js')
print(f"  • Middleware file: {'✅ EXISTS' if middleware_exists else '⚠️  MISSING'}")

if middleware_exists:
    middleware_file = 'middleware.ts' if os.path.exists('middleware.ts') else 'middleware.js'
    with open(middleware_file, 'r') as f:
        middleware_content = f.read()
    
    has_csp = 'Content-Security-Policy' in middleware_content
    has_hsts = 'Strict-Transport-Security' in middleware_content
    has_xframe = 'X-Frame-Options' in middleware_content
    
    print(f"    - CSP headers: {'✅' if has_csp else '⚠️  MISSING'}")
    print(f"    - HSTS: {'✅' if has_hsts else '⚠️  MISSING'}")
    print(f"    - X-Frame-Options: {'✅' if has_xframe else '⚠️  MISSING'}")

# Step 5: Check next.config.js
print("\n⚙️  NEXT.JS SECURITY CONFIG:")
if os.path.exists('next.config.js'):
    with open('next.config.js', 'r') as f:
        config = f.read()
    
    has_headers = 'headers()' in config or 'headers:' in config
    has_redirects = 'redirects()' in config
    has_strict_mode = 'reactStrictMode' in config
    
    print(f"  • Security headers: {'✅' if has_headers else '⚠️  NOT configured'}")
    print(f"  • HTTPS redirects: {'✅' if has_redirects else '⚠️  NOT configured'}")
    print(f"  • React Strict Mode: {'✅' if has_strict_mode else '⚠️  NOT enabled'}")

print("="*80)

