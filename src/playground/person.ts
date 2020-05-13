export const isAdult = (age: number) => (age >= 18);
export const canDrink = (age: number) => (age >= 21);
export default (age: number) => (age >= 65);