<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div class="app">
    <nav class="navbar">
      <div class="nav-brand">
        <h2>Docsie Vue.js Examples</h2>
      </div>
      <div class="nav-links">
        <RouterLink to="/">Public Docs</RouterLink>
        <RouterLink to="/secure">Secure Docs</RouterLink>
        <RouterLink to="/inapp-help">In-App Help</RouterLink>
      </div>
    </nav>

    <main class="main-content">
      <RouterView />
    </main>

    <footer class="footer">
      <p>
        Docsie Documentation Platform |
        <a href="https://discord.gg/rptfXQnq" target="_blank" rel="noopener">Discord</a> |
        <a href="mailto:hello@docsie.io">hello@docsie.io</a>
      </p>
    </footer>
  </div>
</template>

<style scoped>
.app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.navbar {
  background: #2563eb;
  color: white;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.nav-brand h2 {
  margin: 0;
  font-size: 1.5rem;
}

.nav-links {
  display: flex;
  gap: 2rem;
}

.nav-links a {
  color: white;
  text-decoration: none;
  font-weight: 500;
  transition: opacity 0.2s;
}

.nav-links a:hover,
.nav-links a.router-link-active {
  opacity: 0.8;
}

.main-content {
  flex: 1;
}

.footer {
  background: #1e293b;
  color: #94a3b8;
  padding: 1.5rem 2rem;
  text-align: center;
}

.footer a {
  color: #60a5fa;
  text-decoration: none;
}

.footer a:hover {
  text-decoration: underline;
}
</style>
