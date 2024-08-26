import ChildProcess from 'child_process';
import { promisify } from 'util';
import express from 'express';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

const execPromise = promisify(ChildProcess.exec);

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config();

const app = express();
app.use(express.json());
app.use(express.static(path.join(__dirname, '../public')));

app.get('/api/timezone', async (req, res) => {

  try {
    const commandResult = await execPromise(`sh -c "curl -X 'GET' -H 'accept: application/json' 'https://timeapi.io/api/time/current/zone?timeZone=${req.query.timezone}'"`);
    return res.json({ timezone: commandResult.stdout });
  } catch (error) {
    return res.json({ error: error.message });
  }
  
});

app.listen(3000, () => {
    console.log('Server is listening on port 3000');
    }
);

