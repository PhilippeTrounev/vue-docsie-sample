# Docsie Vue.js Integration Example

Complete Vue.js 3 example demonstrating how to embed Docsie documentation platform into your Vue applications. This example shows three integration patterns: **public documentation**, **JWT-secured documentation**, and **in-app help widgets**.

## 🚀 Quick Start

```bash
npm install
npm run dev
```

Visit http://localhost:5173 to see the examples.

## 📚 What's Included

### 1. Public Documentation (`/`)
Embed publicly accessible documentation with a single deployment key. Perfect for:
- Product documentation
- API references
- User guides
- Knowledge bases

**Implementation:**
```vue
<script setup>
import { onMounted, onUnmounted } from 'vue'

let link = null
let script = null

onMounted(() => {
  link = document.createElement('link')
  link.rel = 'stylesheet'
  link.href = 'https://lib.docsie.io/current/styles/docsie.css'
  document.head.appendChild(link)

  script = document.createElement('script')
  script.async = true
  script.src = 'https://lib.docsie.io/current/service.js'
  script.setAttribute('data-docsie', 'docsie_pk_key:YOUR_DEPLOYMENT_KEY')
  document.body.appendChild(script)
})

onUnmounted(() => {
  if (link?.parentNode) link.parentNode.removeChild(link)
  if (script?.parentNode) script.parentNode.removeChild(script)

  const container = document.querySelector('[data-ddsroot]')
  if (container) container.innerHTML = ''
})
</script>

<template>
  <div data-ddsroot></div>
</template>
```

### 2. Secured Documentation with JWT (`/secure`)
Authenticate users with JWT tokens for private enterprise documentation. Ideal for:
- Internal documentation
- Enterprise knowledge bases
- Customer-specific documentation
- Premium content

**Backend (Node.js):**
```javascript
import jwt from 'jsonwebtoken';

app.get('/api/docsie-token', (req, res) => {
  const masterKey = process.env.DOCSIE_MASTER_KEY;

  const token = jwt.sign(
    {}, // payload
    masterKey,
    { algorithm: 'HS256', expiresIn: '1h' }
  );

  res.json({ token });
});
```

**Frontend (Vue.js):**
```vue
<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const jwtToken = ref('')

onMounted(async () => {
  // Fetch JWT from your backend
  const response = await fetch('/api/docsie-token')
  const { token } = await response.json()
  jwtToken.value = token

  // Load Docsie with JWT
  const script = document.createElement('script')
  script.src = 'https://lib.docsie.io/current/service.js'
  script.setAttribute('data-docsie',
    `docsie_pk_key:YOUR_DEPLOYMENT_KEY,authorizationToken:${token}`
  )
  document.body.appendChild(script)
})
</script>
```

### 3. In-App Help Widget (`/inapp-help`)
Contextual help system that lives inside your application. Features include:
- **Contextual search** - Search documentation without leaving your app
- **Knowledge base** - Full documentation in a side panel
- **Smart tagging** - Show relevant help based on user context
- **Tours & guides** - Interactive product tours
- **Multi-language** - Internationalization support

**Implementation:**
```vue
<script setup>
import { onMounted, onUnmounted } from 'vue'

let script = null

onMounted(() => {
  script = document.createElement('script')
  script.async = true
  script.src = 'https://lib.docsie.io/inapp/current/service.js'
  script.setAttribute('data-docsie-inapp',
    'deploykey:YOUR_HELP_CENTER_ID,selfInit:true,search:true,tours:true'
  )
  document.body.appendChild(script)
})

onUnmounted(() => {
  if (script?.parentNode) script.parentNode.removeChild(script)
  if (window.Docsie?.cleanup) window.Docsie.cleanup()
})
</script>
```

**Context-aware help with tags:**
```vue
<template>
  <button data-docsie-tag="getting-started">Get Started</button>
  <div data-docsie-tag="api-integration">API Settings</div>
</template>
```

## 🔧 Configuration Options

### Public/Secured Documentation

```javascript
// Minimal configuration
'docsie_pk_key:deployment_YOUR_KEY'

// With JWT authentication
'docsie_pk_key:deployment_YOUR_KEY,authorizationToken:YOUR_JWT_TOKEN'

// With fallback login URL
'docsie_pk_key:deployment_YOUR_KEY,authorizationFallbackURL:https://your-login-page.com'
```

### In-App Help Widget

```javascript
'deploykey:YOUR_HELP_CENTER_ID,selfInit:true,search:true,tours:true,support:false,language:primary,version:primary'
```

**Options:**
- `selfInit` - Auto-initialize widget (true/false)
- `search` - Enable search functionality (true/false)
- `tours` - Enable guided tours (true/false)
- `support` - Enable support chat (requires JWT auth)
- `language` - Language code or "primary"
- `version` - Version selector or "primary"

## 🎯 Use Cases

### SaaS Applications
Embed documentation directly in your SaaS product. Reduce support tickets by 40%+ with instant, contextual help. Users get answers without leaving your application or waiting for email support.

### Developer Platforms
Provide API documentation, SDK references, and integration guides right in your developer console. Code examples and tutorials accessible without context switching.

### Enterprise Portals
Secure, JWT-authenticated documentation for internal teams or enterprise customers. Role-based access control with your existing authentication system.

### E-Learning Platforms
Interactive course materials, tutorials, and knowledge bases. Version control for curriculum updates and multi-language support for global audiences.

### Customer Support Portals
Self-service knowledge base that reduces support ticket volume. Contextual help reduces time-to-resolution and improves customer satisfaction scores.

## 📦 Project Structure

```
src/
├── views/
│   ├── PublicDocs.vue      # Public documentation example
│   ├── SecureDocs.vue      # JWT-secured documentation
│   └── InAppHelp.vue       # In-app help widget
├── router/
│   └── index.ts            # Vue Router configuration
├── App.vue                 # Main app with navigation
└── main.ts                 # App entry point
```

## 🔗 Related Examples

- [React Integration Example](https://github.com/PhilippeTrounev/react-docsie-sample)
- [Blazor WASM Example](https://github.com/PhilippeTrounev/blazor-wasm-docsie-sample)
- [Razor Pages Example](https://github.com/PhilippeTrounev/razor-pages-docsie-sample)

## 🆘 Support

- **Discord**: [Join our community](https://discord.gg/rptfXQnq)
- **Email**: hello@docsie.io
- **Documentation**: [docs.docsie.io](https://docs.docsie.io)

## 📄 License

MIT License - Feel free to use this example in your projects.

---

**Built with Vue.js 3, Vite, and the Docsie Documentation Platform**
