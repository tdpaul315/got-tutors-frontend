export default (state = [], action) => {
  switch(action.type){
      case "LIST_TUTORS":
          return [...action.payload]
      case "ADD_TUTOR":
          return [...state, action.payload]
      case "REMOVE_TUTOR":
          let newTutors = state.filter(tutor => tutor.id !== action.payload)
          return [...newTutors]
      default:
          return state
  }
}








//   case "LIST_SESSIONS":
    //       return [...action.payload]