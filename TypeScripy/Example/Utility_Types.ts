interface Person {
    name: string;
    age: number;
    location?: string;
}

const bob: Pick<Person, 'name'> = {
    name: 'Bob'
    // `Pick` has only kept name, so age and location were removed from the type and they can't be defined here
};

console.log(bob);