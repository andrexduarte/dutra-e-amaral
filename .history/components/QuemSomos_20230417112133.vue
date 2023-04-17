<template>
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
            <a href="#" class="card-button">Falar com a Dra. Dutra</a>
        </div>
    </div>
</template>

<style>
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

  @media only screen and (max-width: 768px) {
    .grid {
      grid-template-columns: 100%;
      margin: 0 15px;
    }
  }
</style>