let _ = require('underscore');

class ShoppingList {
    constructor(name) {
        this.categories = [];
        this.name = name;
    }

    addCategory(category) {
        this.categories.push(category);
    }

    removeCategory(categoryName) {
        this.categories = _.reject(this.categories, 
            c => c.name == categoryName);
    }

    getCategories() {
        return this.categories;
    }
}

module.exports = ShoppingList;