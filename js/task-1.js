const newItems = document.querySelectorAll('.item');
console.log(`В списке ${newItems.length} категории`);

newItems.forEach(item => {
    console.log(
        `Категория - ${item.firstElementChild.textContent}, Количество элементов - ${item.lastElementChild.children.length}`);
   
});