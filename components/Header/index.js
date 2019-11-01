// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component

function Header() {
    const header = document.createElement('div');
    header.classList.add('header');
    header.innerHTML = `<span class="date">SMARCH 28, 2019</span>\n
    <h1>Lambda Times</h1>\n
    <span class="temp">98°</span>`;
    return header;
}

document.querySelector('.header-container').append(Header());
