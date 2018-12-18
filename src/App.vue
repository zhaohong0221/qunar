<template>
  <div id="app">
    <router-view/>
      <foot></foot>
  </div>
</template>

<script>
  import home from './pages/home/home'
  import detail from './pages/detail/detail'
  import foot from './pages/home/components/foot'
  export default {
    name: 'App',
    components:{//,detail
      home,foot
    }
  }
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
*{margin: 0;padding: 0;}
.fl{float: left;}
.fr{float: right;}
.cf:after{
  content:"";
  display: block;
  clear: both;
  height: 0;
}
body{background-color: #f5f5f5;}
a{text-decoration: none;color: #212121;}
html{font-size: 100px;}
</style>
