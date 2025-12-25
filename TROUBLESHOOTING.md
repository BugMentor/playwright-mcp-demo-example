# 🛠️ Troubleshooting Guide

Common issues and their solutions when running Playwright + MCP demos.

---

## ⚙️ Installation Issues

### Claude Desktop doesn't show MCP tools

**Symptoms:**
- No 🔌 icon at the bottom of Claude chat
- "playwright" tool not listed

**Solutions:**
1. Verify config file location:
   - Windows: `%APPDATA%\Claude\claude_desktop_config.json`
   - macOS: `~/Library/Application Support/Claude/claude_desktop_config.json`
   - Linux: `~/.config/Claude/claude_desktop_config.json`

2. Check JSON syntax is valid (no trailing commas, proper quotes)

3. Restart Claude Desktop completely (quit from system tray)

4. Check Claude Desktop logs:
   - Windows: `%APPDATA%\Claude\logs`
   - macOS: `~/Library/Logs/Claude`

---

### "npx command not found"

**Symptoms:**
- MCP fails to initialize
- Error about npx in logs

**Solutions:**
1. Install Node.js from https://nodejs.org/
2. Restart your terminal/computer
3. Verify with: `npx --version`
4. On Windows, make sure Node.js is in your PATH

---

### Permission errors

**Symptoms:**
- "Permission denied" when trying to launch browser
- Tool execution fails

**Solutions:**
1. Run Claude Desktop as administrator (Windows)
2. Check file permissions on config file
3. On macOS, grant Terminal/Claude accessibility permissions in System Preferences

---

## 🎭 Demo Issues

### Browser doesn't open

**Symptoms:**
- Claude says it's launching browser but nothing happens
- Timeout errors

**Solutions:**
1. First time running? Playwright needs to download browsers:
   ```bash
   npx playwright install chromium
   ```

2. Check if another browser instance is running and close it

3. Try explicit browser launch:
   ```
   Launch Chromium browser in headed mode and navigate to https://www.saucedemo.com
   ```

---

### Wrong elements are clicked

**Symptoms:**
- Claude clicks wrong button
- Actions fail silently

**Solutions:**
1. Be more specific in your prompt:
   ```
   Click the button with text "Login" (not the link, the actual button)
   ```

2. Ask Claude what it sees:
   ```
   What buttons and interactive elements do you see on this page?
   ```

3. Use visual cues:
   ```
   Click the blue "Checkout" button in the top right of the page
   ```

---

### Selectors fail

**Symptoms:**
- "Element not found" errors
- Timeouts waiting for elements

**Solutions:**
1. Tell Claude to wait:
   ```
   Wait for the page to fully load before clicking anything
   ```

2. Ask for a screenshot to verify page state:
   ```
   Take a screenshot so I can see what's on the page right now
   ```

3. Reload the page if needed:
   ```
   Reload the page and try again
   ```

---

### Forms don't fill correctly

**Symptoms:**
- Fields remain empty
- Wrong data in fields

**Solutions:**
1. Be explicit about field values:
   ```
   Fill the "First Name" field with exactly "Juan", 
   the "Last Name" field with "Perez", 
   and the "Zip/Postal Code" field with "12345"
   ```

2. Check for autofill interference:
   ```
   Clear any autofill data first, then fill the form
   ```

---

## 🐌 Performance Issues

### Claude is very slow to respond

**Symptoms:**
- Long wait times between actions
- "Thinking..." for extended periods

**Reasons:**
- Large DOM structures take time to analyze
- Complex pages with lots of elements
- Network latency to Claude servers

**Solutions:**
1. Be patient - DOM analysis takes time
2. Use simpler, single-action prompts
3. Ask Claude to focus on specific parts:
   ```
   Focus only on the main content area, ignore the sidebar
   ```

---

### Browser is laggy or unresponsive

**Symptoms:**
- Slow page loads
- Browser freezes

**Solutions:**
1. Close other applications
2. Use headless mode for faster execution:
   ```
   Launch browser in headless mode for better performance
   ```
3. Reduce viewport size
4. Check system resources

---

## 🔒 Security & Privacy

### Credentials in prompts

**Best Practice:**
- Never use real credentials in demos
- Always use test accounts
- SauceDemo credentials are public and safe:
  - standard_user / secret_sauce
  - problem_user / secret_sauce

**What Claude sees:**
- DOM structure (HTML)
- Visible text
- Element attributes
- Screenshots (if requested)

**What Claude doesn't store:**
- Your actual typed credentials (when you type them)
- Session cookies
- Local storage data

---

## 🎯 Demo-Specific Issues

### SauceDemo-specific problems

**"Locked out" user:**
- If you accidentally use `locked_out_user`, you'll get an error
- Solution: Use `standard_user` instead

**Inventory order changes:**
- Products might appear in different order
- Solution: Always ask to sort first

**Cart badge issues:**
- Sometimes cart count doesn't update immediately
- Solution: Navigate away and back, or refresh

---

## 🚨 Emergency Recovery

### Demo completely fails

**Backup Plan:**
1. Have a pre-recorded video ready
2. Explain: "This is the nature of live AI - it's not deterministic"
3. Show the video
4. Continue with Q&A and theory

**Recovery Phrases:**
- "This is actually a great teaching moment..."
- "Real AI isn't perfect, and that's why human oversight matters"
- "Let me show you the recorded version while this sorts itself out"

---

## 📊 Logs & Debugging

### Where to find logs

**Claude Desktop:**
- Windows: `%APPDATA%\Claude\logs`
- macOS: `~/Library/Logs/Claude`
- Linux: `~/.config/Claude/logs`

**What to look for:**
- MCP connection errors
- Tool execution failures
- Browser launch issues

---

## 🔄 Complete Reset

If all else fails, start fresh:

1. Close Claude Desktop completely
2. Delete config file
3. Reinstall Claude Desktop
4. Recreate config file from scratch
5. Restart computer
6. Test with simple prompt first

---

## 💡 Pro Tips

1. **Test before the event** - Run the full demo at least once before going live
2. **Have backup internet** - Mobile hotspot as fallback
3. **Close unnecessary apps** - Free up resources
4. **Disable notifications** - No interruptions during demo
5. **Have the troubleshooting guide open** - Quick reference during demo

---

## 📞 Getting Help

If you encounter an issue not covered here:

1. Check Claude Desktop documentation: https://claude.ai/docs
2. MCP documentation: https://modelcontextprotocol.io/
3. Playwright documentation: https://playwright.dev/
4. Community forums and GitHub issues

---

**Remember:** Live demos with AI are unpredictable by nature. That's part of the magic - and the risk! Always have a backup plan. 🎭
