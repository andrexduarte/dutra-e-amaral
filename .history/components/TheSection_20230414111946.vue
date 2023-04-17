<template>
    <div>
        <div class="content-white">
          <section class="content">
            <h2 class="content-title">
              {{ ContentTitle }}
            </h2>

            <div class="list">
              <dl>
                <dt class="ico-database">Previdenciário</dt>
                <dd>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut lobortis commodo elit non sagittis.
                </dd>
              </dl>

              <dl>
                <dt class="ico-chart">Consultoria Jurídica</dt>
                <dd>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut lobortis commodo elit non sagittis.
                </dd>
              </dl>

              <dl>
                <dt class="ico-tie">Trabalhista</dt>
                <dd>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut lobortis commodo elit non sagittis.
                </dd>
              </dl>

              <dl>
                <dt class="ico-calculator">
                  Tributário
                </dt>
                <dd>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut lobortis commodo elit non sagittis.
                </dd>
              </dl>

            </div>
          </section>
        </div>
    </div>
</template>

<script>
    export default {
        props: [
            'ContentTitle'
        ]
    }
</script>