# Course notes

## Commands:
- `npm run dev` 

    Start a development server that watches for file changes and automatically reloads the application

- `ng new <appname> --standalone false`

    Create a new angular project with modules

- `ng serve`

    Run the development server on localhost:4200

## Typescript
- `?` and `!` 

    Makes their presence optional or mandatory, respectively

    For example:
    ```ts
    class Person {
        public name!: string;
        public address?: string;

        constructor() {
            this.name = 'Samuel';
            this.address = 'Tenerife';
        }
    }
    ```

- `<T>`

    Establish generic arguments when it can be a string, number or whatever. You can even indicate the type in the function call

    ```ts
    export function whatsMyType<T>(argument: T): T {
    return argument;
    }

    let amIString = whatsMyType<string>('Hola Mundo');
    let amINumber = whatsMyType<number>(100);
    let amIArray = whatsMyType<number[]>([1, 2, 3]);

    console.log(amIString.split(' '));
    console.log(amINumber.toFixed());
    console.log(amIArray.join('-'));
    ```

## Concepts:

- Arreglo = Lista (Array)
- Getter & Setter = The getters indicate that we can take some value of an attribute and the setters we can save some value on an attribute. They are important at the moment of creating an object class since the value that the attributes can take depends on them or to modify some attribute without needing to modify some other attribute.