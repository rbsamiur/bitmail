<template>

  <div class="overflow-auto">
    <b-container>
      <navBar></navBar>
      <b-row>
        <b-col  v-if="!this.$store.state.showProfile">
           <b-tabs pills card vertical>
              <b-tab title="Inbox" active align="center">
                <myInbox></myInbox>
              </b-tab>

              <b-tab title="Important" align="center" v-on:click="clicked">
                <myImportant :key="renderKey"></myImportant>
              </b-tab>

              <b-tab title="Sent" align="center">
                <mySent></mySent>
              </b-tab>

              <b-tab title="Drafts" align="center">
                <myDrafts></myDrafts>
              </b-tab>

              <b-tab title="Trash" align="center">
                <myTrash ></myTrash>
              </b-tab>


            </b-tabs>
         </b-col>
         <b-col v-else>
           <myProfile></myProfile>
         </b-col>
       </b-row>

     </b-container>
  </div>

</template>
<script>

import inbox from '../components/inbox.vue'
import drafts from '../components/drafts.vue'
import trash from '../components/trash.vue'
import nav from '../components/navbar.vue'
import sent from '../components/sent.vue'
import Important from '../components/important.vue'
import Profile from '../components/profile.vue'
export default {
  components: {
    myInbox:inbox,
    myTrash:trash,
    myDrafts:drafts,
    navBar:nav,
    mySent:sent,
    myImportant:Important,
    myProfile:Profile

  },
  data(){
    return {
      renderKey:1
      }
  },
  methods: {
    clicked(){
      this.renderKey++;
      console.log("isClicked" + this.renderKey);
    }

  },
  computed: {
     rows() {
       return this.items.length;
     }
   }
}
</script>
