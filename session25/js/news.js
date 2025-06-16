import API from './api.js';
import { updateNewsList, createMarkup } from './markup.js';

const form = document.getElementById('form');

form.addEventListener('submit', onSubmit);

async function onSubmit(event) {
    event.preventDefault();

    console.dir(form)

    const formElement = event.currentTarget;
    const inputValue = form.elements.news.value;

    try {
        const articles = await API.getNews(inputValue);

        if (articles.length === 0) {
            updateNewsList('<p>Nu am gasit rezultate </p>')
        }

        console.log(articles);

        const markup = articles.reduce( (markup, article) => createMarkup(article) + markup, '');
        updateNewsList(markup)
    } catch (error) {
        console.error(error)
    }

}