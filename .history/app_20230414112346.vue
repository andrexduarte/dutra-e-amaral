<template>
    <Head>
      <Title>Dutra & Amaral - Advocacia</Title>
    </Head>


    <NuxtLayout>
      <div>
      <main class="main">
        <TheSection ContentTitle="Áreas de Atuação">
          <Cards />
        </TheSection>

        <div class="content-gray">
          <section class="content">
          <h2 class="content-title">
            Quem Somos
          </h2>

          <div class="grid">
            <div class="card">
              <img src="~assets/images/glaucia-amaral.jpg" class="card-img" alt="Gláucia Amaral">
              <h2 class="card-title">
                Dra. Amaral
              </h2>
              <p class="card-desc">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
              </p>

              <a href="#" class="card-button">Falar com a Dra. Gláucia</a>
            </div>

            <div class="card">
              <img src="~assets/images/dutra.jpg" class="card-img" alt="Dutra">
              <h2 class="card-title">
                Dra. Dutra
              </h2>
              <p class="card-desc">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
              </p>
              <a href="#" class="card-button">Falar com a Dra. Gláucia</a>
            </div>
          </div>
          </section>
        </div>

        <section class="content">
          <h2 class="content-title">
          Nosso Escritório
          </h2>

        </section>
      </main>


      </div>
    </NuxtLayout>
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
    padding: 78px 25px 30px;
    position: relative;
    border-radius: 2px;
    text-align: center;
    box-shadow: 10px 10px 40px 0 rgba(0,0,0,0.2);
  }

  .list dt {
    font-family: 'Barlow', sans-serif;
    font-size: 18px;
    margin-bottom: 15px;
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
    height: 45px;
    width: 100%;
    position: absolute;
    top: 20px;
    left: 0;
  }

  .list .ico-calculator:before {
    background: center url('assets/images/ico-calculator.svg') no-repeat;
  }

  .list .ico-tie:before {
    background: center url('assets/images/ico-tie.svg') no-repeat;
  } 

  .list .ico-chart:before {
    background: center url('assets/images/ico-chart.svg') no-repeat;
  }

  .list .ico-database:before {
    background: center url('assets/images/ico-database.svg') no-repeat;
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

  .card-title {
    font-size: 20px;
  }

  .card-img {
    max-width: 100%;
  }

  .card-desc {
    font-size: 14px;
    margin-bottom: 30px;
  }

  .card-button {
    background: #a35048;
    padding: 10px 20px;
    color: #FFF;
    text-decoration: none;
    font-size: 14px;
  }

</style>
