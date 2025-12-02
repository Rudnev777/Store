// const { Pool } = require('pg');

// const pool = new Pool({
//   user: 'postgres',  // macOS username
//   host: 'localhost',
//   database: 'postgres',
//   password: 'misha2005',  // если задал
//   port: 5432,
// });

// (async () => {
//   const res = await pool.query('SELECT NOW()');
//   console.log('Время сервера:', res.rows[0]);
//   await pool.end();
// })();
const express = require('express');
const app = express();

// Простая статика
app.use(express.static('public'));

// Для отладки - логируем все запросы
app.use((req, res, next) => {
    console.log(`${new Date().toISOString()} ${req.method} ${req.url}`);
    next();
});

app.listen(3000, () => {
    console.log('Сервер запущен: http://localhost:3000');
    console.log('Проверьте:');
    console.log('1. Файл public/main.js существует');
    console.log('2. В index.html правильный путь к JS');
});