// global datastore
let store = { neighborhoods: [], meals: [], customers: [], deliveries: [] };

let neighborhoodId = 0;
let mealId = 0;
let customerId = 0;
let deliveryId = 0;


class Neighborhood {
    constructor(name) {
      this.id = ++neighborhoodId;
      this.name = name;
      store.neighborhoods.push(this);
    }
    deliveries() {
      return store.deliveries.filter(delivery => delivery.neighborhoodId === this.id);
    }

    customers() {
      return store.customers.filter(customer => customer.neighborhoodId = this.id);
    }

    meals() {
    let meals = this.customers().map(customer => customer.meals());
    return [...new Set(meals[0])];
    }
}

class Meal {
    constructor(title, price) {
        this.id = ++mealId;
        this.title = title;
        this.price = price;
        store.meals.push(this);
    }
    deliveries(){
      return store.deliveries.filter(delivery => {
        return delivery.mealId === this.id;
      });
    }  
    customers() {
      return this.deliveries().map(delivery => {
        return store.customers.find(customer => 
        customer.id === delivery.customerId)});
    }  
    static byPrice() {
      return store.meals.sort(function(a, b) {return b.price - a.price});
    }
}