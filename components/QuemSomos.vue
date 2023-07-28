<template>
    <div class="content">
        <div class="card">
            <img src="~assets/dutra-amaral.jpg" class="card-img" alt="Dutra e Amaral">
            <h2 class="card-title">
              Dra. Whênia Maria Martins Costa e Dutra - OAB/MG 129.430
            </h2>
            <h2 class="card-title">
              Dra. Gláucia de Oliveira Amaral - OAB/MG 129.513
            </h2>
            <Button />
        </div>
    </div>
</template>

<style lang="scss">
/* card */
  .grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 30px;
    grid-row-gap: 1em;
  }

  .card {
    text-align: center;
  }

  .card-title {
    font-size: 35px;
    margin: 0;
  }

  .card-title + .card-title {
    margin-bottom: 35px;
  }

  .card-img {
    border-radius: 3px;
    max-width: 100%;
    margin-bottom: 30px;
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

  @media only screen and (max-width: 768px) {
    .grid {
      grid-template-columns: 100%;
      margin: 0 15px;
    }

    .card {
      margin-bottom: 15px;
    }

    .card-title {
      font-size: 25px;
      text-align: left;

      + .card-title {
        margin: 25px 0 35px;
      }
    }
  }
</style>