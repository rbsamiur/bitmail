<template>
  <div v-if="this.$store.state.go" id="important">
    <b-form-input size="sm"  placeholder="Search" v-model="filter"></b-form-input>
    <b-table
      id="my-table"
      :items="items"
      :fields="fields"
      :per-page="perPage"
      :current-page="currentPage"
      :filter="filter"
      :filterIncludedFields="filterOn"
      :sort-by.sync="sortBy"
      :sort-desc.sync="sortDesc"
      sort-icon-left
      primary-key="uniqKey"
      small
      >
      <template v-slot:cell(from)="row">
         <b-button variant="link" v-on:click="linkToGo(row.item.uniqKey)">{{row.item.from}}</b-button>
     </template>
     <template v-slot:cell(restore)="row">
        <b-button variant="success" v-on:click="restoreMsg(row.item)" size="sm">restore</b-button>
    </template>
    </b-table>
    <b-pagination v-model="currentPage" :total-rows="rows" :per-page="perPage" aria-controls="my-table" align="center"></b-pagination>
    <p class="mt-3">Current Page: {{ currentPage }} </br> Mails per Page:{{perPage}}</p>
    <b-dropdown id="dropdown-1" text="PerPage" class="m-md-2" align="center">
       <b-dropdown-item v-on:click="perPageAmount(10)">10</b-dropdown-item>
       <b-dropdown-item v-on:click="perPageAmount(20)">20</b-dropdown-item>
       <b-dropdown-item v-on:click="perPageAmount(30)">30</b-dropdown-item>
    </b-dropdown>
  </div>
  <div v-else>
    <singleMail></singleMail>
  </div>

</template>
<script>
import mail from '../components/singleMail.vue'
export default {
  components: {
    singleMail: mail
  },
  data(){
    return {
      sortBy: 'age',
      sortDesc: false,
      perPage: 4,
      currentPage: 1,
      fields: [
        {key:'from', sortable: true},
        {key:'subject',sortable: true},
        {key:'msgBody',sortable: true},
        {key:'date',sortable: true},
        {key: 'restore', label: ' '}
      ],
      items:[],
      filter: "",
      filterOn: ["from","subject","msgBody","date"],
    }
  },

  methods: {
    perPageAmount(value){
      this.perPage=value;
    },
    linkToGo(key){
      this.$store.state.go=false;
      this.$store.state.toShow=key;
    },
    restoreMsg(key){
      elem:[]
      this.elem=this.$store.state.trash.splice(this.$store.state.trash.indexOf(key), 1);
      this.$store.state.messages.push(this.elem.pop());
    }
  },
  created() {
    //do something after creating vue instance
    this.items=this.$store.state.trash;
  },
  computed: {
     rows() {
       return this.items.length
     },
     userId(){
       this.$store.state.user;
     },
     messages(){
       this.$store.state.messages;
     }
   }
}
</script>
