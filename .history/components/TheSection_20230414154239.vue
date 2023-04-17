<template>
    <div class="wrap-content" :class="$attrs.contrast">
        <section class="content">
            <h2 class="content-title">
            {{ ContentTitle }}
            </h2>
            <slot>

            </slot>
        </section>
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
    margin: 0 auto 48px;
    max-width: 960px;
  }

  .content-title {
    font-size: 48px;
    text-align: center;
    margin: 0 0 40px;
  }

  .contrast-color {
    background-color: #75362f;
  }

  .contrast-color .content-title,
  .contrast-color p {
    color: #FFF;
  }
</style>
