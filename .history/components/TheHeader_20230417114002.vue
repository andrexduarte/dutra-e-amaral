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
              {{ SiteName }}
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
  </div>
</template>

<script>
    export default {
        props: [
            'SiteName'
        ]
    }
</script>

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
    max-width: 960px;
    width: 100%;
  }

  .phone {
    color: #FFF;
    text-decoration: none;
    float: right;
    line-height: 30px;
    padding-left: 30px;
    position: relative;
  }

  /* .phone:before {
    content: "";
    background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADEAAAAfCAYAAABOOiVaAAAB1klEQVR4Ae3UsWsUQRTH8QdXJSRRwbnGwkIbAxaC/gnaaJr7B9RCWHWxtfNAUljYCYIgYqGdFtbCFQFbEdxAELHXTo9gI3l+iy2GgR8P3CUMkgef6pa384XZM0+nPWA9H5mNpbaIK/iI67DMFhZY9ha4lkcAsfLlDRIskNDoPQDu4QCOfWzCsIF3mGGjN8MXbA+JaOHokIKADo5WRWATf+CZXazCMME67uIWjuE49rClDgpAREzRBSGpfEZFYBtewktY7xKe4zW+4SRmWPxDhD5k+JuOeAEv7OMGrIRXaLGOXwO+CXlYHaD3PIAXLsOCiDUsh0aUIXuACNB7zsMLp2DCfcjrhPg6BSEyINjzHp55BIOyqj7sMCL8K4UKCPZcxAG89xtnYMIKbg75i9WG7XkCz+xgAlNqjFjBLjzzGIY1PMN8eMR4TDiLH/DMJ/yE9+Z1RwAX8B0OZa4j6nEOX+HC0/ojgBN4Cy+8waTaCOEqPmCJh3kAiIjHgNHHxvLfRACx8uUNEiyQ0MCAeiJaMN4hBQEdGG8PK6IcFxFTdEFIEs9UE6EPqX+r7jrpwwKfRUB9ESJEBxxiRHidghARUHsEkHAHtzGFCVVep9hRxPgRg+coQvgLPNjDurCG9v0AAAAASUVORK5CYII=) -32px 8px no-repeat;
    content: '';
    display: block;
    height: 100%;
    left: 0;
    position: absolute;
    width: 25px;
  } */

  .banner {
    background: #a35048 url('~assets/images/banner.jpg') no-repeat;
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
    line-height: 0.8em;
  }

  @media only screen and (max-width: 768px) {
    .page-title {
      font-size: 60px;
    }

    .header-box p {
      font-size: 16px;
      margin-bottom: 20px;
    }

    .ctaheader h3 {
      margin: 0 0 15px;
    }
  }
</style>
  