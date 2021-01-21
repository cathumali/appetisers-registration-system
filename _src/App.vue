<template>
  <div> 
    <!-- <img alt="Appetisers logo" src="./assets/logo.png" id="logo"> -->
    <Home msg="Appetiser apps Registration System"/> 
  </div>
</template>


<script>
  import Home from './components/Home.vue';

  export default {
    name: 'App',
    components: {
      Home
    },
  }
</script>
 
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  /* margin-top: 60px; */
}
#logo {
  width: 100px;
};
</style>  

<style>
  @import "https://unpkg.com/bootstrap-material-design@4.1.1/dist/css/bootstrap-material-design.min.css";
</style>