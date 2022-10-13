
const moduleReactive={
    state:{
      msg:{},
      cardspan:8,
      size:6,
      lunboheight:500,
      
    },
    mutations:{
      setsize(state,params){
        state.size=params.size
      },
      setcardspan(state,params){
        state.cardspan=params.cardspan
      },
      setlunboheight(state,params){
        state.lunboheight=params.lunboheight
      }
    },
    actions:{},
    getters:{}
  }
  export default moduleReactive
