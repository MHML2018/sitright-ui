var postureScores= [];
export default function(state=postureScores, action){
  switch (action.type) {
    case "Get_Posture": { postureScores = action.payload;
      console.log(action, 'action');
      return postureScores;
    }
    break;
  }
  return postureScores;
}
