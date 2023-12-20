const nameAgeMap: { [index: string]: number } = {};

nameAgeMap.Amirmahdi = 14; // no Error.

nameAgeMap.carol = "fifty"; // Error: Type 'string' is not assignable to type.

console.log(nameAgeMap);