// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

axios.get('https://lambda-times-backend.herokuapp.com/articles')
    .then(response=>{
        console.log(response);
        const keyArray = Object.keys(response.data.articles);
        console.log(keyArray);
        keyArray.forEach(key=>{
            response.data.articles[key].forEach(article=>{
                const card = document.createElement('div');
                card.classList.add('card');
                card.setAttribute('data-topic', key);
                card.innerHTML = `<div class="headline">${article.headline}</div>
                  <div class="author">
                    <div class="img-container">
                      <img src=${article.authorPhoto} />
                    </div>
                    <span>By ${article.authorName}</span>
                  </div>`;
                document.querySelector('.cards-container').append(card);
            })
        })
    })