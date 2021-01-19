<template>
  <div  class="container">
    <h1>Verification</h1>
    <form class="text-center"> 
      <div class="form-group">
        <label for="token" class="bmd-label-floating">Enter Code</label>
        <input type="text" class="form-control" id="token" alue="" name="token" v-model="token" @change="handleChange">
      </div> 
      <button type="submit" class="btn btn-primary btn-raised" @click="handleSubmit" > Submit Code</button>
    </form> {{ this.saving }}
    <router-view></router-view>
  </div>  
</template>
 
<script> 
  import axios from 'axios';
  import router from '../router';

  export default {
    name: 'Verification', 
    data () {
      return {
        saving : false,
        error : '',
        formData : {} 
      }
    },
    methods: {
      handleChange(e){ 
        this.formData = { ...this.formData,  [e.target.name] : e.target.value }
      },
      handleSubmit(e){
        e.preventDefault(); 
        this.saving = true;

        // "token": "75632",
        // "via": "email"
        const form_data = this.formData;
        axios.post('https://api.baseplate.appetiserdev.tech/api/v1/auth/verification/verify', {
          ...form_data
        })
        .then(res => {
          console.log(res)
          this.saving = false;
          if(res.status == 200) {
            router.push('/login')
          }
          else {
            this.error = 'Invalid Code';
          }
        }).catch(err => console.log(err));
      }    
    }, 
  }
</script>
 

<style> 
</style>
