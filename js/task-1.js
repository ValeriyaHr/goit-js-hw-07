const categoriesList = document.getElementById('categories');

const categoriesItems = categoriesList.querySelectorAll('li.item');

console.log(`Кількість категорій: ${categoriesItems.length}`);

categoriesItems.forEach(item => {
    const categoryTitle = item.querySelector('h2').textContent;
    
    const categoryItems = item.querySelectorAll('ul > li');
    
    console.log(`Категорія: ${categoryTitle}`);
    console.log(`Кількість елементів у категорії: ${categoryItems.length}`);
});
