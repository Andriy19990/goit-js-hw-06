const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsRef = document.querySelector(`#ingredients`);
const itemEl = ingredients.map(ingredient => {
  const element = document.createElement("li");
  element.textContent = ingredient;
  element.classList.add("ingredientsRef");
  return element;
});
ingredientsRef.append(...itemEl);