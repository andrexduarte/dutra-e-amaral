<template>
    <div>
        <footer class="footer">
            <address class="adr">
                {{ endereco }} | 
                <span repo="nuxt/content">Tel: {{ tel }} </span> | 
                <span>Email: dutra@gmail.com</span>
            </address>
        </footer>
    </div>
</template>

<script>
    import data from "~content/contatos.yml"
    export const state = () => ({
        contatos: data.contatos
    })
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