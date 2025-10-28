<template>
  <div style="padding: 40px 20px; max-width: 1200px; margin: 0 auto">
    <h1>Secured Documentation with JWT</h1>
    <p style="color: #666; margin-bottom: 20px">
      This page demonstrates JWT-authenticated access to secured Docsie documentation.
    </p>

    <div
      style="
        background: #fff3cd;
        border: 1px solid #ffc107;
        border-radius: 4px;
        padding: 15px;
        margin-bottom: 20px;
      "
    >
      <strong>⚠️ Demo Mode:</strong> JWT token generation is disabled. You'll be redirected to
      login to access secured content. In production, generate JWT tokens on your backend server.
    </div>

    <details style="margin-bottom: 20px">
      <summary style="cursor: pointer; font-weight: bold">
        How to implement JWT authentication
      </summary>
      <div
        style="margin-top: 10px; padding: 15px; background: #f8f9fa; border-radius: 4px"
      >
        <p><strong>Backend (Node.js example):</strong></p>
        <pre
          style="
            background: #1e293b;
            color: #e2e8f0;
            padding: 10px;
            border-radius: 4px;
            overflow: auto;
          "
        >
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
        </pre>

        <p style="margin-top: 15px"><strong>Frontend (Vue.js):</strong></p>
        <pre
          style="
            background: #1e293b;
            color: #e2e8f0;
            padding: 10px;
            border-radius: 4px;
            overflow: auto;
          "
        >
const response = await fetch('/api/docsie-token');
const { token } = await response.json();

// Use token in data-docsie attribute
const config = `docsie_pk_key:deployment_ID,authorizationToken:${token}`;
        </pre>
      </div>
    </details>

    <!-- Docsie will render here -->
    <div data-ddsroot></div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

// NOTE: In production, generate JWT on your backend!
// This is client-side for demo purposes only
function generateDemoJWT() {
  // Return empty string to trigger fallback login
  // In production, you would:
  // 1. Call your backend API
  // 2. Backend generates JWT using deployment master_key
  // 3. Return JWT to frontend
  return ''
}

const jwtToken = ref(generateDemoJWT())
let link = null
let script = null

onMounted(() => {
  // Load Docsie CSS
  link = document.createElement('link')
  link.rel = 'stylesheet'
  link.href = 'https://lib.docsie.io/current/styles/docsie.css'
  document.head.appendChild(link)

  // Load Docsie script with JWT
  script = document.createElement('script')
  script.async = true
  script.src = 'https://lib.docsie.io/current/service.js'

  const config = jwtToken.value
    ? `docsie_pk_key:deployment_No7ZEhXLoDHoW4RH7,authorizationToken:${jwtToken.value}`
    : `docsie_pk_key:deployment_No7ZEhXLoDHoW4RH7,authorizationFallbackURL:https://app.docsie.io/enterprise/viewer/login/deployment_No7ZEhXLoDHoW4RH7/?redirect=${encodeURIComponent(window.location.href)}`

  script.setAttribute('data-docsie', config)
  document.body.appendChild(script)
})

onUnmounted(() => {
  // Cleanup on unmount
  if (link && link.parentNode) link.parentNode.removeChild(link)
  if (script && script.parentNode) script.parentNode.removeChild(script)

  // Clear Docsie container
  const container = document.querySelector('[data-ddsroot]')
  if (container) container.innerHTML = ''
})
</script>
