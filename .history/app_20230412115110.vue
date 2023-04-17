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

      <section class="content">
        <h2 class="content-title">
         Quem Somos
        </h2>

        <div class="grid">
          <div class="card">
            <img src="~assets/images/foto.jpg" class="card-img" alt="*">
            <h2 class="card-title">
              Dra. Gláucia
            </h2>
            <p class="card-desc">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            </p>
          </div>

          <div class="card">
            <img src="~assets/images/foto.jpg" class="card-img" alt="*">
            <h2 class="card-title">
              Dra. Gláucia
            </h2>
            <p class="card-desc">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            </p>
          </div>
        </div>


       
      </section>

    </main>

    <a href="https://api.whatsapp.com/send?phone=5531983131308" target="_blank" class="whatsapp-button">
      <img src="https://suporteequipamentos.com.br/wp-content/themes/suporte/images/ico-whats.png" alt="WhatsApp">
    </a>

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

  .header:after {
    background: url('assets/images/banner-mask.png') repeat;
    content: '';
    background-size: cover;
    font-weight: 300;
    min-height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 1;
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
    opacity: 0.2;
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
    padding: 75px 0 0 0;
    position: relative;
  }

  .list li:before {
    content: '';
    display: block;
    background: center url('assets/images/check.svg') no-repeat;
    height: 50px;
    width: 100%;
    position: absolute;
    top: 0;
  }

  .whatsapp-button {
    background-color: #02e479;
    border-radius: 3px 3px 0 0;
    border: 1px solid #02e479;
    bottom: -1px;
    cursor: pointer;
    left: 20px;
    padding: 8px 10px;
    position: fixed;
    transition: opacity,0.2s;
    z-index: 999;
  }

  .whatsapp-button:hover {
    opacity: .8;
  }

  /* card */
  .grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
  .card-img {
    max-width: 100%;
  }
</style>
