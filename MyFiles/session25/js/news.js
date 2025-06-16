import API from "./api.js";
import { updatedNewsList, createMarkup } from "./markup.js";

const form = document.getElementById("form");

form.addEventListener("submit", onSubmit);

async function onSubmit(event) {
  event.preventDefault();

  console.dir(form);

  const formElement = event.currentTarget;
  const inputValue = formElement.elements.news.value;

  try {
    const articles = await API.getNews(inputValue);

    if (!articles || articles.length === 0) {
      updatedNewsList('No results found');
    }

console.log(articles);

const markup = articles.reduce(  (markup, article) => createMarkup(article) + markup, '' );
updatedNewsList(markup)

  } catch (error) {
    console.error(error);
  }
}
