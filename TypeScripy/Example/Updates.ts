type Color = "red" | "green" | "blue";
type HexColor<T extends Color> = `#${string}`;

// Usage
let myColor: HexColor<"blue"> = "#0000FF";

console.log(myColor)