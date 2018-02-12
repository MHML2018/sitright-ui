//Action to get all Scores
export function getScores(response) {
  return{
    type: 'Get_Posture',
    payload: response
  }
}
// Thunk function, it calls the getPostures action above after it receives the fetch response.
export function getScoreThunk() {
  return function(dispatch, getState) {
    fetch('https://localhost/jon-posture-json')
    .then(e => e.json())
      .then(function(response){
        console.log(response);
        var arr = response.slice(0,10);
        dispatch(getScores(arr))
      })
      .catch((error) => {
        console.error(error,"uh-oh!");
      });
  }
}
// Repo selected action
export function pageSelected(page){
  return{
    type: 'Page_Selected',
    payload: page
  }
}
