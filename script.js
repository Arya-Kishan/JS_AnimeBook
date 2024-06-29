
async function getTrending() {
    let res = await fetch("https://api.jikan.moe/v4/top/anime")
    res = await res.json();
    console.log(res.data);
    showTrending(res.data)
}

function showTrending(trendingArr) {

    const trendingContainer = document.querySelector(".trendingContainer")

    trendingArr.forEach((e) => {
        trendingContainer.innerHTML += `<div class="card1">
        <img onclick="handleCard(${e.mal_id})" loading="lazy" src=${e.images.webp.image_url} alt="" srcset="">
                <b>${e.title.split(" ").slice(0, 2).join(" ")}</b>
                <span>${e.source}</span>
                </div>`
    })

}

getTrending()


//SHOW  UPCOMING
async function getUpcoming() {
    let res = await fetch("https://api.jikan.moe/v4/top/anime?filter=upcoming")
    res = await res.json();
    console.log(res.data);
    showUpcoming(res.data)
}


function showUpcoming(upcomingArr) {

    const upcomingContainer = document.querySelector(".upcomingContainer")

    upcomingArr.forEach((e) => {
        upcomingContainer.innerHTML += `<div class="card1">
        <img onclick="handleCard(${e.mal_id})" loading="lazy" src=${e.images.webp.image_url} alt="" srcset="">
        <b>${e.title.split(" ").slice(0, 2).join(" ")}</b>
                <span>${e.source}</span>
                </div>`
    })

}


getUpcoming();


const handleCard = (animeId) => {
    localStorage.setItem("animeId", animeId);
    window.location.href = "detail.html"
}

// search anime
let input = document.querySelector("#input")
let btn = document.querySelector("#btn")

btn.addEventListener("click", (e) => {
    localStorage.setItem("userInput", input.value);
    window.location.href = "search.html"
})
