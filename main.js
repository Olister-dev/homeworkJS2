import { CoctailRenderer, AlcoholicCoctailRenderer } from "./renderData.js";
import { handleError } from "./handleError.js";

const coctailsEl = document.getElementById("coctail");
const BASE_URL = "https://www.thecocktaildb.com/api/json/v1/1/";

async function searchCoctails(search) {
  try {
    const response = await fetch(`${BASE_URL}search.php?s=${search}`);
    return response.json();
  } catch (error) {
    handleError(error);
    console.log(error);
  }
}

async function fetchRandomCoctail() {
  try {
    const response = await fetch(`${BASE_URL}random.php`);
    return response.json();
  } catch (error) {
    handleError(error);
    console.log(error);
  }
}

async function runApplication() {
  function initializeRenderer(item) {
    if (item.strAlcoholic === "Alcoholic") {
      return new AlcoholicCoctailRenderer(item);
    } else {
      return new CoctailRenderer(item);
    }
  }

  function display(data, listEl) {
    data.forEach((item) => {
      const renderer = initializeRenderer(item);

      listEl.innerHTML += renderer.render();
    });
  }

  const data = await fetchRandomCoctail();

  console.log(data.drinks);
  display(data.drinks, coctailsEl);

  const button = document.querySelector(".search__button");
  const listEl = document.querySelector(".search__list");

  async function searchHandler() {
    const input = document.querySelector(".search__input");
    searchCoctails(input.value);
    const searchedData = await searchCoctails(input.value);
    display(searchedData.drinks, listEl); //constant listEl is taken from parent function scope
  }
  button.addEventListener("click", searchHandler);
}

runApplication();
