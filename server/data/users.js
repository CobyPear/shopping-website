import bcrypt from 'bcryptjs'

const users = [
    {
        name: 'Admin User',
        email: 'admin@example.com',
        password: bcrypt.hashSync('123456', 10),
        isAdmin: true
    },
    {
        name: 'Smokey Muffins',
        email: 'smuff@example.com',
        password: bcrypt.hashSync('123456', 10),
    },
    {
        name: 'Teapot',
        email: 'teapot@example.com',
        password: bcrypt.hashSync('123456', 10),
    },
]

export default users