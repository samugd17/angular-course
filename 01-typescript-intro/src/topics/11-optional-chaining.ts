export interface Passenger {
    name: string;
    children?: string[];
}

const passenger1: Passenger = {
    name: 'Fernando'
}

const passenger2: Passenger = {
    name: 'María',
    children: ['Paco', 'Natalia']
}

const printChildren = (passenger: Passenger) => {

    let childrenNumber = passenger.children?.length || 0; // If children is undefined returns 0, if not returns children length beacuse of "?"

    console.log(passenger.name, childrenNumber);
}

printChildren(passenger1);