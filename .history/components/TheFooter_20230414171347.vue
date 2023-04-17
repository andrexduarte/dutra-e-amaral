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
    import Contatos from '../content/contatos.yml'

    console.log('My data', Contatos)
    export default{
            data(){
                return{
                    myJson: Contatos
                }
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