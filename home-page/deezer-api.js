fetch("https://striveschool-api.herokuapp.com/api/deezer/search?q=eminem", {
  method: "GET",
  headers: {
    "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
    "x-rapidapi-key": "1dc2b6577fmsh83ee9ef80d11f76p1b1372jsn8f86a71a34ed",
  },
})
  .then((response) => {
    response.json();
  })
  .then((data) => console.log(data))
  .catch((err) => {
    console.error(err);
  });
