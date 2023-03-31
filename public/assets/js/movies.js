// slick
$('.slider').slick({
  slidesToShow: 8,
  slidesToScroll: 8,
  infinite: false,
  lazyLoad: "progressive",
  arrows: true,
  prevArrow:"<img class='slick-prev' src='../../resources/prevArrow.png'>",
  nextArrow:"<img class='slick-next' src='../../resources/nextArrow.png'>",
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
const ACTION = "/discover/movie?with_genres=28&";
const ADVENTURE = "/discover/movie?with_genres=12&";
const ANIMATION = "/discover/movie?with_genres=16&";
const COMEDY = "/discover/movie?with_genres=35&";
const DRAMA = "/discover/movie?with_genres=18&";
const FANTASY = "/discover/movie?with_genres=14&";
const SCIENCE_FICTION = "/discover/movie?with_genres=878&";

// popular
const POPULAR = "/discover/movie?sort_by=popularity.desc&";

// api key
const API_KEY = "api_key=fc0e9877450b169f96e26306a6e15ed5";

// movies
const ACTION_POPULAR = BASE_URL + ACTION + POPULAR + API_KEY;
const ADVENTURE_POPULAR = BASE_URL + ADVENTURE + POPULAR + API_KEY;
const ANIMATION_POPULAR = BASE_URL + ANIMATION + POPULAR + API_KEY;
const COMEDY_POPULAR = BASE_URL + COMEDY + POPULAR + API_KEY;
const DRAMA_POPULAR = BASE_URL + DRAMA + POPULAR + API_KEY;
const FANTASY_POPULAR = BASE_URL + FANTASY + POPULAR + API_KEY;
const SCIENCE_FICTION_POPULAR = BASE_URL + SCIENCE_FICTION + POPULAR + API_KEY;

// img url
const IMG_URL = "https://image.tmdb.org/t/p/original";

// getMovies
async function getMovies(url, genre) {
  const res = await fetch(url);
  const data = await res.json();
  showMovies(data.results, genre);
}

// showMovies
function showMovies(data, genre) {
  var movie = "";
  var genre = $(`#${genre}`);
  for (i = 0; i < data.length; i++) {
      movie = `
      <li>
        <a href="../../movie_details.html?id=${data[i].id}">
          <img src="${IMG_URL + data[i].poster_path}" class="subitem">
        </a>
      </li>`;
      genre.slick("slickAdd", movie);
  }
}

// invoke getMovies
getMovies(ACTION_POPULAR, "action");
getMovies(ADVENTURE_POPULAR, "adventure");
getMovies(ANIMATION_POPULAR, "animation");
getMovies(COMEDY_POPULAR, "comedy");
getMovies(DRAMA_POPULAR, "drama");
getMovies(FANTASY_POPULAR, "fantasy");
getMovies(SCIENCE_FICTION_POPULAR, "science-fiction");