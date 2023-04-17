<template>
  <div>
    <Head>
      <Title>Dutra & Amaral - Advocacia</Title>
    </Head>

    <header class="header">
      <h1 class="page-title">
        Dutra & Amaral <br>Advocacia
      </h1>
    </header>
  </div>
</template>

<style>
  body {
    
  }

  .header {
    background: #a35048 url('assets/images/banner.jpg') no-repeat;
    background-size: cover;
    min-height: 550px;
    padding: 0 30px;
    position: relative;
  }

  .header:before {
    position: absolute;
    content: '';
    background-color: #a35048;
    opacity: 0.4;
    width: 100%;
    height: 100%;
    left: 0;
  }

  .page-title {
    color: #FFF;
    margin: 0;
    font-size: 80px;
    text-align: center;
  }

</style>
