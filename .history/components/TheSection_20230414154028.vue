<template>
    <div class="wrap-content"  :class="$attrs.class">
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

<style>
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
    backgroud-color: #75362f;
  }
</style>
