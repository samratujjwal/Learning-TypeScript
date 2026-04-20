function addTwo(num: number): number {
  // We can fix what data type function should return this makes avoid error
  return num + 2;
  //   return "Ujjwal"; /// This will give error because we fix the return type of this function
}

function getUpper(val: string) {
  // We can fix data type of the parameter of the function so we cant put wrong values which will give runtime error
  return val.toUpperCase();
}

function signUpUser(name: string, email: string, isPaid: boolean) {
  return "User Logged In";
}

let loginUser = (
  name: string = "Demo", // We can assign  default values to our parameters
  email: string,
  isPaid: boolean = true, // We can assign  default values to our parameters
) => {
  return `${name} is Logged in with ${email}`;
};

console.log(getUpper("sonalujjwal"));
addTwo(5);
signUpUser("ujjwal", "sonal@gmail.com", false);

loginUser("Ujjwal", "ujjwal@gmail.com");

// Next Cases of Functions in TypeScript
// We can return more than one or more types

function getValue(mayvalue: number) {
  if (mayvalue > 4) {
    return true;
  }
  return "200 OK";
}

// Arrow function fixing return type
const getHello = (s: string): string => {
  return "Hello Sir";
};

const heros = ["Superman", "IronMan", "Thor"];

heros.map((hero): string => {
  return `Hero is ${hero}`;
});
