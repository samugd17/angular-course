function addNumbers(a: number, b: number): number {
    return a + b;
}


let addNumbersArrow = (a: number, b: number): string => {
    return `${a + b}`;
}

function multiply(firstNumber: number, secondNumber?: number, base: number = 2) {
    return firstNumber * base;
}

// let result: number = addNumbers(1, 2);
// let result2: string = addNumbersArrow(1, 2);
// let multiplyResult: number = multiply(5);

// console.log({ result, result2, multiplyResult })


interface Character {
    name: string;
    hp: number;
    showHp: () => void; //Void significa que no regresa nada
}

const healCharacter = (character: Character, amount: number) => {
    character.hp += amount;
}

const strider: Character = {
    name: 'Strider',
    hp: 50,
    showHp() {
        console.log(`Puntos de vida ${this.hp}`)
    },
}


healCharacter(strider, 40);
strider.showHp();

export { };