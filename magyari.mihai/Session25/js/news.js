import API from './api.js';
import { createMarkup, updateNewsList } from './markup.js';

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
            updateNewsList('<p>Nu am gasit rezultate</p>')
        }

        console.log(articles);

        const markup = articles.reduce((markup, article) => createMarkup(article) + markup, '') // folosind createMarkup(article) + markup, articolele sunt puse in ordine cronologica de la cele mai vechi la cele mai noi
        // const markup = articles.reduce((markup, article) => markup + createMarkup(article), '') // in cazul asta cele mai noi apar primele (invers)

        updateNewsList(markup)

    } catch (error) {
        console.error(error)
    }
}