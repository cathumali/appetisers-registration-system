<template>
  <div class="hello"> 
    <!-- <ul> 
      <li>
        <router-link to="/login" > Login </router-link>
      </li>
      <li>
        <router-link to="/register" > Register </router-link>  
      </li> 
    </ul>  -->

    
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
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
