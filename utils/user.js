import bcrypt from 'bcryptjs';

export const data = {
users:  [
    {
        name: "Admin user",
        email: "admin@gmail.com",
        password: bcrypt.hashSync('1234', 10),
        isAdmin: true
    },

    {
        name: "Amos",
        email: "amos@gmail.com",
        password: bcrypt.hashSync('1234', 10),
        
    },
    {
        name: "Kate",
        email: "kate@gmail.com",
        password: bcrypt.hashSync('1234', 10),
       
    },
]

}