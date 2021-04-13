const categoriesEl = document.querySelectorAll('.item').length;
console.log(`В списке ${categoriesEl} категории.`);

const categoriesItemsEl = document.querySelectorAll('.item');
categoriesItemsEl.forEach(element => {
console.log(
`Категория: ${element.firstElementChild.textContent}
Количество элементов: ${element.lastElementChild.children.length}`,
    );
});
    
    
    
    
    
    
    
    
    // const categoriesEl = document.querySelectorAll('.item').length;
    // console.log(`В списке ${categoriesEl} категории.`);
    
    // const allCategoriesEl = document.querySelectorAll('.item');
    
    
    
    
    // const catEl = document.querySelector('.item');
    
    
    // console.log(catEl.childNodes);
    // console.log(catEl.childNodes[3]);
