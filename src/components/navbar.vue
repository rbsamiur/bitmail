<template>
    <div>
      <b-container align="right">
          <b-navbar toggleable="lg" type="dark" variant="dark">
            <b-navbar-brand href="#">BitMail</b-navbar-brand>
            <b-collapse id="nav-collapse" is-nav>
              <b-navbar-nav class="ml-auto">
                <b-nav-item-dropdown right>
                  <template v-slot:button-content>
                    <b style="color:'white';">User</b>
                  </template>
                  <b-dropdown-item v-on:click="showProfile">Profile</b-dropdown-item>
                  <b-dropdown-item v-on:click="logout()">Sign Out</b-dropdown-item>
                </b-nav-item-dropdown>
              </b-navbar-nav>
            </b-collapse>
          </b-navbar>
        </br>
          <b-button  pill v-b-modal.modal-1 size="lg" @click="setModal">Compose</b-button>
          <b-modal id="modal-1" title="Compose Mail" hide-backdrop content-class="shadow" hideFooter='true' v-if="this.$store.state.showModal" >
            <myMail></myMail>
          </b-modal>


      </b-container>
    </div>
</template>

<script>
import mailComp from '../components/mailComp.vue'
export default {
  components: {
    myMail:mailComp
  },
  data(){
    return{
      toDo:""
    }

  },
  computed:{

  },
  methods: {
    showProfile(){
      this.$store.state.showProfile=true;
    },
    setModal(){
      this.$store.state.showModal=true;
    },
    logout() {
      this.$router.replace({ name: "login" });
      this.$store.commit('setAuthentication',false);
    }
  }
}
</script>

<style>



</style>
