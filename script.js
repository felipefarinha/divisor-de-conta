
 var obj_base = {
    
    food_price: 0, //somando comida
    drink_price: 0, //somando bebida

    people: 1, //total pessoas
    people_drink: 0, //total pessoas q beberam

    price_total: 0, //total comida + bebida
    price_for_food: 0, //preço da comida para todos
    price_for_drink: 0, //preço da bebida para alguns

    soma_food(valor) {return valor + this.food_price },
    soma_drink(valor) {return valor + this.drink_price },
    total_price_food(valor) { return this.food_price / valor},
    total_price_drink(valor) { return this.price_for_food + (this.drink_price / valor)}
}

document
  .querySelector(".send")
  .addEventListener("click", function(e) {
    e.preventDefault();

    const input_food = parseInt(document.querySelector(".input_food").value)
    const input_drink = parseInt(document.querySelector(".input_drink").value)
    const input_people = parseInt(document.querySelector(".input_people").value)
    const input_people_drink = parseInt(document.querySelector(".input_people_drink").value)


    if(input_food != "" && input_food != 0){
      obj_base.food_price = obj_base.soma_food(input_food);

      if(input_people != "" && input_people != 0){
        // obj_base.people = input_people;
        obj_base.price_for_food = obj_base.total_price_food(input_people)
      }
    }

    if(input_drink != "" && input_drink != 0){
      obj_base.drink_price = obj_base.soma_drink(input_drink);

      if(input_people_drink != ""){
      obj_base.people_drink = input_people_drink;
      }
      // obj_base.price_for_drink = obj_base.total_price_drink(input_people_drink);
      obj_base.price_for_drink = obj_base.total_price_drink(obj_base.people_drink);
    }
    
    console.log(obj_base.price_for_drink)

// setar 0 nos input's
})
  
