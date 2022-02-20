//Масиви




/*Створи масив «Список покупок». Кожен елемент масиву є об'єктом, який містить назву продукту, кількість і куплений він чи ні, ціну за одиницю товару, сума. 
Написати кілька функцій для роботи з таким масивом:
Виводити весь список на екран таким чином, щоб спочатку йшли продукти, що ще не придбані, а потім - ті, що вже придбали.
Покупка продукту. Функція приймає назву продукту і відзначає його як придбаний.
Створення списку (не) придбаних продуктів.*/



//Покупка продукту. Функція приймає назву продукту і відзначає його як придбаний.

function buyItemBuyName(shoppingList, nameToFind) {
  let itemByName = shoppingList.find( item => item.name == nameToFind)
  itemByName.bought = true;
}


let shoppingList = [
  {
    name: "Orange",
    number: 6,
    bought: true,
    price: 5,
    sum: 30
  },
  {
    name: "Pear",
    number: 2,
    bought: false,
    price: 8,
    sum: 16
  },
  {
    name: "Lemon",
    numbe: 4,
    bought: false,
    price: 3,
    sum: 12
  },
  {
    name: "Kiwi",
    number: 10,
    bought: false,
    price: 5,
    sum: 50
  },
  {
    name: "Banana",
    number: 7,
    bought: true,
    price: 5,
    sum: 35
  }
];

buyItemBuyName(shoppingList, "Pear")

//Виводити весь список на екран таким чином, щоб спочатку йшли продукти, що ще не придбані, а потім - ті, що вже придбали.
const filterShoppingNotBoughtItems = shoppingList.filter(item => !item.bought);

// console.log(filterShoppingNotBoughtItems);
const filterShoppingBoughtItems = shoppingList.filter(item => item.bought);

const sortedItems = filterShoppingNotBoughtItems.concat(filterShoppingBoughtItems);


console.log(sortedItems);


  







  
  
  