import bcrypt from 'bcryptjs'


const users= [
    {
        name: 'Admin User',
        email: 'admin@email.com',
        password:bcrypt.hashSync('12345',10),
        isAdmin: true,
    },
    {
        name: 'khadar',
        email: 'khadar@email.com',
        password:bcrypt.hashSync('12345',10),
        isAdmin: false,
    },
    {
        name: 'abdi',
        email: 'abdi@email.com',
        password:bcrypt.hashSync('12345',10),
        isAdmin: false,
    },
]

export default users;