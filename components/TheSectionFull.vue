<template>
    <div class="wrap-content" :class="$attrs.contrast">
            <h2 class="content-title">
            {{ ContentTitle }}
            </h2>
            <slot>

            </slot>
    </div>
</template>

<script>

export default {
    props: [
        "ContentTitle"
    ],
}
</script>

<style scoped>
  .content {
    margin: 0 auto;
    max-width: 960px;
  }
  .wrap-content {
    padding: 0;
    }
  .content-title {
    font-size: 48px;
    text-align: center;
    margin: 0;
  }

  .contrast-color {
    background-color: #a35047;
  }
  .contrast-color .content-title {
    color: #FFF;
  }

  @media only screen and (max-width: 768px) {
    .content-title {
      font-size: 38px;
    }

    .content {
      padding: 0 15px;
    }
  }
</style>
