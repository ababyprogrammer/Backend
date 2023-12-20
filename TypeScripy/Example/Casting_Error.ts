let x = 'Hello!';

console.log(((x as unknown) as number).length); // x is not actually a number so this will return undefined