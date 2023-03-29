// base url
const BASE_URL = "https://api.themoviedb.org/3";

// api key
const API_KEY = "api_key=9f2832d7fe5339ef6d5818b58c015723";

// img url
const IMG_URL = "https://image.tmdb.org/t/p/original";

// youtube url
const YOUTUBE_URL = "https://www.youtube.com/embed/"

// get id from url
var url = new URL(window.location.href);
var id = url.searchParams.get("id");

// getShow
async function getShow(id) {
    var url = `${BASE_URL}/tv/${id}?${API_KEY}`;

    const res = await fetch(url);
    const data = await res.json();

    // title
    var title = data.name;

    // <title>
    $("title").append(` | ${title}`);

    // show title
    $("#title").text(title);

    // rating
    var rating = data.vote_average;
    $("#rating").append(rating + " / 10");

    // genres
    var genre = "";
    for (i = 0; i < data.genres.length; i++) {
        genre = `<span class="genres">${data.genres[i].name}</span>`;
        $("#genres").append(genre);
    }

    // overview
    var overview = data.overview;
    $("#overview").append(overview);

    // year
    var year = data.release_date;
    year = year.substring(0,4);
    $("#year").append(`(${year})`);
    console.log(year);
}

// getTrailer
async function getTrailer(id) {
    var url = `${BASE_URL}/tv/${id}/videos?${API_KEY}`;

    const res = await fetch(url);
    const data = await res.json();

    for (i = 0; i < data.results.length; i++) {
        if (data.results[i].site == "YouTube" && data.results[i].type == "Trailer" && data.results[i].official) {
          var video = YOUTUBE_URL + data.results[i].key;
          $("#video").attr("src", video);
          console.log(video);
          break;
        }
    }
}

// invoke getShow
getShow(id);

// invoke getTrailer
getTrailer(id);