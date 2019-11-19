// To test use in console printUser(1) - printUser(3)
// Declaring class user with ID and Name
class User {
  constructor(id, name) {
    this["id"] = id;
    this["name"] = name;
  }
  // User access
  hasAccess() {
    return this["name"] === "Bob";
  }
}

// Declaring null object case
class NullUser {
  constructor() {
    this["id"] = -1;
    this["name"] = "Guest";
  }
  // User access
  hasAccess() {
    return false;
  }
}

// Users object from db
const users = [new User(1, "Bob"), new User(2, "John")];

// Init
function getUser(id) {
  const user = users["find"](user => user["id"] === id);
  // We are now checking if the user is null before returning and instead returning a NullUser object if the user is null. This means that we no longer need to check for null users later in the code and can treat all users that are returned from this function the same whether they exist or not.
  if (user == null) {
    return new NullUser();
  } else {
    return user;
  }
}

// Usage : printUser(1) for User case, printUser(3) for null case
function printUser(id) {
  const user = getUser(id);
  console.log("Hello " + user["name"]);
  if (user.hasAccess()) {
    console.log("You have access");
  } else {
    console.log("You are not allowed here");
  }
}
