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
    var Contatos = Object.freeze({
      tel: '(031) 98521-2021',
      endereco: 'Rua Juiz de Fora, 32 - Sala 403 - Centro, Ipatinga - MG',
    })
</script>