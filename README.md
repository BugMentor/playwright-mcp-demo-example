# 🎭 Playwright + MCP Demo - SauceDemo

Demo repository for the talk "Playwright + MCP: El Futuro de la Automatización con IA"

## 🎯 What is this?

This is a live demonstration of using Claude Desktop + Model Context Protocol (MCP) + Playwright to perform autonomous testing without writing traditional test scripts.

**The Magic**: Instead of writing code, you give instructions in natural language to an AI agent that controls the browser.

## 🚀 Prerequisites

Before the demo, make sure you have:

1. **Claude Desktop App** installed
   - Download from: https://claude.ai/download
   
2. **Node.js** installed (v18 or higher)
   - Check with: `node --version`
   
3. **MCP Configuration** set up correctly

## ⚙️ Setup Instructions

### Step 1: Install Claude Desktop

Download and install Claude Desktop from the official website.

### Step 2: Configure MCP

1. Locate your Claude configuration file:
   - **Windows**: `%APPDATA%\Claude\claude_desktop_config.json`
   - **macOS**: `~/Library/Application Support/Claude/claude_desktop_config.json`
   - **Linux**: `~/.config/Claude/claude_desktop_config.json`

2. Add the Playwright MCP server configuration:

```json
{
  "mcpServers": {
    "playwright": {
      "command": "npx",
      "args": [
        "-y",
        "@modelcontextprotocol/server-playwright"
      ]
    }
  }
}
```

3. Save the file and restart Claude Desktop

### Step 3: Verify Installation

1. Open Claude Desktop
2. Look for the 🔌 icon at the bottom of the chat
3. You should see "playwright" listed as an available tool

## 🎬 Demo Script: "The Autonomous QA"

### Scenario
We'll use **SauceDemo (Swag Labs)** - a demo e-commerce site designed for testing.
- URL: https://www.saucedemo.com
- Duration: 3-5 minutes
- No code required!

### Demo Flow

#### **Part 1: Navigation and Login** (1 min)

**Prompt to use:**
```
Please start a browser using Playwright. Go to 'https://www.saucedemo.com'. 
Log in with username 'standard_user' and password 'secret_sauce'. 
Maximize the window so we can see everything clearly.
```

**What happens:**
- Claude will ask for permission to use tools (approve it)
- A Chromium browser will open
- The form will be filled automatically
- Login will be executed

**Key point to emphasize:**
> "Notice I didn't specify any CSS selectors, XPaths, or element IDs. The AI read the DOM, understood which field was which, and executed the action."

#### **Part 2: Business Logic** (2 min)

**Prompt to use:**
```
Now I want you to sort the products by price (lowest to highest). 
Add the two cheapest products to the cart. 
Then go to the cart and take a screenshot of the items list.
```

**What happens:**
- The AI will find the sorting dropdown
- Identify the cheapest items
- Click "Add to cart" buttons
- Navigate to cart
- Take a screenshot and show it in the chat

**Key point to emphasize:**
> "This is where the magic happens. A traditional script would break if products change order. The AI reasons: 'find the lowest price' regardless of where it appears on screen."

#### **Part 3: Checkout and Validation** (2 min)

**Prompt to use:**
```
Proceed to checkout. Fill the form with fake data for 'Juan Perez', 
zip code '12345'. Complete the purchase and tell me what success 
message appears on screen.
```

**What happens:**
- Forms will be filled automatically
- Purchase will be confirmed
- The AI will read the success message
- You'll get a response: "Purchase successful, message on screen: Thank you for your order!"

**Key point to emphasize:**
> "The agent is making real-time decisions. If tomorrow they change the button ID, this agent will likely keep working without me touching anything."

## 🛡️ Contingency Plan

Live demos with LLMs can fail. Here's your backup:

### If Claude is slow:
> "The model is analyzing the heavy DOM text, sometimes it takes a few seconds"

### If a selector fails:
Tell Claude: 
```
You picked the wrong button, try finding the one that says 'Checkout' by visible text
```
> "This shows the self-correction capability, which is even better than first-try success"

### If everything breaks:
Have a pre-recorded video ready:
> "Looks like the demo effect hit us today, but this is exactly how it looks when running smoothly" [play video]

## 📋 Test Credentials

For SauceDemo, you can use these test users:

- **standard_user** / secret_sauce (normal user)
- **problem_user** / secret_sauce (has issues)
- **performance_glitch_user** / secret_sauce (slow performance)
- **error_user** / secret_sauce (encounters errors)
- **visual_user** / secret_sauce (visual issues)

## 🎁 Key Takeaways for Audience

1. **No code required** - Natural language instructions
2. **Self-healing** - Works even when UI changes
3. **Visual understanding** - AI "sees" the page
4. **Context-aware** - Understands business logic
5. **QA Engineers evolve** - From code writers to AI orchestrators

## 🔗 Resources

- [Model Context Protocol](https://modelcontextprotocol.io/)
- [Playwright](https://playwright.dev/)
- [Claude Desktop](https://claude.ai/)
- [SauceDemo](https://www.saucedemo.com/)

## 📧 Contact

**Ing. Matías J. Magni**  
CEO @ BugMentor

- LinkedIn: [Add your link]
- Twitter: [Add your link]
- Website: [Add your link]

---

**Remember**: What you're about to see is not a pre-recorded Selenium script. It's an agent making real-time decisions. Welcome to the future of test automation! 🚀
