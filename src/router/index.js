import { createWebHistory, createRouter } from "vue-router";
import Login from '../components/Login.vue';
import Registration from '../components/Registration.vue';
import Verification from '../components/Verification.vue';
import Success from '../components/Success.vue';

const routes = [ 
    {
        path : '/login',
        name : 'Login',
        component : Login
    },
    {
        path : '/register',
        name : 'Registration',
        component : Registration
    },
    {
        path : '/verify',
        name : 'Verification',
        component : Verification
    },
    {
        path : '/success',
        name : 'Success',
        component : Success
    }
]
 
const router = createRouter({
    history: createWebHistory(),
    routes,
  });
  
  export default router;