export default (state=0 , action) => {
  if (action.type === "INCREMENT_COUNT") {
    return state + action.payload
  } else {
    return state
  }
}