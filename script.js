let button = document.querySelector('button');

button.onclick = ()=> {
    fetch('https://newsapi.org/v2/top-headlines?country=us&apiKey=d53aae992f3042908c750d0f0e035e92')
    .then(response => response.json())
    .then(ListaNoticias => {console.log(ListaNoticias)})
}
