import API from "./api.js";

const form = document.getElementById("form");

form.addEventListener("submit", onSubmit);

async function onSubmit(event) {
  event.preventDefault();

  console.dir(form);

  const formElement = event.currentTarget;
  const inputValue = form.elements.news.value;

  try{
const articles = await API.getNews(inputValue)

if(articles.length === 0){
    
}
  }catch(error){
    console.error(error);
    
  }
}
