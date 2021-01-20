<template>
  <div class="container"> 
    <div class="row home"> 
      <img alt="Appetisers logo" src="../assets/logo.png" id="logo">
      <h3> Welcome! </h3> 
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  props: {
    msg: String
  }
}
</script>

<style scoped>
  html {
    font-family: 'Inconsolata', monospace;
  } 
  .home {
    text-align: center;
    position: absolute;
    top: 45%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    
  }
  .home img {
    width: 200px;
  }
  .home h3 {
    margin: 0;
    font-weight: 600;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    display: inline-block;
    margin: 0 10px;
  }
  a {
    color: #42b983;
  }
</style>
