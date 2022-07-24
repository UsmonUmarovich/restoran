import { createFood, allFoods } from '../services/menu.service.js'

function testCreateFood() {
    createFood('Palov', 18000, 'Guruch, Sabzi, Go`sht, Chesnok', '<bu yerda rasm bor>')
    createFood('Monti', 10000, 'Guruch, Sabzi, Chesnok', '<bu yerda rasm bor>')
    createFood('Barak', 15000, 'Karchika, Pomidor, Piyoz, Olma', '<bu yerda rasm bor>')
}

function testAllFoods() {
    allFoods((foods) => {
        console.log(foods)
    })
}

testAllFoods()
// testCreateFood()