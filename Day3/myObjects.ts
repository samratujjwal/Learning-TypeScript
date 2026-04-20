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

function createCourse(): { name: string; price: number } {
  return { name: "Ujjwal", price: 23 };
}

// Type Aliases

type User = {
  name: string;
  email: string;
  isActive: boolean;
};

function createUser(user: User): User {
  return { name: user.name, email: user.email, isActive: user.isActive };
}

createUser({ name: "Sharma", email: "sharma@gmail.com", isActive: false });

type User1 = {
  readonly _id: string; // ReadOnly make it Unchangeble No one can change or manipulate  it
  name: string;
  email: string;
  isActive: boolean;
  creditcardDeatils?: number; // This ? syntax allow you to if availabe the take value otherwise no problem
};

let newUser: User1 = {
  _id: "123456",
  name: "Sharma",
  email: "ujjwal@gmail.com",
  isActive: true,
  // Here we did not give Creditcard and also not gives eror because of ? syntax it allows if have then give otherwise
};

//newUser._id="1234" // Error:Cannot assign to '_id' because it is a read-only property

type cardNumber = {
  cardNumber: string;
};

type cardDate = {
  cardDate: string;
};

type cardDetails = cardNumber &
  cardDate & {
    cvv: number;
  };
