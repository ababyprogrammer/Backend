interface Square {
    kind: 'square';
    size: number;
}

interface Circle {
    kind: 'circle';
    radius: number;
}

interface Triangle {
    kind: 'triangle';
    bace: number;
    height: number;
}

type Shape = Square | Circle | Triangle;

function area(shape: Shape) {
    switch (shape.kind) {
        case 'square':
            return shape.size * shape.size;
        case 'circle':
            return Math.PI * shape.radius * shape.radius;
        case 'triangle':
            return 0.5 * shape.bace * shape.bace;
    }
}

const square: Square = { kind: 'square', size: 10 };
const circle: Circle = { kind: 'circle', radius: 5 };
const triangle: Triangle = { kind: 'triangle', base: 10, height: 8 };

console.log(area(square)); // Output: 100
console.log(area(circle)); // Output: 78.53981633974483
console.log(area(triangle)); // Output: 40