<template>
    <div>
        <div class="wrap-content">
          <section class="content">
                <h2 class="content-title">
                {{ ContentTitle }}
                </h2>
                <slot>

                </slot>
            </section>
        </div>
    </div>
</template>

<script>

export default {
    props: [
        "ContentTitle"
    ],
}
</script>
