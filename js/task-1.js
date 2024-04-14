const maintElement = document.querySelector('#categories');

const childElements = maintElement.querySelectorAll('li.item')

console.log('Number of categories:', childElements.length);

childElements.forEach(child => {
    const title = child.querySelector('h2').textContent;
    console.log('Category', title);

    const items = child.querySelectorAll('ul > li');
    console.log('Elements:', items.length);
});