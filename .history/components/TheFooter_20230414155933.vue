<template>
    <div>
        <footer class="footer">
            <address class="adr">
                 | 
                <span>Tel: {{ tel }}</span> | 
                <span>Email: dutra@gmail.com</span>
            </address>
        </footer>
    </div>
</template>

<script>
  export default {
    data(){
      return {
          tel: '(031) 98521-2021'
      }
    },
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