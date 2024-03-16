const emailList = [
 "javascript@gmail.com", 
 "abc.com",
 "mydomain.com",
 "Python@hotmail.com",
 "test",
 "anotherEmail@kenkoo.com",
 "typescript@gmail.com",
 "mailOfPikachu@@@@@",
 "elta@kkk.co",
 "user123.....",
 "wrongEmail@gmail.com",
 "kattis.go",
 "java@gamil.com",
];
                            
 function filterEmails(emails) {
    return emails.filter(email => {
           return email.includes('@') && email.endsWith('.com');
    });
}
                            
const emailsValidos = filterEmails(emailList);
console.log(emailsValidos);
                            