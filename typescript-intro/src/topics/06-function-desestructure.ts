export interface Product {
    description: string;
    price: number;
}

interface TaxCalculationOptions {
    tax: number,
    products: Product[];
}

const phone: Product = {
    description: 'Samsung Galaxy A11',
    price: 250.0
}

const tablet: Product = {
    description: 'Samsung Galaxy Tab 4',
    price: 200.0
}

export function taxCalculation(options: TaxCalculationOptions): [number, number] {
    let total = 0;
    let { tax, products } = options;

    options.products.forEach(({ price }) => {
        total += price;
    });

    return [total, total * tax]
}

const shoppingCart: Product[] = [phone, tablet];
const tax: number = 0.15;
const [total, taxResult] = taxCalculation({
    products: shoppingCart,
    tax: tax,
});


console.log('Total: ', total)
console.log('Tax: ', taxResult)

export { };