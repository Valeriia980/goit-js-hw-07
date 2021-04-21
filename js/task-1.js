const newItems = document.querySelectorAll('.item');
console.log(`В списке ${newItems.length} категории`);

newItems.forEach(item => {
    console.log('Категория:', item.querySelector('h2').textContent);
    console.log('Количество элементов:', item.querySelector('ul').children.length);
});