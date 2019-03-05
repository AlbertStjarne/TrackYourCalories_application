// Storage Controller


// Item Controller
const ItemCtrl = (function() {
  // Item contructor
  const Item = function(id, name, calories) {
    this.id = id;
    this.name = name;
    this.calories = calories;
  }

  // Data structure / State
  const data = {
    items: [
      {id: 0, name: 'Steak Dinner', calories: 1200},
      {id: 1, name: 'Cookie', calories: 50},
      {id: 2, name: 'Fried eggs', calories: 300},
    ],
    currentItem: null,
    totalCalories: 0
  }

  // Public methods
  return {
    logData: function() {
      return data;
    }
  }
})();


// UI Controller
const UICtrl = (function() {
  
  // Public methods
  return {

  }
})();


// App Controller
  const App = (function(ItemCtrl, UICtrl) {
    
    // Public methods
    return {
      init: function(){
        console.log('init app');
      }
    }

  })(ItemCtrl, UICtrl);

// Initialize App
App.init();