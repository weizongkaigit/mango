<template>
    <div class="banner-box">
        <div :class="show === 'home' ? 'bg' : ''" class="bg1"></div>
        <div :class="show === 'product' ? 'bg' : ''" class="bg2"></div>
        <div :class="show === 'case' ? 'bg' : ''" class="bg3"></div>
        <div :class="show === 'serve' ? 'bg' : ''" class="bg4"></div>
        <!-- <div :class="show === 'about' ? 'bg' : ''" class="bg5"></div> -->
    </div>
</template>

<script>
import eventVue from '@/utils/eventVue'
export default {
    name: 'Banner',
    data () {
        return {
            show: 'home'
        }
    },
    created: function () {
       this.bbtn()
       console.log(this)
    },
    methods: {
       bbtn: function () {
            eventVue.$on('myFun', (message) => {
                 this.show = message
            })
       }
    }
}
</script>

<style scoped>
.banner-box{
    position: relative;
}
.bg{
    opacity: 1 !important;
}
.bg1{
    background: url(./../assets/bg1.jpg) no-repeat;
    width: 100%;
    height: 100vh;
    background-size: 100%;
    position:absolute;
    top: 0;
    left: 0;
    opacity: 0;
}
.bg2{
    background: url(./../assets/bg2.jpg) no-repeat;
    width: 100%;
    height: 100vh;
    background-size: 100%;
    position:absolute;
    top: 0;
    left: 0;
    opacity: 0;
}
.bg3{
    background: url(./../assets/bg3.jpg) no-repeat;
    width: 100%;
    height: 100vh;
    background-size: 100%;
    position:absolute;
    top: 0;
    left: 0;
    opacity: 0;
}
.bg4{
    background: url(./../assets/bg4.jpg) no-repeat;
    width: 100%;
    height: 100vh;
    background-size: 100%;
    position:absolute;
    top: 0;
    left: 0;
    opacity: 0;
}
.bg5{
    background: url(./../assets/bg5.jpg) no-repeat;
    width: 100%;
    height: 100vh;
    background-size: 100%;
    position:absolute;
    top: 0;
    left: 0;
    opacity: 0;
}
</style>
