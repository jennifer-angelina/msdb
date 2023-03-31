// slick
$('.slider').slick({
  slidesToShow: 8,
  slidesToScroll: 8,
  infinite: false,
  lazyLoad: "progressive",
  arrows: true,
  prevArrow:"<img class='slick-prev' src='prevArrow.png'>",
  nextArrow:"<img class='slick-next' src='nextArrow.png'>",
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 7,
        slidesToScroll: 7,
      }
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 5
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 4
      }
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    }
  ]
});

// base url
const BASE_URL = "https://api.themoviedb.org/3";

// genres
const ACTION_ADVENTURE = "/discover/tv?with_genres=10759&";
const ANIMATION = "/discover/tv?with_genres=16&";
const COMEDY = "/discover/tv?with_genres=35&";
const DRAMA = "/discover/tv?with_genres=18&";
const FANTASY_SCIENCE_FICTION = "/discover/tv?with_genres=10765&";

// popular
const POPULAR = "/discover/tv?sort_by=popularity.desc&";

// api key
const API_KEY = "api_key=fc0e9877450b169f96e26306a6e15ed5";

// movies
const ACTION_ADVENTURE_POPULAR = BASE_URL + ACTION_ADVENTURE + POPULAR + API_KEY;
const ANIMATION_POPULAR = BASE_URL + ANIMATION + POPULAR + API_KEY;
const COMEDY_POPULAR = BASE_URL + COMEDY + POPULAR + API_KEY;
const DRAMA_POPULAR = BASE_URL + DRAMA + POPULAR + API_KEY;
const FANTASY_SCIENCE_FICTION_POPULAR = BASE_URL + FANTASY_SCIENCE_FICTION + POPULAR + API_KEY;

// img url
const IMG_URL = "https://image.tmdb.org/t/p/original";

// getShows
async function getShows(url, genre) {
  const res = await fetch(url);
  const data = await res.json();
  showShows(data.results, genre);
}

// showShows
function showShows(data, genre) {
  var show = "";
  var genre = $(`#${genre}`);
  for (i = 0; i < data.length; i++) {
      show = `
      <li>
        <a href="../../show_details.html?id=${data[i].id}">
         <img src="${IMG_URL + data[i].poster_path}" class="subitem"">
        </a>
      </li>`;
      genre.slick("slickAdd", show);
  }
}

// invoke getShows
getShows(ACTION_ADVENTURE_POPULAR, "action-adventure");
getShows(ANIMATION_POPULAR, "animation");
getShows(COMEDY_POPULAR, "comedy");
getShows(DRAMA_POPULAR, "drama");
getShows(FANTASY_SCIENCE_FICTION_POPULAR, "fantasy-science-fiction");