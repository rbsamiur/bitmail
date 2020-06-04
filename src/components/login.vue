<template :key="renderKey">
  <div align="center" >
    <b-card style="max-width: 20rem;" bg-variant="dark"  text-variant="white" align="left">

     <b-form v-if="show">
        <b-form-group id="input-group-3" label="Name:" label-for="input-3">
          <b-form-input
            id="input-3"
            v-model="form.name"
            required
            placeholder="Enter your name"
          ></b-form-input>
        </b-form-group>

        <b-form-group id="input-group-4" label="Date of birth" label-for="input-4" required>
            <b-form-datepicker label="Select a date" v-model="form.birthDate" class="mb-2"></b-form-datepicker>
        </b-form-group>

        <b-form-group id="input-group-6" label="Gender:" label-for="input-6" required>
            <b-form-radio v-model="form.gender" name="sex" value="MALE">MALE</b-form-radio>
            <b-form-radio v-model="form.gender" name="sex" value="FEMALE">FEMALE</b-form-radio>
            <b-form-radio v-model="form.gender" name="sex" value="OTHERS">OTHERS</b-form-radio>
        </b-form-group>

        <b-form-group
          id="input-group-1"
          label="Email address:"
          label-for="input-1"
          description="Input a valid email address."
         >
          <b-form-input
            id="input-1"
            v-model="form.email"
            type="email"
            required
            placeholder="Enter email"
          ></b-form-input>
        </b-form-group>

        <b-form-group id="input-group-2" label="User Name:" label-for="input-2">
          <b-form-input
            id="input-2"
            v-model="form.username"
            required
            placeholder="Enter Username"
          ></b-form-input>
        </b-form-group>

        <b-form-group id="input-group-7" label="Password:" label-for="input-7">
          <b-form-input
            id="input-7"
            v-model="form.password"
            type="password"
            required
            placeholder="Enter Password"
            description="Input a valid email address."
          ></b-form-input>
        </b-form-group>
        <b-button type="reset" variant="danger" >Reset</b-button>
     </b-form>

     <b-form v-else>
        <b-form-group id="input-group-8" label="User Name:" label-for="input-8">
          <b-form-input
            id="input-8"
            v-model="userIn.username"
            required
            placeholder="Enter Username"
          ></b-form-input>
        </b-form-group>

        <b-form-group id="input-group-9" label="Password:" label-for="input-9">
          <b-form-input
            id="input-9"
            v-model="userIn.password"
            type="password"
            required
            placeholder="Enter Password"
            description="Input a valid email address."
          ></b-form-input>
        </b-form-group>
        <b-button type="reset" variant="danger" >Reset</b-button>
     </b-form>

     <b-button type="submit" variant="primary"  v-on:click="onLogin" >Login</b-button>
     <b-button type="submit" variant="primary"  v-on:click="onSubmit" v-if="show">Submit</b-button>
     <b-button type="submit" variant="primary"  v-on:click="onSignUp" v-else>SignUp</b-button>
   </b-card>
</div>
</template>

<script>
  export default {
    data() {
      return {
        renderKey:1,
        form: {
          email: '',
          name: '',
          username:'',
          password:'',
          birthDate:"",
          gender:"",
        },
        existingId:this.$store.state.user,
        userIn:{
          username:"",
          password:""
        },
        show: false
      }
    },
    computed:{
      userId(){
        this.$store.state.user;
      }
    },
    methods: {
      onSubmit() {
        this.$store.state.user.push(this.form);
        this.show=false;
        this.renderKey++
      },
      onLogin(){
        this.show=false;
        console.log(this.userIn);
        this.existingId.forEach((user, i) => {
          if (this.userIn.username==user.username){
           if(this.userIn.password ==user.password) {
              this.$store.commit('setAuthentication',true);
              this.$store.commit('setUser',user);
              this.$router.replace({ name: "home" });
            }else {
              console.log("wrong Password");
            }
          }else {
            console.log("wrong username");
          }
        });



      },
      onSignUp(){
        this.show=true;
      }

    }
  }
</script>
<style>

</style>
