<template>
  <div>
    <!-- 遮罩层 -->
    <div class="mask" v-if="isShowContent" @click="hideMenu"></div>
    <div class="menu-container" ref="menu" @click="showMenu($event)">
      <div class="doc" ref="doc" id="doc">
        <div class="menu-content" v-show="isShowContent">
          <div class="menu-item">
            <i class="preference"></i>
            特惠商城
          </div>
          <div class="menu-item">
            <i class="preference"></i>
            特惠商城
          </div>
          <div class="menu-item">
            <i class="preference"></i>
            特惠商城
          </div>
          <div class="menu-item">
            <i class="preference"></i>
            特惠商城
          </div>
          <div class="menu-item">
            <i class="preference"></i>
            特惠商城
          </div>
      </div>
      </div>
      <div class="menu-ctrl" ref="menuCtrl">
        <div class="menu-ctrl-bg">2</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      isShowContent: false
    }
  },
  methods: {
    showMenu(event) {
      /*清除原来的样式*/
      this.$refs.menuCtrl.classList.remove('fade-menuCtrl')
      this.$refs.menuCtrl.classList.remove('enter-menuCtrl')
      this.$refs.doc.classList.remove('enter-doc')
      this.$refs.doc.classList.remove('fade-doc')

      this.$refs.menuCtrl.classList.add('enter-menuCtrl')
      this.$refs.doc.classList.add('enter-doc')

      setTimeout(() => {
        this.isShowContent = true
      },300)
    },
    hideMenu() {
      /*清除原来的样式*/
      this.$refs.menuCtrl.classList.remove('fade-menuCtrl')
      this.$refs.menuCtrl.classList.remove('enter-menuCtrl')
      this.$refs.doc.classList.remove('enter-doc')
      this.$refs.doc.classList.remove('fade-doc')

      this.$refs.doc.classList.add('fade-doc')
      this.$refs.menuCtrl.classList.add('fade-menuCtrl')

      setTimeout(() => {
        this.isShowContent = false
      },100)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style style="scss" scoped>
  .mask {
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background: transparent;
  }
  .menu-content {
    display: flex;
    flex-wrap: wrap;
  }
  .menu-item {
    display: flex;
    flex: 0 1 25%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 13px;
    margin-top: 10px;
    color: #fff;
  }
  .menu-ctrl-bg {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    position: fixed;
    right: 20px;
    bottom: 150px;
    /*box-shadow: 0 2px 6px rgba(246, 56, 73, .65);*/
    /*background: url('../image/button@2x.png');*/
    background: rgba(0,0,0,0.6);
    background-size: cover;
    font-size: 18px;
    color: #fff;
    line-height: 53px;
    text-align: center;
    /*z-index: 999;*/
    }
  .doc {
    width: 35px;
    height: 35px;
    background: rgba(0,0,0,0.6);
    position: fixed;
    right: 27px;
    bottom: 156px;
    border-radius: 5px;
    opacity: 0;
  }
  .enter-doc {
    -webkit-animation: open 0.3s 0s linear forwards;
  }
  .fade-doc {
    -webkit-animation: close 0.3s 0s linear forwards;
  }
  .enter-menuCtrl {
    -webkit-animation: enter-menuCtrl 0.1s 0s linear forwards;
  }
  .fade-menuCtrl {
    -webkit-animation: fade-menuCtrl  0.3s linear forwards;
  }
  @keyframes open {
    0% {
      opacity: 0;
    }
    100% {
      right: 40px;
      bottom: 190px;
      opacity: 1;
      width: 280px;
      height: 280px;
    }
  }
  @keyframes close {
    0% {
      right: 40px;
      bottom: 190px;
      opacity: 1;
      width: 280px;
      height: 280px;
    }
    100% {
      right: 27px;
      bottom: 156px;
      opacity: 0;
      -webkit-transform: scale(1);
    }
  }
  @keyframes enter-menuCtrl {
    0% {
      right: 20px;
      bottom: 150px;
      opacity: 1;
    }
    100% {
      right: 40px;
      bottom: 170px;
      opacity: 0;
    }
  }
  @keyframes fade-menuCtrl {
    0% {
      right: 40px;
      bottom: 170px;
      opacity: 0;
    }
    100% {
      right: 20px;
      bottom: 150px;
      opacity: 1;
    }
  }
  .preference {
    background: url('../image/home_click@2x.png');
    background-size: 100% 100%;
    width: 21px;
    height: 21px;
    margin: 3px 0;
  }
</style>
