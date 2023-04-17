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
        <a href="#" class="btn">Falar com uma advogada!</a>
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
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    position: absolute;
    z-index: 5;
    text-align: center;
  }
  
  .header-box p {
    font-size: 20px;
    margin-bottom: 40px
    color: #FFF;
  }

  .header:before {
    position: absolute;
    content: '';
    background-color: #a35048;
    opacity: 0.6;
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

  .btn {
    background: #73312a;
    padding: 10px 20px;
    color: #FFF;
    text-transform: uppercase;
    text-decoration: none;
  }
</style>
