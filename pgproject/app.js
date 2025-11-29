const { Pool } = require('pg');

const pool = new Pool({
  user: 'mikhailrudnev',  // macOS username
  host: 'localhost',
  database: 'postgres',
  password: '123',  // если задал
  port: 5432,
});

(async () => {
  const res = await pool.query('SELECT NOW()');
  console.log('Время сервера:', res.rows[0]);
  await pool.end();
})();