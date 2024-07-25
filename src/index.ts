import express from 'express';
import cors from 'cors';

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.static('public'));

app.get('/visa-data', (req, res) => {
    // Mock data
    const visaData = [
      { year: 2021, applications: 1000, approvals: 800 },
      { year: 2022, applications: 1200, approvals: 950 },
      { year: 2023, applications: 1100, approvals: 900 },
    ];
    res.json(visaData);
  });

app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
  });