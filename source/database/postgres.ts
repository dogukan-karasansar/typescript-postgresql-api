const Pool = require('pg').Pool;

export const pool = new Pool({
    user: 'root',
    host: 'localhost',
    database: 'typescripapi',
    password: '12345',
    port: 5432
});