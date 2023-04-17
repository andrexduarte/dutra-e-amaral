<template>
  <div>
    <Head>
      <Title>Dutra & Amaral - Advocacia</Title>
    </Head>

    <header class="header">
      <div class="header-box">
        <h1 class="page-title">
          Dutra & Amaral <br>Advocacia
        </h1>
        <p>
          Para a solução dos seus conflitos a contratação de um profissional especializado é essencial. Entrem em contato com nossos advogados agora mesmo!
        </p>
        <a href="#">Falar com uma advogada!</a>
      </div>
    </header>

    <main>
      <section>

      </section>
    </main>
  </div>
</template>

<style>
  .header {
    background: #a35048 url('assets/images/banner.jpg') no-repeat;
    background-size: cover;
    min-height: 550px;
    padding: 0 30px;
    position: relative;
  }

  .header-box {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    z-index: 5;
    flex-wrap: wrap;
    text-align: center;
  }
  
  .header-box p {
    font-size: 20px;
    color: #FFF;
    width: 100%;
  }

  .header:before {
    position: absolute;
    content: '';
    background-color: #a35048;
    opacity: 0.4;
    width: 100%;
    height: 100%;
    left: 0;
    z-index: 1;
  }

  .page-title {
    color: #FFF;
    margin: 0;
    font-size: 80px;
  }

</style>
