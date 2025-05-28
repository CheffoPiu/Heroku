const express = require('express');
const axios = require('axios');
const cors = require('cors');
const app = express();
const PORT = 3000;

app.use(cors());

app.get('/paises', async (req, res) => {
  try {
    const response = await axios.get('https://restcountries.com/v3.1/all');
    const data = response.data.map(pais => ({
      nombre: pais.name.common,
      capital: pais.capital ? pais.capital[0] : 'Sin capital',
      bandera: pais.flags.svg
    }));
    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al obtener los países' });
  }
});

app.get('/', (req, res) => {
  res.send('Servidor en funcionamiento');
});


app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
