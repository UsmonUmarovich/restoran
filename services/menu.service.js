// 1. Datastore menu.json
import Datastore from 'nedb';
// 2. createFood
// 3. allFoods

/**
 * name
 * price
 * ingredients
 * image
 */

const menu = new Datastore({
    filename: "./datastore/menu.json",
    autoload: true
})

menu.loadDatabase()

export function createFood(name, price, ingredients, image) {
    menu.insert({ name, price, ingredients, image }, (err, doc) => {
        console.log('New Food Created.');
    })
}

export function allFoods(callback) {
    menu.find({}, (err, foods) => {
        callback(foods)
    })
}