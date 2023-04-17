<template>
    <div>
        <footer class="footer">
            <address class="adr">
                {{ contatos.endereco }} | 
                <span>Tel: {{ tel }} </span> | 
                <span>Email: dutra@gmail.com</span>
            </address>
        </footer>
    </div>
</template>

<script>
    import Contatos from '../data/Contatos.yml'

    console.log('Contatos', Contatos);
    export default {
        head() {
            const tel = this.data.tel;
            const description = this.data.description;

            return {
                tel,
                description
            }
        }
    }
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