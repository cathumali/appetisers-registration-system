<template>
  <div  class="container"> 
    <div class="row">
      <div class="text-center mb-4 page-title">
        <h4 class="h3 mb-3 font-weight-normal">Verification</h4>
      </div>
      <form class="col s12">
        <span class="helper-text" data-error="wrong" data-success="right">{{ errorMessage }}</span>
        <h6>Check your email address for a message with verification code and enter here:</h6>
        <div class="row"> 
          <div class="input-field col s12">
            <input id="last_name" type="text" class="validate" v-model="formData.token" @keyup="handleChange" required>
            <label for="last_name">Enter Code</label>
          </div>
        </div> 
        <button type="submit" class="btn btn-primary grey darken-1 btn-raised sending-btn" :class="{ disabled: sending }" @click="resendVerification" > 
          <div class="preloader-wrapper small active" style="width: 14px;height: 14px;" v-if="sending">
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
          Resend Code
        </button>
        <button type="submit" class="btn btn-primary btn-raised" :class="{ disabled: saving }" @click="handleSubmit" > 
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
          Submit Code
        </button>
      </form>
    </div>
        
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
        errorMessage : '',
        formData : {
          token: '',
          via : 'email'
        },
        sending: false,
        resendErrMsg: '',
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
        axios.post('https://api.baseplate.appetiserdev.tech/api/v1/auth/verification/verify', {
          ...form_data,
        }).then(res => {
          console.log(res)
          this.saving = false;
          if(res.status == 200) {
            router.push('/login')
          }
          else {
            this.errorMessage = 'Invalid Code';
          }
        }).catch(err =>{
          console.log(err);
          this.saving = false;
          this.errorMessage = err?.message;
        });
      },
      resendVerification(e) {
        e.preventDefault();       
        const APP_TOKEN = localStorage.getItem('APP_TOKEN');
        const APP_TOKEN_TYPE = localStorage.getItem('APP_TOKEN_TYPE');
        const authorization = `${APP_TOKEN_TYPE} ${APP_TOKEN}`
        console.log(authorization)
        axios.post('https://api.baseplate.appetiserdev.tech/api/v1/auth/verification/resend', 
          { "via": "email" },
          { headers: {
              'authorization': authorization,
              'Accept' : 'application/json',
              'Content-Type': 'application/json'
            }
        }).then(res => {
          console.log(res)
          this.sending = false;
          if(res.status == 200) {
            router.push('/login')
          }
          else {
            this.resendErrMsg = 'Invalid Code';
          }
        }).catch(err =>{
          console.log(err);
          this.sending = false;
          this.resendErrMsg = err?.message;
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
  .sending-btn {
    margin-right: 1em;
  }
  .container {
    padding-top: 2em;
  }
</style>
