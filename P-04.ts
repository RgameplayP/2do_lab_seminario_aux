function createUser(name: string, ci: string, email: string): { name: string, ci: string, email: string } {
        return { name, ci, email };
}
                          

const user = createUser("Daniel", "13767673", "Daniel@gmail.com");
console.log(user); 
                          