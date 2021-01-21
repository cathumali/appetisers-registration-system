<template>
  <div  class="container">    
     <div class="row">
      <div class="text-center mb-4 page-title">
        <h4 class="h3 mb-3 font-weight-normal">Registration</h4>
      </div>
      <span class="helper-text" data-error="wrong" data-success="right">{{ errorMessage }}</span>
      <form class="col s12">
        <div class="row">
          <div class="input-field col s12">
            <i class="material-icons prefix">person</i>
            <input id="icon_prefix" type="text" class="validate"  v-model="formData.full_name"  required @keyup="handleChange">
            <label for="icon_prefix">Full Name</label>
          </div>
          <div class="input-field col s12">
            <i class="material-icons prefix">email</i>
            <input id="icon_prefix" type="email" class="validate"  v-model="formData.email"  required @keyup="handleChange">
            <label for="icon_prefix">Email Address</label>
          </div>
          <div class="input-field col s12">
            <i class="material-icons prefix">lock</i>
            <input id="lock" type="password" class="validate" v-model="formData.password"  required @keyup="handleChange">
            <label for="lock">Password</label>
          </div>
          <div class="input-field col s12">
            <i class="material-icons prefix">lock</i>
            <input id="lock" type="password" class="validate" v-model="formData.password_confirmation"  required @keyup="handleChange">
            <label for="lock">Confirm Password</label>
          </div>
          <button class="btn btn-lg btn-primary" :class="{ disabled: saving }" type="submit" @click="handleSubmit" > 
            <div class="preloader-wrapper small active" style="width: 14px;height: 14px;" v-if="saving">
              <div class="spinner-layer spinner-green-only">
                <div class="circle-clipper left">
                  <div class="circle"></div>
                </div><div class="gap-patch">
                  <div class="circle"></div>
                </div><div class="circle-clipper right">
                  <div class="circle"></div>
                </div>
              </div>
            </div>
            Register 
          </button>  
        </div>
      </form>
    </div>
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
        errorMessage: '',
        formData : {
          email : '',
          full_name : '',
          password : '',
          password_confirmation : '',
        } 
      }
    },
    methods: {
      handleChange(){ 
        this.errorMessage = '';
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
            const access_token = res?.data?.data?.access_token
            const token_type = res?.data?.data?.token_type
            localStorage.setItem('APP_TOKEN', access_token);
            localStorage.setItem('APP_TOKEN_TYPE', token_type);
            router.push('/verify')
          }else {
            this.errorMessage = 'error';
          }
        }).catch(err => {
          console.log(err)
          this.saving = false;
          this.errorMessage = err?.message;
        });
      }    
    },
    setup(props) {
      console.log(props)    
      return {} // anything returned here will be available for the rest of the component
    }
  }
</script>
 
<style> 
 .page-title h4 {
    font-weight: 700;
    margin-top: 1.4em;
  }
  .container {
    padding-top: 2em;
  }
</style>

