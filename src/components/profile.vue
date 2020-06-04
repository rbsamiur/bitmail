<template>
  <div align="center">

      <b-card no-body class="overflow-hidden" style="max-width: 540px;" align="left">
        <b-row no-gutters>
          <b-col md="6">
            <b-card-img thumbnail src="https://picsum.photos/400/400/?image=20" alt="Image" class="rounded-0"></b-card-img>
          </b-col>
          <b-col md="6">
            <b-card-body :title="this.user.name">
              <b-card-title><b>Email: </b>{{this.user.email}}</b-card-title>
              <b-card-title><b>Gender: </b>{{this.user.gender}}</b-card-title>
              <b-card-title><b>Birth-Date: </b>{{this.user.birthDate}}</b-card-title>
              <b-card-title><b>UserName: </b>{{this.user.username}}</b-card-title>

            </b-card-body>
          </b-col>
        </b-row>
       </b-card>
       <b-embed
          type="iframe"
          width="560"
          height="315"
          src="https://www.youtube.com/embed/EqPtz5qN7HM"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen>
        ></b-embed>
       <b-button block variant="primary" @click="goBack()">Go Back</b-button>
  </div>

</template>
<script>
export default {
  data(){
    return {
      user:this.$store.state.currentUser
      }
  },
  methods: {
    goBack() {
      this.$store.state.showProfile=false;
    }
  },
  created() {

  }
}
</script>
