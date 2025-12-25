# 🎯 Demo Prompts - Copy & Paste Ready

This file contains all the prompts you'll need for the demo, ready to copy and paste into Claude Desktop.

---

## 🔐 Prompt 1: Navigation & Login

**Copy this:**
```
Please start a browser using Playwright. Go to 'https://www.saucedemo.com'. 
Log in with username 'standard_user' and password 'secret_sauce'. 
Maximize the window so we can see everything clearly.
```

**Expected result:** Browser opens, navigates to SauceDemo, logs in successfully

**Time:** ~30 seconds

---

## 🛒 Prompt 2: Business Logic

**Copy this:**
```
Now I want you to sort the products by price (lowest to highest). 
Add the two cheapest products to the cart. 
Then go to the cart and take a screenshot of the items list.
```

**Expected result:** Products sorted, two cheapest added to cart, screenshot shown in chat

**Time:** ~60 seconds

---

## ✅ Prompt 3: Checkout & Validation

**Copy this:**
```
Proceed to checkout. Fill the form with fake data for 'Juan Perez', 
zip code '12345'. Complete the purchase and tell me what success 
message appears on screen.
```

**Expected result:** Form filled, purchase completed, success message reported back

**Time:** ~45 seconds

---

## 🔧 Troubleshooting Prompts

### If wrong element is clicked:
```
That was the wrong element. Please find the button that says "[BUTTON_TEXT]" 
and click that instead.
```

### If form field is missed:
```
Please also fill the [FIELD_NAME] field with '[VALUE]'.
```

### If page doesn't load:
```
Wait for the page to fully load, then try again.
```

### To get more details:
```
What elements do you see on the current page? Describe the main sections.
```

### To take an emergency screenshot:
```
Take a screenshot of the current browser state and show it to me.
```

---

## 🎨 Bonus Prompts (If Time Allows)

### Exploratory Testing:
```
Navigate through the site and find any broken links or visual issues. 
Report back what you find.
```

### Data Validation:
```
Check that the total price in the cart matches the sum of individual items. 
Report any discrepancies.
```

### Multi-user Testing:
```
Log out and try logging in with 'problem_user' and the same password. 
Tell me what differences you notice compared to standard_user.
```

---

## 📝 Quick Tips

1. **Always approve tool permissions** - Click "Always Allow" to avoid repeated prompts
2. **Be specific** - The more context you give, the better Claude performs
3. **Natural language** - Don't try to write code, just describe what you want
4. **Screenshots are your friend** - Ask for them when you want visual proof
5. **Course correct** - If something goes wrong, just tell Claude what to do differently

---

## 🎬 Spanish Version (Optional)

### Prompt 1 (Español):
```
Por favor, inicia un navegador usando Playwright. Ve a 'https://www.saucedemo.com'. 
Loguéate con el usuario 'standard_user' y la contraseña 'secret_sauce'. 
Maximiza la ventana para que podamos ver bien.
```

### Prompt 2 (Español):
```
Ahora quiero que ordenes los productos por precio (del más bajo al más alto). 
Añade al carrito los dos productos más baratos que encuentres. 
Luego ve al carrito y toma una captura de pantalla de la lista de ítems.
```

### Prompt 3 (Español):
```
Haz el checkout. Llena el formulario con datos ficticios de 'Juan Perez', 
código postal '12345'. Finaliza la compra y dime qué mensaje de éxito 
aparece en pantalla.
```

---

**Pro Tip:** Have these prompts open in a separate window so you can quickly copy-paste during the demo without fumbling!
