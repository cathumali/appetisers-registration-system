<template>
  <div  class="container success">
    <div class="row">
      <h2 class="section-heading mb-4">
        Login successful!
      </h2>
      <span>
        <i class="fas fa-check"></i>
      </span>
    </div>
    <router-view></router-view>
  </div>
</template>
 
<script> 
  export default {
    name: 'Success', 
  }
</script>
 

<style> 
  .success .row {
    text-align: center; 
    position: absolute;
    top: 40%;
    left: 50%;
    transform: translate(-50%,-50%);
  }
  .success h2 {
    font-weight: 800;
    text-transform: uppercase;
  }
  .success span i {
    font-size: 4em;
    color: #1de9b6;
  }

</style>
