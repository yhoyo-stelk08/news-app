import { Pool } from 'pg';
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';

const app = express();
const appPort = 8080;

const db = new Pool({
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

app.get('/news', (req, res) => {
  const news = db.prepare('SELECT * FROM news').all();
  res.json(news);
});

app.listen(appPort, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
