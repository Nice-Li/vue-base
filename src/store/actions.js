export default {
  delayAdd({commit}){
    setTimeout(()=>{
      commit('add')
    }, 1000)
  },
  delayDec({commit}){
    setTimeout(()=>{
      commit('dec')
    }, 1000)
  }
}