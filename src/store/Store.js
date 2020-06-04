import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex);


export const store= new Vuex.Store({
  state:{
    user:[{
        email: 'rbsamiur@gmail.com',name: 'Samiur Rahman',username:'rbsamiur',password:'12345',birthDate:"1998-2-2",gender:"male"
    }],
    messages:[
      {from:"sami",tags:"noTags",subject:"holaAmigo",msgBody:"hi how are you!", date:"2020-5-15 4.53pm", uniqKey:"1"},
      {from:"karin",tags:"noTags",subject:"hello",msgBody:"hi how is it!", date:"2020-5-14 4.53pm",uniqKey:"2"},
      {from:"ramilai",tags:"noTags",subject:"from the ",msgBody:"hi 6h are you!", date:"2020-5-14 4.56pm",uniqKey:"3"},
      {from:"shakila",tags:"noTags",subject:"outside",msgBody:"are you!", date:"2020-5-16 7.54pm",uniqKey:"4"}
    ],
    currentUser:{},
    drafts:[],
    sentMsg:[],
    trash:[],
    savedMsg:[],
    toShow:"",
    go:true,
    showProfile:false,
    authenticated: false,
    showModal:true
  },
  mutations:{
    setAuthentication(state,status){
      state.authenticated=status;
    },
    setUser(state,user){
      state.user.forEach((item, i) => {
        if(item.username==user.username && item.password==user.password){
          state.currentUser=item;
          console.log(state.currentUser);
        }
      });

    },
    incremnt(state){
      state.count++
    }
  }
});
