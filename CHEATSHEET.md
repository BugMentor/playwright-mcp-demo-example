# 📋 Quick Reference Cheat Sheet

One-page reference for the Playwright + MCP demo.

---

## 🚀 Quick Start

```json
// %APPDATA%\Claude\claude_desktop_config.json (Windows)
{
  "mcpServers": {
    "playwright": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-playwright"]
    }
  }
}
```

**After config:** Restart Claude Desktop → Look for 🔌 icon → See "playwright" tool

---

## 🎯 Demo Prompts (Copy-Paste Ready)

### 1️⃣ Login
```
Please start a browser using Playwright. Go to 'https://www.saucedemo.com'. 
Log in with username 'standard_user' and password 'secret_sauce'. 
Maximize the window so we can see everything clearly.
```

### 2️⃣ Business Logic
```
Now I want you to sort the products by price (lowest to highest). 
Add the two cheapest products to the cart. 
Then go to the cart and take a screenshot of the items list.
```

### 3️⃣ Checkout
```
Proceed to checkout. Fill the form with fake data for 'Juan Perez', 
zip code '12345'. Complete the purchase and tell me what success 
message appears on screen.
```

---

## 🛠️ Troubleshooting Commands

| Issue | Command |
|-------|---------|
| Wrong element | `That was wrong. Find the button that says "[TEXT]" instead` |
| Need to wait | `Wait for the page to fully load before proceeding` |
| Verify state | `Take a screenshot and show me what you see` |
| Describe page | `What elements do you see on the current page?` |
| Reload page | `Reload the page and try again` |

---

## ⚙️ Installation Checklist

- [ ] Node.js v18+ installed (`node --version`)
- [ ] Claude Desktop installed
- [ ] Config file edited
- [ ] Claude Desktop restarted
- [ ] Tools visible (🔌 icon)
- [ ] Internet connection working

---

## 🎭 Screen Layout

```
┌──────────────┬────────────────────┐
│ Claude 40%   │ Browser 60%        │
├──────────────┼────────────────────┤
│ Chat         │ Actions happen here│
│ Screenshots  │                    │
│ Tool calls   │                    │
└──────────────┴────────────────────┘
```

---

## 📊 Key Talking Points

| Traditional | AI-Powered |
|-------------|------------|
| Write code manually | Natural language instructions |
| Breaks on UI changes | Self-healing capabilities |
| Requires programming | Accessible to non-coders |
| Maintenance-heavy | Minimal maintenance |
| Code operators | Quality architects |

---

## 🎓 Test Accounts (SauceDemo)

| Username | Password | Behavior |
|----------|----------|----------|
| standard_user | secret_sauce | ✅ Normal |
| problem_user | secret_sauce | ⚠️ Has issues |
| performance_glitch_user | secret_sauce | 🐌 Slow |
| error_user | secret_sauce | ❌ Errors |
| visual_user | secret_sauce | 👁️ Visual bugs |

---

## 🚨 Emergency Actions

1. **Demo fails completely** → Show pre-recorded video
2. **Claude is slow** → "AI is analyzing the DOM structure..."
3. **Wrong action** → Demonstrate correction: "Try again looking for [X]"
4. **Tool permission denied** → Click "Always Allow"
5. **Browser doesn't open** → Check: `npx playwright install chromium`

---

## 💬 Audience Q&A Prep

**Q: Replace QA engineers?**  
A: No - elevates them from code writers to AI orchestrators

**Q: Cost?**  
A: Free tier available, ~$0.03-$0.15 per test run at scale

**Q: Production ready?**  
A: Great for exploratory testing, maturing for CI/CD

**Q: How fast?**  
A: Slower per test, but saves maintenance time (net positive ROI)

**Q: Security?**  
A: DOM sent to Claude servers - use test accounts, follow security policies

---

## 📁 File Locations

### Windows
- Config: `%APPDATA%\Claude\claude_desktop_config.json`
- Logs: `%APPDATA%\Claude\logs`

### macOS
- Config: `~/Library/Application Support/Claude/claude_desktop_config.json`
- Logs: `~/Library/Logs/Claude`

### Linux
- Config: `~/.config/Claude/claude_desktop_config.json`
- Logs: Check `~/.config/Claude/logs`

---

## 🎯 Success Metrics

✅ Demo successful if:
- Audience gasps at least once
- People take photos
- Q&A runs long
- Someone asks for the code
- LinkedIn posts after event

---

## 🔗 Quick Links

- MCP Docs: https://modelcontextprotocol.io/
- Playwright: https://playwright.dev/
- Claude Desktop: https://claude.ai/download
- SauceDemo: https://www.saucedemo.com/
- This Repo: [Your GitHub URL]

---

## 💡 Pro Tips

1. Test the full demo at least once before the event
2. Have backup internet (mobile hotspot)
3. Close unnecessary apps
4. Disable system notifications
5. Have pre-recorded backup video ready
6. Keep this cheat sheet open on second monitor/phone

---

**Print this page or keep it on your phone during the demo!** 📱
