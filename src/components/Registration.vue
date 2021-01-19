<template>
  <div  class="container">
    <form>
      <div class="text-center mb-4">
        <!-- <img alt="Appetisers logo" src="../assets/logo.png" id="logo"> -->
        <h1 class="h3 mb-3 font-weight-normal">Registration</h1>
      </div>
      <div class="form-group">
        <label for="exampleInputEmail1" class="bmd-label-floating">Email address</label>
        <input type="email" class="form-control" name="email" id="exampleInputEmail1"  @change="handleChange" required >
        <span class="bmd-help">We'll never share your email with anyone else.</span>
      </div>
      <div class="form-group">
        <label for="full_name" class="bmd-label-floating">Full Name</label>
        <input type="text" class="form-control" id="full_name" alue="" name="full_name" v-model="full_name" @change="handleChange" required >
      </div>
      <div class="form-group">
        <label for="password" class="bmd-label-floating">Password</label>
        <input type="password" class="form-control" id="password" name="password" v-model="password"  @change="handleChange" required >
      </div> 
      <div class="form-group">
        <label for="password_confirmation" class="bmd-label-floating">Confirm Password</label>
        <input type="password" class="form-control" id="password_confirmation" name="password_confirmation" v-model="password"  @change="handleChange" required >  
      </div>  
      <!-- <button class="btn btn-default">Cancel</button> -->
      <button type="submit" class="btn btn-primary btn-raised" @click="handleSubmit" >Submit</button>
    </form>
    <router-view></router-view>
  </div>  
</template>

<script> 
  import axios from 'axios';
  import router from '../router'

  export default {
    name: 'Registration', 
    data () {
      return {
        saving : false,
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
        const form_data = this.formData;
        axios.post('https://api.baseplate.appetiserdev.tech/api/v1/auth/register', {
          ...form_data
        })
        .then(res => {
          console.log(res)
          this.saving = false;
          if(res.status == 200) {
            router.push('/verify')
          }
        }).catch(err => console.log(err));
      }    
    },
    setup(props) {
      console.log(props)    
      return {} // anything returned here will be available for the rest of the component
    }
  }
</script>
 
<style> 
</style>

