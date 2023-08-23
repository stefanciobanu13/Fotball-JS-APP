
const url = "http://localhost:8083/"
let roundId;

function convertDateFormat(inputDate) {
  //convert the data format 
  const parts = inputDate.split('-');
  if (parts.length !== 3) {
    throw new Error('Invalid date format');
  }
  const year = parts[0];
  const month = parts[1];
  const day = parts[2];
  const formattedDate = `${day}.${month}.${year}`;
  return formattedDate;
}


export const doStuff = function () {
  console.log("inside the import")
}


export const postRound = function postRound() {
  // this method will trigger the saving of data in db
  const roundDate = document.getElementById("data_editie").value;
  const formatedDate = convertDateFormat(roundDate);
  const roundNumber = document.getElementById("numar_editie").value;
  const postData = {
    date: formatedDate,
    number: roundNumber,
  };
  axios.post(`${url}rounds`, postData)
    .then(response => {
      console.log('Response:', response.data);
      // get back the round
      axios.get(`${url}rounds/date/${formatedDate}`) // Use formatedDate here
        .then(response => {
          console.log('Response:', response.data);
        })
        .catch(error => {
          console.error('Error:', error);
        });
    })
    .catch(error => {
      console.error('Error:', error);
    });
};

function saveTeam(color) {


}

export const postTeam = function postTeams() {
  const green = "Verde";
  const orange = "Portocaliu";
  const blue = "Albastru";
  const gray = "Gri"
  saveTeam(green);

}


export const postTeamPlayer = function postTeamPlayer() {


}

export const postGame = function postGame() {


}

export const postGoal = function postGoal() {


}


























