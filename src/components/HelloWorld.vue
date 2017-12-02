<template>
  <div class="hello">
    <div class="doc">
      
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style style="scss" scoped>
  /*$right: 20px;
  $bottom: 150px;
*/
  .doc {
    width: 50px;
    height: 50px;
    background: #a3a3a3;
    position: fixed;
    right: 20px;
    bottom: 150px;
    -webkit-animation: big 1s 0s linear forwards;
    transform: 

  }
  .doc-btn {
    -webkit-animation: big 1s 0s linear;
  }
  @keyframes big {
    0% {
      -webkit-transform: scale(1);
      opacity: 1;
    }
    25% {
      right: 62px;
      bottom: 196px;
      -webkit-transform: scale(1.5);
    }
    50% {
      right: 104px;
      bottom: 242px;
      -webkit-transform: scale(2);
    }
    75% {
      right: 146px;
      bottom: 288px;
      -webkit-transform: scale(2.5);
    }
    100% {
      right: 167px;
      bottom: 334px;
      /*top: 334px;
      left: 188px;*/
       /*-webkit-transform: scale(2);*/
      opacity: 1;
      -webkit-transform: scale(3);
    }
  }
</style>
