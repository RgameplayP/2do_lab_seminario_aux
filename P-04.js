function createUser(name, ci, email) {
    return { name: name, ci: ci, email: email };
}
var user = createUser("Daniel", "13767673", "Daniel@gmail.com");
console.log(user); // Output: { name: 'Juan', ci: '1234567', email: 'juan@example.com' }
