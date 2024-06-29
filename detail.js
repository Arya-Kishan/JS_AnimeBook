let data = {
    "mal_id": 52807,
    "url": "https://myanimelist.net/anime/52807/One_Punch_Man_3",
    "images": {
        "jpg": {
            "image_url": "https://cdn.myanimelist.net/images/anime/1885/127108.jpg",
            "small_image_url": "https://cdn.myanimelist.net/images/anime/1885/127108t.jpg",
            "large_image_url": "https://cdn.myanimelist.net/images/anime/1885/127108l.jpg"
        },
        "webp": {
            "image_url": "https://cdn.myanimelist.net/images/anime/1885/127108.webp",
            "small_image_url": "https://cdn.myanimelist.net/images/anime/1885/127108t.webp",
            "large_image_url": "https://cdn.myanimelist.net/images/anime/1885/127108l.webp"
        }
    },
    "trailer": {
        "youtube_id": "h71d0QyZqRE",
        "url": "https://www.youtube.com/watch?v=h71d0QyZqRE",
        "embed_url": "https://www.youtube.com/embed/h71d0QyZqRE?enablejsapi=1&wmode=opaque&autoplay=1",
        "images": {
            "image_url": "https://img.youtube.com/vi/h71d0QyZqRE/default.jpg",
            "small_image_url": "https://img.youtube.com/vi/h71d0QyZqRE/sddefault.jpg",
            "medium_image_url": "https://img.youtube.com/vi/h71d0QyZqRE/mqdefault.jpg",
            "large_image_url": "https://img.youtube.com/vi/h71d0QyZqRE/hqdefault.jpg",
            "maximum_image_url": "https://img.youtube.com/vi/h71d0QyZqRE/maxresdefault.jpg"
        }
    },
    "approved": true,
    "titles": [
        {
            "type": "Default",
            "title": "One Punch Man 3"
        },
        {
            "type": "Synonym",
            "title": "One Punch Man 3rd Season"
        },
        {
            "type": "Japanese",
            "title": "ワンパンマン 3"
        },
        {
            "type": "English",
            "title": "One Punch Man Season 3"
        }
    ],
    "title": "One Punch Man 3",
    "title_english": "One Punch Man Season 3",
    "title_japanese": "ワンパンマン 3",
    "title_synonyms": [
        "One Punch Man 3rd Season"
    ],
    "type": "TV",
    "source": "Manga",
    "episodes": null,
    "status": "Not yet aired",
    "airing": false,
    "aired": {
        "from": null,
        "to": null,
        "prop": {
            "from": {
                "day": null,
                "month": null,
                "year": null
            },
            "to": {
                "day": null,
                "month": null,
                "year": null
            }
        },
        "string": "Not available"
    },
    "duration": "Unknown",
    "rating": "R - 17+ (violence & profanity)",
    "score": null,
    "scored_by": null,
    "rank": null,
    "popularity": 1107,
    "members": 220417,
    "favorites": 3769,
    "synopsis": "Third season of One Punch Man.",
    "background": "",
    "season": null,
    "year": null,
    "broadcast": {
        "day": null,
        "time": null,
        "timezone": null,
        "string": "Unknown"
    },
    "producers": [
        {
            "mal_id": 1365,
            "type": "anime",
            "name": "Shueisha",
            "url": "https://myanimelist.net/anime/producer/1365/Shueisha"
        }
    ],
    "licensors": [],
    "studios": [
        {
            "mal_id": 7,
            "type": "anime",
            "name": "J.C.Staff",
            "url": "https://myanimelist.net/anime/producer/7/JCStaff"
        }
    ],
    "genres": [
        {
            "mal_id": 1,
            "type": "anime",
            "name": "Action",
            "url": "https://myanimelist.net/anime/genre/1/Action"
        },
        {
            "mal_id": 4,
            "type": "anime",
            "name": "Comedy",
            "url": "https://myanimelist.net/anime/genre/4/Comedy"
        }
    ],
    "explicit_genres": [],
    "themes": [
        {
            "mal_id": 50,
            "type": "anime",
            "name": "Adult Cast",
            "url": "https://myanimelist.net/anime/genre/50/Adult_Cast"
        },
        {
            "mal_id": 20,
            "type": "anime",
            "name": "Parody",
            "url": "https://myanimelist.net/anime/genre/20/Parody"
        },
        {
            "mal_id": 31,
            "type": "anime",
            "name": "Super Power",
            "url": "https://myanimelist.net/anime/genre/31/Super_Power"
        }
    ],
    "demographics": [
        {
            "mal_id": 42,
            "type": "anime",
            "name": "Seinen",
            "url": "https://myanimelist.net/anime/genre/42/Seinen"
        }
    ]
}


const getDetail = async () => {
    let res = await fetch(`https://api.jikan.moe/v4/anime/${localStorage.getItem("animeId")}`);
    res = await res.json();
    let data = res.data;

    let div = document.createElement("div");
    div.className = "detail_main";

    div.innerHTML = `<div class="detail_left">
            <img src=${data.images.webp.large_image_url} alt="" srcset="">
            <button onclick="handleTrailer('${data.trailer.embed_url}')">Watch Trailer</button>
        </div>

        <div class="detail_right">

            <div class="detail_text">
                <p>${data.title} <span>${data.title_japanese}</span></p>

                <p><span>${data.type}</span> <span>${data.source}</span></p>

                <p>Score : <span>${data.score}</span></p>

                <p>Producer : <span>${data?.producers[0]?.name}</span> <span>${data?.producers[1]?.name} <span>${data?.producers[2]?.name}</span></span></p>

                <p>Studio : <span>${data?.studios[0]?.name}</span></p>

                <p><span>${data?.genres[0].name}</span> <span>${data?.genres[1].name} <span>${data?.genres[2].name}</span></span></p>

                <p>${data.synopsis.split(" ").slice(0, 30).join(" ")} <span>read more...</span> </p>

            </div>

        </div>`



    document.body.append(div)


}

getDetail();

let pop = document.querySelector(".pop");
let pop_inner = document.querySelector(".pop_inner");

const handleTrailer = (url) => {
    pop.style.display = "flex";
    pop_inner.innerHTML = `<iframe src="${url}"  width="100%" height="100%" frameborder="0"></iframe>`
}

const handleHide = () => {
    pop.style.display = "none";
    pop_inner.innerHTML = ``
}

pop_inner.addEventListener("click", (e) => {
    e.stopPropagation();
})

