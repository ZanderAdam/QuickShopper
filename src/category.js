let _ = require('underscore');

class Category {
    constructor(name) {
        this.items = [];
        this.name = name;
    }

    addItem(item) {
        this.items.push(item);
    }

    removeItem(itemName) {
        this.items = _.reject(this.items, 
            i => i.name == itemName);
    }

    getItems() {
        return this.items;
    }
}

module.exports = Category;