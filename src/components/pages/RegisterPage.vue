<template>
     <div>
      <b-contatiner>
        <b-row class="justify-content-md-center  mt-5">
        <b-col col md="8">
          <b-card
          header="Registration Form"
          header-bg-variant="primary"
          header-text-variant="white"
          >
          <b-card-text>
            <b-form @submit.prevent="signUp" name="form">
              <b-form-group
               description=" Enter your Full Name"
               label="FullName"
              >
              <b-form-input v-model="form.name" required></b-form-input>

              </b-form-group>

              <b-form-group
               description=" Enter your Email"
               label="Email"
              >
              <b-form-input v-model="form.email" required></b-form-input>

              </b-form-group>

              <b-form-group
               description=" Enter your password"
               label="Password"
              >
              <b-form-input type="password" v-model="form.password" required></b-form-input>

              </b-form-group>
              <b-form-group>
                <b-button variant="primary" @click="signUp">SignUp</b-button>
              </b-form-group>
            </b-form>
          </b-card-text>
        </b-card>
        </b-col>
      </b-row>
      </b-contatiner>
     </div>
</template>


<script>
import { signUp } from '../services/auth'
export default {
  name:'RegisterPage',
  data(){
  return  {
    form:{
    name:'',
    email:'',
    password:'',
  }
}
},
  methods:{
     async signUp()
     {
      const data = await signUp(this.form);
      console.log(data);
      this.$router.push({ name: 'login' }); 
     }
  }

}
</script>

<style>

</style>
