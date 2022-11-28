<template>
   <div>
    <b-form name="form" @submit.prevent="login"  method="post">
      <b-form-group
        id="input-group-1"
        label="Email address:"
        label-for="input-1"
      >
        <b-form-input
          id="input-1"
          v-model="form.email"
          type="email"
          placeholder="Enter email"
          name="email"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Password:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.password"
          type="password"
          placeholder="Enter Password"
          name="password"
          required
        ></b-form-input>

      <b-button type="submit" variant="primary" @click="login">Login</b-button>
      </b-form-group>
    
  </b-form>
  </div>
</template>

<script>

import {login} from '../services/auth'
export default {
  name:'LoginPage',
  data(){
  return {
    form:{
     email:'',
     password:''
  }
};
},
methods:{
    async  login()
    {
      const data=await login(this.form);
       console.log(data);
       this.$router.push({name:'CalendarPage'});
         
    },
    }
}

</script>

<style>

</style>