<template>
    <div>
        <footer class="footer">
            <address class="adr">
                {{ endereco }} | 
                <span repo="nuxt/content">Tel: <nuxt-content :contatos="tel" /></span> | 
                <span>Email: dutra@gmail.com</span>
            </address>
        </footer>
    </div>
</template>

<script>
    import contatos from "data/contato.yml";
</script>

<style>
    .footer {
        background-color: #a35048;
        font-size: 16px;
        box-sizing: border-box;
        padding: 20px 0;
        text-align: center;
        color: #fff;
    }
</style>