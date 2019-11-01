// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

axios.get('https://lambda-times-backend.herokuapp.com/topics')
    .then(response=>
        {
        response.data.topics.forEach(topic=>{
            const tab = document.createElement('div');
            tab.classList.add('tab')
            tab.textContent = topic;
            tab.setAttribute('data-topic', topic);
            tab.addEventListener('click', event=>{
                console.log('woof');
                
                const cards = document.querySelectorAll('.card');
                cards.forEach(card=>{
                    console.log(card.getAttribute('data-topic'));
                    
                    if(card.getAttribute('data-topic')==tab.getAttribute('data-topic')){
                        card.style.display = 'block';
                    }else{
                        card.style.display = 'none';
                    }
                })
                console.log(cards);
                
            })
            document.querySelector('.topics').append(tab);
        })
    })  
    .catch(error=>{
        console.log(error);
    });