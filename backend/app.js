import 'dotenv/config';
import pg from 'pg';
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';

const app = express();
const appPort = 8000;
// console.log(process.env.PG_USER);
const db = new pg.Client({
  user: process.env.PG_USER,
  host: process.env.PG_HOST,
  database: process.env.PG_DBNAME,
  password: process.env.PG_PASSWORD,
  port: process.env.PG_PORT,
});

try {
  db.connect();
  console.log('Database connected');
} catch (error) {
  console.log('Failed to connect to database: ', error);
}

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.get('/news', async (req, res) => {
  try {
    const result = await db.query('SELECT * FROM news');
    const news = result.rows;
    res.json(news);
  } catch (error) {
    console.log(error);
  }
});

app.listen(appPort, () => {
  console.log(`Server is running at http://localhost:${appPort}`);
});
