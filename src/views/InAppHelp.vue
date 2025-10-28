<template>
  <div style="max-width: 1200px; margin: 0 auto; padding: 40px 20px">
    <h1>Docsie In-App Help System</h1>
    <p style="color: #666; margin-bottom: 30px">
      Interactive help widget embedded directly in your Vue.js application. Look for the help
      button to try it!
    </p>

    <div
      style="
        background: white;
        border-radius: 8px;
        padding: 30px;
        margin-bottom: 20px;
        box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
      "
    >
      <h2 style="color: #2563eb; margin-top: 0">What is In-App Help?</h2>
      <p>
        In-app help is a contextual assistance system that lives inside your application. Instead
        of redirecting users to external documentation, help content appears right where they need
        it.
      </p>

      <div
        style="
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 20px;
          margin-top: 20px;
        "
      >
        <div
          style="
            background: #f8fafc;
            padding: 20px;
            border-radius: 6px;
            border-left: 4px solid #2563eb;
          "
        >
          <h3 style="margin-top: 0; color: #1e40af">🔍 Contextual Search</h3>
          <p>
            Users can search your documentation without leaving your app. Results appear instantly
            in a side panel.
          </p>
        </div>
        <div
          style="
            background: #f8fafc;
            padding: 20px;
            border-radius: 6px;
            border-left: 4px solid #2563eb;
          "
        >
          <h3 style="margin-top: 0; color: #1e40af">📚 Knowledge Base</h3>
          <p>Full documentation accessible via widget. Articles, guides, and FAQs in one place.</p>
        </div>
        <div
          style="
            background: #f8fafc;
            padding: 20px;
            border-radius: 6px;
            border-left: 4px solid #2563eb;
          "
        >
          <h3 style="margin-top: 0; color: #1e40af">🎯 Smart Tagging</h3>
          <p>
            Tag UI elements to show relevant help content automatically based on what users are
            viewing.
          </p>
        </div>
        <div
          style="
            background: #f8fafc;
            padding: 20px;
            border-radius: 6px;
            border-left: 4px solid #2563eb;
          "
        >
          <h3 style="margin-top: 0; color: #1e40af">🌍 Multi-Language</h3>
          <p>
            Built-in internationalization. Serve help content in your users' preferred language.
          </p>
        </div>
      </div>
    </div>

    <div
      style="
        background: white;
        border-radius: 8px;
        padding: 30px;
        margin-bottom: 20px;
        box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
      "
    >
      <h2 style="color: #2563eb; margin-top: 0">How It Works in Vue.js</h2>
      <p>Add the script dynamically using onMounted:</p>

      <pre
        style="
          background: #1e293b;
          color: #e2e8f0;
          padding: 15px;
          border-radius: 6px;
          overflow: auto;
          font-size: 14px;
        "
      >
onMounted(() => {
  const script = document.createElement('script');
  script.async = true;
  script.src = 'https://lib.docsie.io/inapp/current/service.js';
  script.setAttribute('data-docsie-inapp',
    'deploykey:help_center_ID,selfInit:true,search:true,tours:true'
  );
  document.body.appendChild(script);
})

onUnmounted(() => {
  if (script?.parentNode) script.parentNode.removeChild(script);
  if (window.Docsie?.cleanup) window.Docsie.cleanup();
})</pre
      >
    </div>

    <div
      style="
        background: white;
        border-radius: 8px;
        padding: 30px;
        margin-bottom: 20px;
        box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
      "
    >
      <h2 style="color: #2563eb; margin-top: 0">Context-Aware Help with Tags</h2>
      <p>Tag specific elements to show relevant documentation:</p>

      <div style="margin-top: 20px">
        <span
          style="
            display: inline-block;
            background: #f0f9ff;
            border: 1px solid #bae6fd;
            padding: 8px 12px;
            border-radius: 4px;
            margin: 5px;
            cursor: help;
          "
          data-docsie-tag="getting-started"
          >Getting Started</span
        >
        <span
          style="
            display: inline-block;
            background: #f0f9ff;
            border: 1px solid #bae6fd;
            padding: 8px 12px;
            border-radius: 4px;
            margin: 5px;
            cursor: help;
          "
          data-docsie-tag="api-integration"
          >API Integration</span
        >
        <span
          style="
            display: inline-block;
            background: #f0f9ff;
            border: 1px solid #bae6fd;
            padding: 8px 12px;
            border-radius: 4px;
            margin: 5px;
            cursor: help;
          "
          data-docsie-tag="authentication"
          >Authentication</span
        >
      </div>
    </div>

    <div
      style="
        background: white;
        border-radius: 8px;
        padding: 30px;
        box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
      "
    >
      <h2 style="color: #2563eb; margin-top: 0">Use Cases</h2>

      <h3>SaaS Applications</h3>
      <p>
        Reduce support tickets by providing instant help. Users get answers without waiting for
        email responses.
      </p>

      <h3>Developer Tools</h3>
      <p>
        API documentation, code examples, and integration guides accessible without leaving your
        platform.
      </p>

      <h3>Customer Portals</h3>
      <p>Self-service support for customers. Find answers to common questions instantly.</p>
    </div>
  </div>
</template>

<script setup>
import { onMounted, onUnmounted } from 'vue'

let script = null

onMounted(() => {
  // Load in-app help script
  script = document.createElement('script')
  script.async = true
  script.src = 'https://lib.docsie.io/inapp/current/service.js'
  script.setAttribute(
    'data-docsie-inapp',
    'deploykey:help_center_di3sLV7rJwx3RynsXGee,selfInit:true,search:true,tours:true,support:false,language:primary,version:primary'
  )
  document.body.appendChild(script)
})

onUnmounted(() => {
  // Cleanup on unmount
  if (script && script.parentNode) script.parentNode.removeChild(script)

  // Cleanup Docsie widget
  if (window.Docsie && window.Docsie.cleanup) {
    window.Docsie.cleanup()
  }
})
</script>
