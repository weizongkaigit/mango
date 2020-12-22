<template>
  <div id="app">
    <Banner></Banner>
    <Main></Main>
    <router-view/>
  </div>
</template>

<script>
import Main from '@/components/Main'
import Banner from '@/components/Banner'
export default {
  name: 'App',
  components: {
    Main,
    Banner
  },
  beforeCreate () {
    let count = 0 // eslint-disable-line no-unused-vars
    let imgs = [
      require('./assets/bg1.jpg'),
      require('./assets/bg2.jpg'),
      require('./assets/bg3.jpg'),
      require('./assets/bg4.jpg'),
      require('./assets/bg5.jpg')
    ]
    for (let img of imgs) {
        let image = new Image()
        image.src = img
        image.onload = () => {
          count++
        }
    }
    console.log(this)
  }
}
</script>

<style scoped>
#app {
  display: none;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
