var expect = require('chai').expect
let Category = require('../src/category');
let Item = require('../src/item');

describe('Category', function() {
  describe('when creating new category', function () {
    it('should create with a name', function() {
        var category = new Category('Veggies');
        expect(category.name).to.equal('Veggies');
    });
  });

  describe('updating existing category', function () {
    it('can add new item', function() {
        var category = new Category('Veggies');
        var lettuceItem = new Item('lettuce');
        var potatoesItem = new Item('potatoes');

        category.addItem(lettuceItem);
        category.addItem(potatoesItem);

        var existingItems = category.getItems();

        expect(existingItems).to.have.lengthOf(2);
        expect(existingItems).to.include.members([lettuceItem, potatoesItem]);
    });

    it('can remove item', function() {
        var category = new Category('Veggies');
        var lettuceItem = new Item('lettuce');
        var potatoesItem = new Item('potatoes');

        category.addItem(lettuceItem);
        category.addItem(potatoesItem);

        category.removeItem(potatoesItem.name);

        var existingItems = category.getItems();

        expect(existingItems).to.have.lengthOf(1);
        expect(existingItems).to.include(lettuceItem);
    });
  });
});
