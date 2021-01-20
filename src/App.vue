<template>    
    <app-header :title="title"></app-header> 
    <nav class="grey darken-3">
      <div class="container">   
        <div class="nav-wrapper">
          <router-link to="/" class="brand-logo"> 
            Appetiser Apps
          </router-link>
          <ul id="nav-mobile" class="right hide-on-med-and-down">
            <li><router-link to="/" > Home </router-link></li> 
            <li><router-link to="/register" > Register </router-link></li> 
            <li><router-link to="/login" > Login </router-link></li> 
          </ul>
        </div>
      </div>
    </nav>
    <router-view></router-view>
    <!-- <app-footer :author="author">@copyright</app-footer> -->
</template>
 
<script>
  export default {
    name: 'App',
    created() {
      let ckeditor = document.createElement('script');    
      ckeditor.setAttribute('src',"https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js");
      document.head.appendChild(ckeditor);
    }
  }
</script>
 
<style>
  #app {
    font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    height: 100%;
    position: fixed;
    width: 100%; 
  }
  .helper-text {
    color: #ff0000;
  };  
</style>  
 
<style>
  /* @import "https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css"; */
</style>