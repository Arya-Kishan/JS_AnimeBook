let h1 = document.getElementById("heading")
h1.innerHTML = `${localStorage.getItem("userInput")}`

const getSearchResult = async () => {
    let res = await fetch(`https://api.jikan.moe/v4/anime?q=${localStorage.getItem("userInput")}`);
    res = await res.json();
    console.log(res);

    let div = document.createElement("div");
    div.className = "card_carousel";

    res.data.forEach(element => {
        div.innerHTML += `<div class="card">
        <img src="${element.images.webp.image_url}" alt="">
        <p>${element.title.split(" ").slice(0, 2).join(" ")}</p>
    </div>`
    });

    document.body.append(div);

}

getSearchResult();
