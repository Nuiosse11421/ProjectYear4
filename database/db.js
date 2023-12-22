import pgs from 'pg'

const {Pool} = pgs;
const pool = new Pool({
    user:'postgres',
    host: 'localhost',
    database:'IRT',
    password: 'nnu1123',
    port: 5432
})

export default pool