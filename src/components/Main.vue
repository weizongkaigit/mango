<template>
    <div class="page">
        <div class="moduleL"><img src="../assets/logo.png" width="120" height="80" alt=""></div>
        <div class="moduleC">
            <router-link class="link-a" to="/home" @click.native="showName('home')">首页</router-link>
            <router-link class="link-a" to="/product" @click.native="showName('product')">产品</router-link>
            <router-link class="link-a" to="/case" @click.native="showName('case')">案例</router-link>
            <router-link class="link-a" to="/serve" @click.native="showName('serve')">服务</router-link>
            <router-link class="link-a" to="/about" @click.native="showName('about')">关于我们</router-link>
        </div>
        <div class="moduleR">
            <span class="moduleR-j">简</span>
        </div>
    </div>
</template>

<script>
import eventVue from '@/utils/eventVue'
export default {
    name: 'Banner',
    methods: {
        showName (e) {
            eventVue.$emit('myFun', e)
            console.log(e)
        }
    }
}
</script>

<style scoped>
.page{
    width: 100%;
    position: fixed;
    top: 0px;
    background: #0c0c0c3b;
    text-decoration: none;
    box-sizing: border-box;
}
.moduleL{
    width: 9%;
    display: inline-block;
    font-size: 0;
    vertical-align: top;
}
.moduleC{
    width: 80%;
    display: inline-block;
    font-size: 0;
    height: 80px;
    vertical-align: top;
    line-height: 80px;
    text-align: center;
}
.moduleR{
    width: 10%;
    display: inline-block;
    font-size: 0;
    vertical-align: top;
    height: 80px;
    line-height: 80px;
    text-align: center;
}
.moduleR-j{
    color: #ffffff;
    background: #bd1622;
    border-radius: 50%;
    font-size: 20px;
    padding: 4px 8px;
}
.link-a{
    text-decoration: none;
    color: #ffffff;
    padding:0 20px;
    font-size: 16px;
}
.router-link-active{
    color: #bd1622;
}

</style>>
