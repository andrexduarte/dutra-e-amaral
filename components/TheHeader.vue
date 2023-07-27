<template>
    <div>
      <Head>
        <Title>Dutra & Amaral - Advocacia</Title>
      </Head>
  
      <header class="header">
        <div class="banner">
          <div class="header-box">
            <img class="site-logo" src="~assets/dutra-e-amaral-advocacia.png" alt="Dutra & Amaral - Advocacia">
            <h1 class="page-title">
              {{ SiteName }}
            </h1>
            <p>
             {{ SiteDesc }}
            </p>

            <Button tel="5531983619686" />
          </div>
        </div>
  
        <!-- <section class="ctaheader">
          <div class="inner-content">
            <h3>Buscando advogado para solucionar seu problema?</h3>
            <a href="https://api.whatsapp.com/send?phone=5531983619686" class="btn">Falar com Advogada Especialista</a>
          </div>
        </section> -->
      </header>
  </div>
</template>

<script>
    export default {
        props: [
            'SiteName',
            'SiteDesc'
        ]
    }
</script>

<style lang="scss">
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

  .site-logo {
    display: block;
    margin: 0 auto 32px;
    max-width: 390px;
    width: 100%;

    .redes & {
      width: 80%;
    }
  }

  .phone {
    color: #FFF;
    text-decoration: none;
    float: right;
    line-height: 30px;
    padding-left: 30px;
    position: relative;
  }

  .banner {
    background: #a35048 url('~/assets/banner.jpg') no-repeat;
    background-size: cover;
    min-height: 100vh;
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
    max-width: 760px;
    transform: translate(-50%, -50%);
    position: absolute;
    z-index: 5;
    text-align: center;
    width: 100%;
    box-sizing: border-box;
  }
  
  .header-box p {
    font-family: 'EB Garamond', serif;
    font-size: 20px;
    margin-bottom: 40px;
    color: #FFF;
  }

  .banner:before {
    position: absolute;
    content: '';
    background-color: #000;
    opacity: 0.8;
    width: 100%;
    height: 100%;
    left: 0;
    z-index: 1;
  }

  .page-title {
    color: #FFF;
    font-family: 'EB Garamond', serif;
    font-weight: 400;
    margin: 0;
    font-size: 68px;
    line-height: 0.8em;
  }

  @media only screen and (max-width: 768px) {
    .page-title {
      font-size: 58px;
    }

    .header-box {
      padding: 0 15px;

      p {
        font-size: 20px;
        margin-bottom: 25px;
      }      
    }


    .ctaheader h3 {
      margin: 0 0 15px;
    }
  }
</style>
  