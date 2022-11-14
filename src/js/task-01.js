const counter = parent => { return parent.childElementCount };
const message = elements => {
    elements.forEach(element => {
        const firstElement = element.firstElementChild;
        const secondElement = firstElement.nextElementSibling
        console.log(`Category: ${firstElement.textContent}`);
        console.log(`Elements: ${counter(secondElement)}`);
    });
};
const categories = document.querySelector('#categories');
const subCategories = categories.querySelectorAll('.item');
console.log(`Number of categories: ${counter(categories)}`);
message(subCategories);