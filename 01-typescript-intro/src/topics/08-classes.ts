export class Person {
    // public name!: string;
    // private address?: string;

    constructor(
        public name: string,
        public address: string = 'No address') { }
}


// export class Hero extends Person {
//     constructor(
//         public alterEgo: string,
//         public age: number,
//         public realName: string

//     ) {
//         super(realName, 'New York')
//     }
// }

export class Hero {

    constructor(
        public alterEgo: string,
        public age: number,
        public realName: string,
        public person: Person,

    ) {
        // this.person = new Person(realName)
    }
}

let tony = new Person('Tony Stark', 'New York');
let hulkbuster = new Hero('Hulkbuster', 10, 'Tony Stark', tony)
let ironman = new Hero('Ironman', 45, 'Tony Stark', tony);

console.log(ironman, hulkbuster)