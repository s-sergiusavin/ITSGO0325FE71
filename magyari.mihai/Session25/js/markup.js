export function updateNewsList(markup) {
    document.getElementById('articlesWrapper').innerHTML = markup;
}

export function createMarkup({ author, title, description, url, urlToImage }) {
    return `
    <div class="article-card"> 
        <h2 class="article-title">${title} </h2>
        <h3 class="article-author">${author} </h3>
        <img src=${urlToImage} class="article-img">
        <p class="article-description"> ${description} </p>
        <a href=${url} class = "article-link" target="blank"> Read more </a>
        </div>
    `;
}

const test = `
 <div class="article-card">
        <h2 class="article-title"></h2>
        <h3 class="article-author"></h3>
        <img src="" class="article-img">
        <p class="article-description"></p>
        <a href="" class="article-link" target="blank"></a>
    </div>`;