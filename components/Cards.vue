<template>
  <dl>
      <dt :class="$attrs.ico">
        {{ CardTitle }}
      </dt>
      <dd>
        <slot></slot>
      </dd>
  </dl>
</template>

<script>
  export default {
      props: [
          'CardTitle'
      ],
  }
</script>

<style>
 .list {
    display: flex;
    margin: 0;
    padding: 0;
  }

  .list dl {
    background: #FFF;
    margin: 0 15px 20px;
    list-style: none;
    padding: 78px 25px 30px;
    position: relative;
    border-radius: 2px;
    text-align: center;
    box-shadow: 10px 10px 40px 0 rgba(0,0,0,0.2);
  }

  .list dt {
    font-family: 'Barlow', sans-serif;
    font-size: 18px;
    margin-bottom: 15px;
  }

  .list dd {
    font-size: 14px;
    margin: 0;
    color: rgb(58, 58, 58);
  }


  .list dt:before {
    content: '';
    display: block;
    height: 45px;
    width: 100%;
    position: absolute;
    top: 20px;
    left: 0;
  }
  
  @media only screen and (max-width: 768px) {
    .list {
      flex-wrap: wrap;
    }
  }
</style>