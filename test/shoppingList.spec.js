var expect = require('chai').expect
let ShoppingList = require('../src/shoppingList')
let Category = require('../src/category');

describe('Shopping List', function() {
  describe('when creating new shopping list', function () {
    it('should create with a name', function() {
        var shoppingList = new ShoppingList('New List');
        expect(shoppingList.name).to.equal('New List');
    });
  });

  describe('updating shopping list', function () {
    it('can add new category', function() {
        var shoppingList = new ShoppingList('New List');
        var veggiesCategory = new Category('Veggies');
        var dairyCategory = new Category('Dairy');

        shoppingList.addCategory(veggiesCategory);
        shoppingList.addCategory(dairyCategory);

        var existingCategories = shoppingList.getCategories();

        expect(existingCategories).to.have.lengthOf(2);
        expect(existingCategories).to.include.members([veggiesCategory, dairyCategory]);
    });

    it('can remove category', function() {
        var shoppingList = new ShoppingList('New List');
        var veggiesCategory = new Category('Veggies');
        var dairyCategory = new Category('Dairy');

        shoppingList.addCategory(veggiesCategory);
        shoppingList.addCategory(dairyCategory);

        shoppingList.removeCategory(veggiesCategory.name);

        var existingCategories = shoppingList.getCategories();

        expect(existingCategories).to.have.lengthOf(1);
        expect(existingCategories).to.include(dairyCategory);
    });
  });
});