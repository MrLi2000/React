// 接收两个参数，初始状态，action

const initState = {
  count:0
}
exports.reducer =(state=initState,action)=>{
  switch (action.type) {
    case "commentCount":
      return {count:state.count+1}
    default:
      return state
  }
}