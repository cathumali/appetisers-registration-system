<template>
  <div  class="container success">
    <div class="row">
      <h1 class="section-heading mb-4">
        Login successful!
      </h1>
      <!-- <span>
        <i class="fas fa-check"></i>
      </span> -->
      <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z">
        </path>
      </svg>    
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
  .success h1 {
    font-weight: 800;
    text-transform: uppercase;
  }
  .success span i {
    font-size: 4em;
    color: #1de9b6;
  }
  svg {
    color: #03a00a;
    width: 7em; 
  }
  .container {
    padding-top: 2em;
  }
</style>
