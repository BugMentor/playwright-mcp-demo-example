# 🎭 Demo Playwright + MCP - SauceDemo

Repositorio de demostración para la charla "Playwright + MCP: El Futuro de la Automatización con IA"

## 🎯 ¿Qué es esto?

Esta es una demostración en vivo del uso de Claude Desktop + Model Context Protocol (MCP) + Playwright para realizar pruebas autónomas sin escribir scripts de prueba tradicionales.

**La Magia**: En lugar de escribir código, das instrucciones en lenguaje natural a un agente de IA que controla el navegador.

## 🚀 Requisitos Previos

Antes de la demo, asegúrate de tener:

1. **Claude Desktop App** instalada
   - Descarga desde: https://claude.ai/download
   
2. **Node.js** instalado (v18 o superior)
   - Verifica con: `node --version`
   
3. **Configuración MCP** correctamente establecida

## ⚙️ Instrucciones de Configuración

### Paso 1: Instalar Claude Desktop

Descarga e instala Claude Desktop desde el sitio web oficial.

### Paso 2: Configurar MCP

1. Localiza tu archivo de configuración de Claude:
   - **Windows**: `%APPDATA%\Claude\claude_desktop_config.json`
   - **macOS**: `~/Library/Application Support/Claude/claude_desktop_config.json`
   - **Linux**: `~/.config/Claude/claude_desktop_config.json`

2. Agrega la configuración del servidor MCP de Playwright:

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

3. Guarda el archivo y reinicia Claude Desktop

### Paso 3: Verificar Instalación

1. Abre Claude Desktop
2. Busca el ícono 🔌 en la parte inferior del chat
3. Deberías ver "playwright" listado como una herramienta disponible

## 🎬 Guion de Demo: "El QA Autónomo"

### Escenario
Usaremos **SauceDemo (Swag Labs)** - un sitio de e-commerce demo diseñado para pruebas.
- URL: https://www.saucedemo.com
- Duración: 3-5 minutos
- ¡No se requiere código!

### Flujo de la Demo

#### **Parte 1: Navegación e Inicio de Sesión** (1 min)

**Prompt a usar:**
```
Por favor, inicia un navegador usando Playwright. Ve a 'https://www.saucedemo.com'. 
Loguéate con el usuario 'standard_user' y la contraseña 'secret_sauce'. 
Maximiza la ventana para que podamos ver bien.
```

**Qué sucede:**
- Claude pedirá permiso para usar herramientas (apruébalo)
- Se abrirá un navegador Chromium
- El formulario se llenará automáticamente
- Se ejecutará el login

**Punto clave a enfatizar:**
> "Fíjense que no especifiqué ningún selector CSS, XPath o ID de elemento. La IA leyó el DOM, entendió qué campo es cuál y ejecutó la acción."

#### **Parte 2: Lógica de Negocio** (2 min)

**Prompt a usar:**
```
Ahora quiero que ordenes los productos por precio (del más bajo al más alto). 
Añade al carrito los dos productos más baratos. 
Luego ve al carrito y toma una captura de pantalla de la lista de ítems.
```

**Qué sucede:**
- La IA encontrará el dropdown de ordenamiento
- Identificará los ítems más baratos
- Hará clic en los botones "Add to cart"
- Navegará al carrito
- Tomará una captura de pantalla y la mostrará en el chat

**Punto clave a enfatizar:**
> "Aquí es donde ocurre la magia. Un script tradicional se rompería si los productos cambian de orden. La IA razona: 'busca el precio más bajo' sin importar dónde aparezca en la pantalla."

#### **Parte 3: Checkout y Validación** (2 min)

**Prompt a usar:**
```
Haz el checkout. Llena el formulario con datos ficticios de 'Juan Perez', 
código postal '12345'. Finaliza la compra y dime qué mensaje de éxito 
aparece en pantalla.
```

**Qué sucede:**
- Los formularios se llenarán automáticamente
- Se confirmará la compra
- La IA leerá el mensaje de éxito
- Recibirás una respuesta: "¡Compra exitosa, mensaje en pantalla: Thank you for your order!"

**Punto clave a enfatizar:**
> "El agente está tomando decisiones en tiempo real. Si mañana cambian el ID del botón, este agente probablemente seguirá funcionando sin que yo toque nada."

## 🛡️ Plan de Contingencia

Las demos en vivo con LLMs pueden fallar. Aquí está tu respaldo:

### Si Claude es lento:
> "El modelo está analizando el texto pesado del DOM, a veces toma unos segundos"

### Si falla un selector:
Dile a Claude: 
```
Te equivocaste de botón, intenta buscar el que dice 'Checkout' por texto visible
```
> "Esto muestra la capacidad de autocorrección, que es incluso mejor que el éxito en el primer intento"

### Si todo falla:
Ten un video pregrabado listo:
> "Parece que el efecto demo nos atacó hoy, pero así es exactamente cómo se ve cuando corre fluido" [reproducir video]

## 📋 Credenciales de Prueba

Para SauceDemo, puedes usar estos usuarios de prueba:

- **standard_user** / secret_sauce (usuario normal)
- **problem_user** / secret_sauce (tiene problemas)
- **performance_glitch_user** / secret_sauce (rendimiento lento)
- **error_user** / secret_sauce (encuentra errores)
- **visual_user** / secret_sauce (problemas visuales)

## 🎁 Conclusiones Clave para la Audiencia

1. **No se requiere código** - Instrucciones en lenguaje natural
2. **Auto-reparación** - Funciona incluso cuando cambia la UI
3. **Comprensión visual** - La IA "ve" la página
4. **Consciente del contexto** - Entiende la lógica de negocio
5. **Evolución de los QA Engineers** - De escritores de código a orquestadores de IA

## 🔗 Recursos

- [Model Context Protocol](https://modelcontextprotocol.io/)
- [Playwright](https://playwright.dev/)
- [Claude Desktop](https://claude.ai/)
- [SauceDemo](https://www.saucedemo.com/)

## 📧 Contacto

**Ing. Matías J. Magni**  
CEO @ BugMentor

- LinkedIn: [Agregar tu link]
- Twitter: [Agregar tu link]
- Website: [Agregar tu link]

---

**Recuerda**: Lo que estás por ver no es un script de Selenium pregrabado. Es un agente tomando decisiones en tiempo real. ¡Bienvenido al futuro de la automatización de pruebas! 🚀
