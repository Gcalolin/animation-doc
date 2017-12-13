<template>
    <div class="menu-wrapper">
      <!-- 遮罩层 -->
      <div class="mask" ref="mask" v-show="isShowContent" @click.stop="hideMenu"></div>
      <div class="maoboli" ref="maoboli" v-show="isShowContent"></div>
      <!-- 小圆点 -->
      <div class="doc" ref="doc" @click.stop="showMenu">
        <div class="menu-ctrl-img" ref="menuBg">
        </div>
        <div class="menu-content-wrapper" v-if="isShowContent">
          <div class="menu-content">
              <div class="menu-item" @click.stop="preference">
                <i class="icon icon-home"></i>
                <span>首页</span>
              </div>
               <div class="menu-item" @click.stop="goods">
                <i class="icon icon-goods"></i>
                <span>所有商品</span>
              </div>
              <div class="menu-item" @click.stop="lottery">
                <i class="icon icon-lottery"></i>
                <span>最新揭晓</span>
              </div>
              <div class="menu-item" @click.stop="cart">
                <i class="icon icon-cart"></i>
                <span>购物车</span>
              </div>
              <div class="menu-item" @click.stop="goods">
                <i class="icon icon-logo"></i>
              </div>
              <div class="menu-item" @click.stop="memberCenter">
                <i class="icon icon-member"></i>
                <span>个人中心</span>
              </div>
              <div class="menu-item" @click.stop="focusWechat">
                <i class="icon icon-focus-wechat"></i>
                <span>关注微信</span>
              </div>
              <div class="menu-item" @click.stop="downloadAPP">
                <i class="icon icon-download"></i>
                <span>下载APP</span>
              </div>
              <div class="menu-item" @click.stop="contactService">
                <i class="icon icon-service"></i>
                <span>联系客服</span>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>
<script>
export default {
  data () {
    return {
      /*是否显示菜单的内容*/
      isShowContent: false,
    }
  },
  methods: {
    showMenu(event) {
      /*清除原来的样式*/
      this.$refs.doc.classList.remove('enter-doc')
      this.$refs.doc.classList.remove('fade-doc')
      this.$refs.menuBg.classList.remove('enter-menuBg')
      this.$refs.menuBg.classList.remove('fade-menuBg')
      // this.$refs.maoboli.classList.remove('enter-maoboli')
      // this.$refs.menuBg.classList.remove('fade-maoboli')
      /*添加动画*/
      this.$refs.doc.classList.add('enter-doc')
      this.$refs.menuBg.classList.add('enter-menuBg')
      // this.$refs.maoboli.classList.add('enter-maoboli')
      setTimeout(() => {
        this.isShowContent = true
        /*禁止页面滑动*/
        this.$refs.mask.addEventListener('touchmove', function(e) {
            e.preventDefault();
          }, false);
      },250)
    },
    hideMenu() {
      /*清除原来的样式*/
      this.$refs.doc.classList.remove('enter-doc')
      this.$refs.doc.classList.remove('fade-doc')
      this.$refs.menuBg.classList.remove('enter-menuBg')
      this.$refs.menuBg.classList.remove('fade-menuBg')
      //  this.$refs.maoboli.classList.remove('enter-maoboli')
      // this.$refs.maoboli.classList.remove('fade-maoboli')
      /*添加动画*/
      this.$refs.doc.classList.add('fade-doc')
      this.$refs.menuBg.classList.add('fade-menuBg')
      // this.$refs.maoboli.classList.add('fade-maoboli')

      this.isShowContent = false
    },
    /*点击菜单项隐藏doc*/
    handleMenu() {
      this.$refs.doc.classList.remove('enter-doc')
      this.$refs.doc.classList.remove('fade-doc')
      this.$refs.menuBg.classList.remove('enter-menuBg')
      this.$refs.menuBg.classList.remove('fade-menuBg')
      this.isShowContent = false
    },
      contactService() {
        this.handleMenu()
        console.log('联系客服')
      },
      focusWechat() {
        this.handleMenu()
        console.log('关注微信')
      },
      memberCenter() {
        this.handleMenu()
       
      },
      cart() {
        this.handleMenu()
        this.$router.push({
          name: 'CartIndex'
        })
      },
      lottery() {
        this.handleMenu()
        this.$router.push({
          name: 'LotteryIndex'
        })
      },
      preference() {
        this.handleMenu()
       
      },
      goods() {
        this.handleMenu()
      },
      downloadAPP() {
        this.handleMenu()
        console.log('downloadAPP')
      }
  },
  computed: {
  },
  components: {
  }
}
</script>

