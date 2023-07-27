<template>
    <div>
        <NuxtLink :to="`https://api.whatsapp.com/send?phone=${tel}`" target="_blank" class="whatsapp-button">
          <i class="fa fa-whatsapp" aria-hidden="true"></i>
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
    border-radius: 50%;
    border: 1px solid #02e479;
    bottom: 15px;
    color: #FFF;
    cursor: pointer;
    font-size: 45px;
    right: 15px;
    padding: 6px 9px 12px 13px;
    position: fixed;
    transition: opacity, 0.2s;
    z-index: 999;
    width: 42px;
    height: 45px;
  }

  .whatsapp-button:hover {
    opacity: .8;
  }
</style>