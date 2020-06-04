<template >
    <div id="single-mail" align="left">
      <b-button  variant="primary" v-on:click="toGo()">
          GoBack
      </b-button>
        <h5 style="text-color:'grey';"><b>From:</b> {{this.msg.from}}</h5>
        <h5><b>Subject:</b>  {{this.msg.subject}}</h5>
        <h5><b>Message:</b> </h5>
        <article>{{this.msg.msgBody}}</article>
        </div>
</template>

<script>
export default {
    data () {
        return {
            id: this.$store.state.toShow,
            msg: {}
        }
    },
    created() {
      if(this.id[0]=="s"){
        this.$store.state.sentMsg.forEach((item, i) => {
          if(item.uniqKey===this.id){
            this.msg = item;
          }
        });
      }else if (this.id[0]=="d") {
        this.$store.state.drafts.forEach((item, i) => {
          if(item.uniqKey===this.id){
            this.msg = item;
          }
        });
      }else{
        this.$store.state.messages.forEach((item, i) => {
          if(item.uniqKey===this.id){
            this.msg = item;
          }
        });
      }
    },
    methods: {
      toGo() {
        this.$store.state.go=true;
      }
    }

}
</script>

<style>
#single-blog{
    max-width: 960px;
    margin: 0 auto;
}
</style>