<style lang="scss" scoped>
  .menu-wrapper {
    position: relative;
  }
  /*遮罩层*/
  .mask {
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background: transparent;
    z-index: 500;
  }
  /*菜单按钮*/
  .doc {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: rgba(255,85,101,0.95);
    position: fixed;
    right: 18px;
    bottom: 150px;
    opacity: 1;
    z-index: 998;
    box-shadow: 0 2px 4px rgba(255,85,101,0.65);
    margin: 0 auto;
    .menu-ctrl-img {
      background: url('../assets/images/button@2x.png');
      width: 33px;
      height: 37px;
      background-size: cover;
      font-size: 18px;
      color: #fff;
      line-height: 42px;
      text-align: center;
      position: absolute;
      right: 9px;
      top: 5px;
      font-family: 'PingFangSC-Regular';
    }
  }
  /*整个大菜单的动画*/
  @keyframes open {
    0% {
      border-radius: 50%;
      background: rgba(255,85,101,0.95);
    }
    100% {
      right: 50px;
      bottom: 190px;
      opacity: 1;
      width: 275px;
      height: 275px;
      border-radius: 15px;
      box-shadow: 0 2px 6px rgba(0, 0, 0, 0.4);
      background: rgba(0,0,0,0.65);
    }
  }
  @keyframes close {
    0% {
      right: 40px;
      bottom: 190px;
      opacity: 1;
      width: 280px;
      height: 280px;
      border-radius: 15px;
      box-shadow: 0 2px 6px rgba(0, 0, 0, 0.4);
      background: rgba(0,0,0,0.65);
    }
    100% {
      border-radius: 50%;
      background: rgba(255,85,101,0.95);
    }
  }
  /*红色圆点的动画*/
  @keyframes openMenuBg {
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
  @keyframes closeMenuBg {
    0% {
      opacity: 0;
    }
    100% {
        opacity: 1;
    }
  }
  /*毛玻璃的动画*/
  @keyframes openMaoboli {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  @keyframes closeMaoboli {
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
  /*毛玻璃 蒙版效果*/
  .maoboli {
    right: 50px;
    bottom: 190px;
    opacity: 1;
    width: 275px;
    height: 275px;
    border-radius: 15px;
    box-shadow: 0 2px 7px rgba(0, 0, 0, 0.6);
    background: rgba(0,0,0,0.5);
    position: fixed;
    filter: blur(2px);
  }
  .enter-doc {
    -webkit-animation: open 0.20s 0s linear forwards;
  }
  .fade-doc {
    -webkit-animation: close 0.20s 0s linear forwards;
  }
  .enter-menuBg {
    -webkit-animation: openMenuBg 0.1s 0s linear forwards;
  }
  .fade-menuBg {
    -webkit-animation: closeMenuBg 0.6s 0s linear forwards;
  }
  .enter-maoboli {
    -webkit-animation: openMenuBg 0.1s 0.25s linear forwards;
  }
  .fade-maoboli {
    -webkit-animation: openMaoboli 0.1s 0s linear forwards;
  }
  .menu-content {
    display: flex;
    flex-wrap: wrap;
    margin: 10px;
  }
  .menu-item {
    display: flex;
    width: 85px;
    height: 85px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 13px;
    color: #fff;
  }
  .icon {
    width: 30px;
    height: 30px;
    margin-bottom: 13px;
  }
  .icon-goods { 
    background: url('../assets/images/button_product@2x.png');
    background-size: contain;
  }
  .icon-home { 
    background: url('../assets/images/button_home@2x.png');
    background-size: contain;
  }
  .icon-lottery { 
    background: url('../assets/images/button_announced@2x.png');
    background-size: contain;
  }
  .icon-cart { 
    background: url('../assets/images/button_cart@2x.png');
    background-size: contain;
  }
  .icon-logo { 
    background: url('../assets/images/button_logo@2x.png');
    background-size: contain;
    width: 33px;
    height: 50px;
  }
  .icon-member { 
    background: url('../assets/images/button_member@2x.png');
    background-size: contain;
  }
  .icon-focus-wechat { 
    background: url('../assets/images/button_wechat@2x.png');
    background-size: contain;
    width: 34px;
  }
  .icon-download { 
    background: url('../assets/images/button_download@2x.png');
    background-size: contain;
  }
  .icon-service { 
    background: url('../assets/images/button_contact@2x.png');
    background-size: contain;
  }
</style>
