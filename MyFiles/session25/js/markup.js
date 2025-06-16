export function updatedNewsList(markup) {
  document.getElementById("articlesWrapper").innerHTML = markup;
}

export function createMarkup({ author, title, description, urlToImage, url }) {
  return `
        <div class="article-card">
          <h2 class="article-title">${title}</h2>
          <h3 class="article-author">${author}</h3>
          <img class="article-image" src="${urlToImage}" alt="${title}">
          <p class="article-description">${description}</p>
          <a href="${url}" class="article-link" target="_blank">Read more</a>
        </div>
    `;
}

const test = ` 
<div class="article-card">
        <h2 class="article-title"></h2>
        <h3 class="article-description"></h3>
        <img src="" alt="" class="article-img">
        <p class="article-description"></p>
        <a href="" class="article-link" target="_blank"></a>
    </div>`;
