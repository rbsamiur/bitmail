<template>
  <div >
    <b-card  bg-variant="dark"  text-variant="white" align="left">
     <b-form>
        <b-form-group
          id="input-group-1"
          label="To:"
          label-for="input-1"
          description="Input a valid email address."
         >
          <b-form-input
            id="input-1"
            v-model="form.to"
            type="email"
            required
            placeholder="Enter email"
          ></b-form-input>
        </b-form-group>
        <b-form-group id="input-group-3" label="Subject:" label-for="input-3">
          <b-form-input
            id="input-3"
            v-model="form.subject"
            required
            placeholder="Enter Subject"
          ></b-form-input>
        </b-form-group>
        <b-form-group id="input-group-7" label="Mail:" label-for="input-7">
          <textarea
            id="input-7"
            v-model.lazy="form.msgBody"
            rows="7"
            cols="57"
            align="center"
            placeholder="Enter your messages"
          ></textarea>
        </b-form-group>
     </b-form>
       <b-button-group >
       <b-button variant="success" v-on:click="send">Send</b-button>
       <b-button v-on:click="saveDraft">Save to Draft</b-button>
       <b-button variant="danger" v-on:click="cancel">Cancel</b-button>
     </b-button-group>
     </b-card>
  </div>
</template>
<script>
export default {
  data(){
    return{
      define:"",
      form: {from:this.$store.state.currentUser.email ,to:"",subject:"",msgBody:"", uniqKey:this.define+Math.floor(Math.random() * 10)}
    }
  },
  methods: {
    send() {
      this.define="s";
      this.$store.state.sentMsg.push(this.form);
      this.$store.state.showModal=false;
    },
    saveDraft() {
      this.define="d";
      this.$store.state.drafts.push(this.form);
      this.$store.state.showModal=false;
    },
    cancel() {
      this.from=null;
      this.$store.state.showModal=false;
    }
  }
}
</script>
