import { Product, taxCalculation } from './06-function-desestructure'

const shoppingCart: Product[] = [
    {
        description: 'Nokia',
        price: 150
    },
    {
        description: 'Samsung',
        price: 300
    }
];

const [total, taxResult] = taxCalculation({
    tax: 0.15,
    products: shoppingCart
});

console.log('Total: ', total)
console.log('Tax: ', taxResult)