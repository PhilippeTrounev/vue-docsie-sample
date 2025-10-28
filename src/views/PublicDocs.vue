<template>
  <div data-ddsroot></div>
</template>

<script setup>
import { onMounted, onUnmounted } from 'vue'

let link = null
let script = null

onMounted(() => {
  // Load Docsie CSS
  link = document.createElement('link')
  link.rel = 'stylesheet'
  link.href = 'https://lib.docsie.io/current/styles/docsie.css'
  document.head.appendChild(link)

  // Load Docsie script
  script = document.createElement('script')
  script.async = true
  script.src = 'https://lib.docsie.io/current/service.js'
  script.setAttribute('data-docsie', 'docsie_pk_key:deployment_EFk3AIigMh599HRk6')
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
