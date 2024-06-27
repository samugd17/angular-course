function classDecorator<T extends { new(...args: any[]): {} }>(constructor: T) {
    {
        return class extends constructor {
            newProperty = 'New Property';
            hello = 'Override';
        }
    }
}

@classDecorator
export class SuperClass {

    public myProperty: string = 'abc123';

    print() {
        console.log('Hola Mundo')
    }
}

console.log(SuperClass);

let myClass = new SuperClass();
console.log(myClass);