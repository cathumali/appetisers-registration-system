<template> 
  <div  class="container"> 
    <div class="row">
      <div class="text-center mb-4 page-title">
        <h4 class="h3 mb-3 font-weight-normal">Login</h4>
      </div>
      <span class="helper-text" data-error="wrong" data-success="right">{{ errorMessage }}</span>
      <form class="col s12">
        <div class="row">
          <div class="input-field col s12">
            <i class="material-icons prefix">email</i>
            <input id="icon_prefix" type="email" class="validate"  v-model="formData.username"  required @keyup="handleChange">
            <label for="icon_prefix">Email Address</label>
          </div>
          <div class="input-field col s12">
            <i class="material-icons prefix">lock</i>
            <input id="lock" type="password" class="validate"  v-model="formData.password"  required @keyup="handleChange">
            <label for="lock">Password</label>
          </div>
          <button class="btn btn-lg btn-primary" :class="{ disabled: saving }" type="submit"  @click="handleSubmit" > 
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
            <span> Sign in </span>
          </button>  
        </div>
      </form>
    </div>
    <router-view></router-view>
  </div>
</template>

<script> 
  import axios from 'axios';
  import router from '@/router'

  export default {
    name: 'Login', 
    data () {
      return {
        saving : false,
        formData : {
          username : '',
          password : ''
        },
        errorMessage: '', 
      }
    },
    methods: {
      handleChange(){ 
        this.errorMessage = '';
        console.log(this.formData)
      },
      handleSubmit(e){
        e.preventDefault(); 
        this.saving = true;
        const form_data = this.formData;
        axios.post('https://api.baseplate.appetiserdev.tech/api/v1/auth/login', {
          ...form_data
        })
        .then(res => {
          console.log(res)
          this.saving = false;
          if(res.status == 200) {
            router.push('/success')
          }else {
            this.errorMessage = 'Error';
          }
        }).catch(err => {
          console.log(err);
          this.saving = false;
          this.errorMessage = err?.message;
        });
      }    
    },
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