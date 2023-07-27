<template>
  <div>
    <NuxtLayout>
      <main class="main">
        <TheSection ContentTitle="Quem Somos">
          <QuemSomos />
        </TheSection>

        <TheSection ContentTitle="Áreas de Atuação">
          <div class="list">
            <ul id="listAtuacao" class="list-atuacao">
              <li v-for="item in items">
                <i class="fa fa-check-circle-o" aria-hidden="true"></i>
                {{ item.atuacao }}
              </li>
            </ul>
          </div>
        </TheSection>

        <TheSection ContentTitle="Clientes Satisfeitos">
          <Depoimentos />
        </TheSection>

        <TheSectionFull contrast="contrast-color">
          <Escritorio />
        </TheSectionFull>
      </main>
    </NuxtLayout>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        items: [
          { atuacao: 'Revisões de aposentaria' }, 
          { atuacao: 'Aposentadoria Especial' },
          { atuacao: 'Aposentadoria Profissionais de Saúde' }, 
          { atuacao: 'Planejamento Aposentadoria' },
          { atuacao: 'Benefícios do INSS' }, 
          { atuacao: 'Benefício por incapacidade' },
          { atuacao: 'Aposentadoria da pessoa com deficiência' }, 
          { atuacao: 'Aposentadoria dos profissionais da Indústria' },
          { atuacao: 'Revisão da Vida Toda' }
        ]
      }
    }
  }
</script>

<style lang="scss">

  .list-atuacao {
    color: #FFF;
    list-style: none;
    padding: 0;
    margin: 0;
    display: grid;
    grid-template: repeat(3, 1fr) / repeat(3, 1fr);
    gap: 20px 20px;

    li {
      background: #fff;
      box-shadow: 10px 10px 40px 0 rgba(0,0,0,.2);
      border-radius: 2px;
      color: #000;
      font-weight: 400;
      font-size: 22px;
      list-style: none;
      text-align: center;
      padding: 2em .8em;
    }

    .fa-check-circle-o {
      color: #75362f;
      font-size: 50px;
      display: block;
      text-align: center;
      margin-bottom: 15px;
    }
  }

  
  @media only screen and (max-width: 768px) {
    .list-atuacao {
      color: #FFF;
      list-style: none;
      padding: 0;
      margin: 0;
      display: grid;
      grid-template: repeat(1, 1fr) / repeat(1, 1fr);
      gap: 20px 20px;
      }
    }
</style>
