export default function(state= null, action){
  switch (action.type) {
    case "Page_Selected": return action.payload;
      break;
  }
  return state;
}
