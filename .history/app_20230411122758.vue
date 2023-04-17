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
      <section class="content">
        <h2 class="content-title">
          ÁREAS DE ATUAÇÃO
        </h2>

        <ul class="list">
          <li>Direito de família</li>
          <li>Direito previdenciário</li>
          <li>Direito imobiliário</li>
          <li>Direito empresarial</li>
          <li>Direito ambiental</li>
          <li>Direito do trabalho</li>
          <li>Direito de trânsito</li>
          <li>Direito do consumidor</li>
        </ul>

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
    margin-bottom: 40px;
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
    margin-bottom: 40px;
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
    font-size: 90px;
    line-height: 80px;
  }

  .btn {
    background: #73312a;
    padding: 10px 20px;
    color: #FFF;
    text-transform: uppercase;
    text-decoration: none;
  }

  .btn:hover {
    opacity: .8;
  }

  .content {
    margin: 0 auto;
    max-width: 760px;
  }

  .content-title {
    font-size: 48px;
    text-align: center;
    margin: 0 0 40px;
  }

  .list {
    margin: 0;
    padding: 0;
  }

  .list li {
    list-style: none;
    float: left;
    width: 25%;
    font-size: 20px;
    height: 95px;
    text-align: center;
    padding: 50px;
  }

  .list li:before {
    content: '';
    display: block;
    background: url('assets/images/check.svg') no-repeat;
    height: 50px;
    width: 50px;
  }
</style>
