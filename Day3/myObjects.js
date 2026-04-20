"use strict";
const User = {
    name: "Ujjwal",
    email: "Ujjwal@gmail.com",
    isActive: true,
};
// function createUser({
//   name,
//   email,
//   isPaid,
// }: {
//   name: string;
//   email: string;
//   isPaid: boolean;
// }) {}
// const newUser = {
//   name: "Ujjwal",
//   email: "sharma@gmail.com",
//   isPaid: true,
//   college: "IMS", // Extra parameter given here but TypeScript Not giving any error So all JavaScript error are not gone by typeScript but yeah its good
// };
// createUser(newUser);
function createCourse() {
    return { name: "Ujjwal", price: 23 };
}
function createUser(user) {
    return { name: user.name, email: user.email, isActive: user.isActive };
}
createUser({ name: "Sharma", email: "sharma@gmail.com", isActive: false });
let newUser = {
    _id: "123456",
    name: "Sharma",
    email: "ujjwal@gmail.com",
    isActive: true,
    // Here we did not give Creditcard and also not gives eror because of ? syntax it allows if have then give otherwise
};
