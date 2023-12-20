//  Try creating a new Car using the alias provided
type CarYear = number;
type Cartype = string;
type CarModel = string;
type Car = {
    year: CarYear,
    type: Cartype,
    modle: CarModel
};

const carYear: CarYear = 2001
const carType: Cartype = "Toyota"
const carModel: CarModel = "Corolla"
const car: Car = {
    year: carYear,
    type: carType,
    modle: carModel
};

console.log(car);