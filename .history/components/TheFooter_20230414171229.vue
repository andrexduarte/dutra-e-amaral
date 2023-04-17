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
    import JsonData from './content/contatos.yml'

    export default {
    data() {
        return {
            data: []
        }
    },
    mounted(){
        const parsedData = JSON.parse(JsonData);
        this.data = parsedData.data
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