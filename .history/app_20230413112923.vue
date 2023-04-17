<template>
  <div>
    <Head>
      <Title>Dutra & Amaral - Advocacia</Title>
    </Head>

    <header class="header">
      <!-- <div class="header-top">
        <div class="inner-content">
          <a href="tel:31999999999" class="phone">(31) 9 9999-9999</a>
        </div>
      </div> -->
      <div class="banner">
        <div class="header-box">
          <h1 class="page-title">
            Dutra & Amaral <br>Advocacia
          </h1>
          <p>
            Para a solução dos seus conflitos a contratação de um profissional especializado é essencial. Entrem em contato com nossos advogados agora mesmo!
          </p>
        </div>
      </div>

      <section class="ctaheader">
        <div class="inner-content">
          <h3>Buscando advogado para solucionar seu problema?</h3>
          <a href="#" class="btn">Falar com uma advogada agora!</a>
        </div>
      </section>
    </header>

    <main class="main">
      <section class="content">
        <h2 class="content-title">
          ÁREAS DE ATUAÇÃO
        </h2>

        <div class="list">
          <dl>
            <dt>Previdenciário</dt>
            <dd>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut lobortis commodo elit non sagittis.
            </dd>
          </dl>

          <dl>
            <dt>Consultoria Jurídica</dt>
            <dd>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut lobortis commodo elit non sagittis.
            </dd>
          </dl>

          <dl>
            <dt>Trabalhista</dt>
            <dd>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut lobortis commodo elit non sagittis.
            </dd>
          </dl>

          <dl>
            <dt>Tributário</dt>
            <dd>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut lobortis commodo elit non sagittis.
            </dd>
          </dl>

        </div>
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

            <a href="#" class="card-button">Falar com a Dra. Gláucia</a>
          </div>

          <div class="card">
            <img src="~assets/images/foto.jpg" class="card-img" alt="*">
            <h2 class="card-title">
              Dra. Gláucia
            </h2>
            <p class="card-desc">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            </p>
            <a href="#" class="card-button">Falar com a Dra. Gláucia</a>
          </div>
        </div>
      </section>
      <section class="content">
        <h2 class="content-title">
         Nosso Escritório
        </h2>

      </section>
    </main>

    <a href="https://api.whatsapp.com/send?phone=5531983131308" target="_blank" class="whatsapp-button">
      <img src="~assets/images/ico-whats.png" alt="WhatsApp">
    </a>

  </div>
</template>

<style>
  .header-top {
    background-color: #000;
    color: #fff;
    max-height: 50px;
    overflow: hidden;
    padding: 10px 0;
    top: 0;
    width: 100%;
  }

  .inner-content {
    margin-left: auto;
    margin-right: auto;
    width: 960px;
  }

  .phone {
    color: #FFF;
    text-decoration: none;
    float: right;
    line-height: 30px;
    padding-left: 30px;
    position: relative;
  }

  .phone:before {
    content: "";
    background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADEAAAAfCAYAAABOOiVaAAAB1klEQVR4Ae3UsWsUQRTH8QdXJSRRwbnGwkIbAxaC/gnaaJr7B9RCWHWxtfNAUljYCYIgYqGdFtbCFQFbEdxAELHXTo9gI3l+iy2GgR8P3CUMkgef6pa384XZM0+nPWA9H5mNpbaIK/iI67DMFhZY9ha4lkcAsfLlDRIskNDoPQDu4QCOfWzCsIF3mGGjN8MXbA+JaOHokIKADo5WRWATf+CZXazCMME67uIWjuE49rClDgpAREzRBSGpfEZFYBtewktY7xKe4zW+4SRmWPxDhD5k+JuOeAEv7OMGrIRXaLGOXwO+CXlYHaD3PIAXLsOCiDUsh0aUIXuACNB7zsMLp2DCfcjrhPg6BSEyINjzHp55BIOyqj7sMCL8K4UKCPZcxAG89xtnYMIKbg75i9WG7XkCz+xgAlNqjFjBLjzzGIY1PMN8eMR4TDiLH/DMJ/yE9+Z1RwAX8B0OZa4j6nEOX+HC0/ojgBN4Cy+8waTaCOEqPmCJh3kAiIjHgNHHxvLfRACx8uUNEiyQ0MCAeiJaMN4hBQEdGG8PK6IcFxFTdEFIEs9UE6EPqX+r7jrpwwKfRUB9ESJEBxxiRHidghARUHsEkHAHtzGFCVVep9hRxPgRg+coQvgLPNjDurCG9v0AAAAASUVORK5CYII=) -32px 8px no-repeat;
    content: '';
    display: block;
    height: 100%;
    left: 0;
    position: absolute;
    width: 25px;
  }

  .header {
    margin-bottom: 48px;
  }

  .banner {
    background: #a35048 url('assets/images/banner.jpg') no-repeat;
    background-size: cover;
    min-height: 425px;
    padding: 0 30px;
    position: relative;
  }

  /* .header:after {
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
  } */

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

  .banner:before {
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
    font-size: 90px;
    line-height: 80px;
  }

  .content {
    margin: 0 auto 48px;
    max-width: 960px;
  }

  .content-title {
    font-size: 48px;
    text-align: center;
    margin: 0 0 40px;
  }

  .list {
    display: flex;
    margin: 0;
    padding: 0;
  }

  .list dl {
    background: #FFF;
    margin-right: 20px;
    list-style: none;
    width: 25%;
    padding: 75px 30px 30px;
    position: relative;
    border-radius: 2px;
    text-align: center;
    box-shadow: 10px 10px 40px 0 rgba(0,0,0,0.2);
  }

  .list dt {
    font-family: 'Barlow', sans-serif;
    font-size: 20px;
    margin-bottom: 20px;
  }

  .list dd {
    font-size: 14px;
    margin: 0;
    color: rgb(58, 58, 58);
  }

  .list dl:last-child {
    margin-right: 0;
  }

  .list dt:before {
    content: '';
    display: block;
    background: center url('assets/images/check.svg') no-repeat;
    height: 50px;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
  }

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

  /* card */
  .grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 30px;
    grid-row-gap: 1em;
  }
  .card-img {
    max-width: 100%;
  }
</style>
