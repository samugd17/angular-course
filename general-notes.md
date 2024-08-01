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

- `() and [] in HTML code`

    - `()` Used for events. Example: (click), (ngSubmit)...
    - `[]` Used to assign attributes or send info from parent to child
 

## Concepts:

- Arreglo = Lista (Array)

- Getter & Setter: The getters indicate that we can take some value of an attribute and the setters we can save some value on an attribute. They are important at the moment of creating an object class since the value that the attributes can take depends on them or to modify some attribute without needing to modify some other attribute.

- One way data binding vs Two way data binding: 

    - One-way data binding is the idea of linking data only from the component class to the view or vice versa. This will be very useful when we need to display static information on the screen.

    - Two-way data binding allows data to flow in both directions: from the class to the view and from the view to the class.

        The most typical scenario for this case occurs when we use the NgModel directive when creating forms in Angular using @angular/forms, where a user is expected to enter data.