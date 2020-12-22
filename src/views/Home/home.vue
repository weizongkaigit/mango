<template>
    <div class="page">
        <div class="home-module-box home-module-one">
            <div>
                <span>{{name}}</span><br>
                <span>{{describe}}</span><br>
            </div>
        </div>
        <div class="home-module-box home-module-two">
            <div>
                <span>{{name}}</span><br>
                <span>{{describe}}</span><br>
            </div>
        </div>
        <div class="home-module-box home-module-three">
            <div>
                <span>{{name}}</span><br>
                <span>{{describe}}</span><br>
            </div>
        </div>
        <div class="home-module-box home-module-four">
            <div>
                <span>{{name}}</span><br>
                <span>{{describe}}</span><br>
            </div>
        </div>
        <div class="home-module-box home-module-five">
            <div>
                <span>{{name}}</span><br>
                <span>{{describe}}</span><br>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Home',
  components: {
  },
  data () {
      return {
          home: 'home',
          name: '大熊猫“康尼”',
          describe: '一只具有野生血统的大熊猫，取名为“康尼”'
      }
  },
  created () {
      console.log(this)
  }
}
</script>
<style scoped>
.home-module-box{
    width: 100%;
    height: 100vh;
}
.home-module-box > div:first-child{
    display: inline-block;
    position: relative;
    top: 260px;
    left: -300px;
    color: #ffffff;
    text-align: left;
    font-size: 20px;
}
.home-module-box > div:first-child >span:first-child{
    font-weight: bold;
    font-size: 40px;
}
.home-module-one{
    background: url(./../../assets/pander1.jpg) no-repeat;
    background-size: 100%;
}
.home-module-two{
    background: url(./../../assets/pander2.jpg) no-repeat;
    background-size: 100%;
}
.home-module-three{
    background: url(./../../assets/pander3.jpg) no-repeat;
    background-size: 100%;
}
.home-module-four{
    background: url(./../../assets/pander4.jpg) no-repeat;
    background-size: 100%;
}
.home-module-five{
    background: url(./../../assets/pander5.jpg) no-repeat;
    background-size: 100%;
}

</style>
