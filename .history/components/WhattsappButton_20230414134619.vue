<template>
    <div>
        <NuxtLink :to="`https://api.whatsapp.com/send?phone=${tel}`" target="_blank" class="whatsapp-button">
            <img src="~assets/images/ico-whats.png" alt="WhatsApp">
        </NuxtLink>
    </div>
</template>
<script>
    export default {
        props: [
            'tel'
        ]
    }
</script>
<style>
  .whatsapp-button {
    background-color: #02e479;
    border-radius: 3px 3px 0 0;
    border: 1px solid #02e479;
    bottom: -1px;
    cursor: pointer;
    right: 20px;
    padding: 8px 10px;
    position: fixed;
    transition: opacity,0.2s;
    z-index: 999;
  }
  .whatsapp-button:hover {
    opacity: .8;
  }
</style>