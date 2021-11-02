let allData = []

fetch("https://deezerdevs-deezer.p.rapidapi.com/search?q=eminem", {
  method: "GET",
  headers: {
    "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
    "x-rapidapi-key": "06dda7d938mshfd70129f1b750f5p1255bbjsne3472591fd36",
  },
})
  .then((response) => response.json())
  .then((data) => {
    data.data.map((i) => {
      allData.push(i)
      let node = document.createElement("div")
      node.classList.add("music-card", "mx-2")
      node.innerHTML = `
        <div class="media d-flex">
          <img
            src="${i.album.cover}"
            class="mr-3 img-fluid img1"
            alt="..."
          />
          <div class="media-body bodyHover d-flex align-self-center">
            <h6 class="mt-0">${i.album.title}</h6>
            <h6 class="card-title ml-3"><i class="bi bi-play-circle-fill playHover"></i></h6>
          </div>
        </div>
      `
      document.getElementById("cards1").appendChild(node)
    })
  })
  .catch((error) => {
    alert(error)
  })

fetch("https://deezerdevs-deezer.p.rapidapi.com/search?q=metallica", {
  method: "GET",
  headers: {
    "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
    "x-rapidapi-key": "06dda7d938mshfd70129f1b750f5p1255bbjsne3472591fd36",
  },
})
  .then((response) => response.json())
  .then((data) => {
    data.data.map((i) => {
      allData.push(i)
      let node = document.createElement("a")
      node.classList.add("col-sm-6", "col-md-3", "col-lg-2", "mb-3", "px-0")
      node.href = "../album-page/album.html"
      node.innerHTML = `
        <div class="card cardwrap mx-2 h-100 bg-dark border-dark">
          <img
            src="${i.album.cover}"
            class="p-3"
            alt="..."
            id="notRounded"
          />
          <div class="card-body d-flex justify-content-between">
            
            <p class="card-text text-white"><strong>${i.album.title}</strong> <br>
            
              <small class="text-muted">${i.album.type}</small>
            </p>
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-play-circle-fill playButton" viewBox="0 0 16 16">
              <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814l-3.5-2.5z"/>
            </svg>
          </div>
        
        </div>
      `
      document.getElementById("cards2").appendChild(node)
    })
  })
  .catch((error) => {
    alert(error)
  })

fetch("https://deezerdevs-deezer.p.rapidapi.com/search?q=behemoth", {
  method: "GET",
  headers: {
    "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
    "x-rapidapi-key": "06dda7d938mshfd70129f1b750f5p1255bbjsne3472591fd36",
  },
})
  .then((response) => response.json())
  .then((data) => {
    data.data.map((i) => {
      allData.push(i)
      let node = document.createElement("a")
      node.classList.add("col-sm-6", "col-md-3", "col-lg-2", "mb-3", "px-0")
      node.href = "../album-page/album.html"
      node.innerHTML = `
        <div class="card cardwrap mx-2 h-100 bg-dark border-dark">
          <img
            src="${i.album.cover}"
            class="p-3"
            alt="..."
            id="notRounded"
          />
          <div class="card-body d-flex justify-content-between">
            
            <p class="card-text text-white"><strong>${i.album.title}</strong> <br>
            
              <small class="text-muted">${i.album.type}</small>
            </p>
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-play-circle-fill playButton" viewBox="0 0 16 16">
              <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814l-3.5-2.5z"/>
            </svg>
          </div>
        
        </div>
      `
      document.getElementById("cards3").appendChild(node)
    })
  })
  .catch((error) => {
    alert(error)
  })

const logTitle = () => allData.map((i) => console.log(i.album.title))

const alertNum = () => console.log(`total: ${allData.length}`)
