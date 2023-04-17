<template>
    <div>
        <div class="content-white">
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
