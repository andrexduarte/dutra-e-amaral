<template>
    <Head>
      <Title>Dutra & Amaral - Advocacia</Title>
    </Head>
    <div>
        <TheHeader SiteName="Dutra & Amaral Advocacia" />
        <slot />
        <TheFooter />
        <WhattsappButton tel="5531999999999" />
    </div>
</template>

<script>
export default {
  const: Contatos = Vue.createApp({
    data() {
      return { tel: '(031) 98521-2021' }
    }
  })
}

</script>