const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const newIngredients = document.querySelector('#ingredients');

const makeNewIngredients = ingredients => {
  return ingredients.map(item => {
    const finalIngredients = document.createElement('li');
    finalIngredients.textContent = item;

    return finalIngredients;
  });
};

const items = makeNewIngredients(ingredients);
newIngredients.append(...items);