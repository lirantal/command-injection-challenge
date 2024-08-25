import express from 'express';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config();

const app = express();
app.use(express.json());
app.use(express.static(path.join(__dirname, '../public')));

app.get('/api/timezone', (req, res) => {
  res.json({ timezone: '1234' });
});

app.listen(3000, () => {
    console.log('Server is listening on port 3000');
    }
);

