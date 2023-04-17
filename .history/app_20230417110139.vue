<template>
  <div>
    <NuxtLayout>
      <main class="main">
        <TheSection ContentTitle="Áreas de Atuação">
          <div class="list">
            <Cards CardTitle="Previdenciário" ico="ico-database">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut lobortis commodo elit non sagittis.
            </Cards>
            <Cards CardTitle="Consultoria Jurídica" ico="ico-chart">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut lobortis commodo elit non sagittis.
            </Cards>
            <Cards CardTitle="Trabalhista" ico="ico-tie">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut lobortis commodo elit non sagittis.
            </Cards>
            <Cards CardTitle="Tributário" ico="ico-calculator">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut lobortis commodo elit non sagittis.
            </Cards>
          </div>
        </TheSection>

        <TheSection ContentTitle="Quemo Somos">
          <QuemSomos />
        </TheSection>

        <TheSection contrast="contrast-color" ContentTitle="Como Chegar">
          <Escritorio />
        </TheSection>
      </main>
    </NuxtLayout>
  </div>
</template>
<script>
<script>
  export default {
    data(){
      return {
        tel: '(031) 98521-2021'
      }
    }
  }
</script>
</script>
