import subtract, {square, add} from "./utils";
import isSenior, {canDrink, isAdult} from "./person";

console.log("App is running.");

console.log(`square(2) - ${square(2)}`);

console.log(`add(100, 23) - ${add(100, 23)}`);

console.log(`isAdult(18) - ${isAdult(18)}`);

console.log(`canDrink(20) - ${canDrink(20)}`);

console.log(`subtract(100, 20) - ${subtract(100, 20)}`);

console.log(`isSenior(65) - ${isSenior(65)}`);

console.log(`isSenior(64) - ${isSenior(64)}`);