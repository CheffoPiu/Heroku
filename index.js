const express = require('express');
const path    = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// 1) Sirve archivos estáticos del directorio "public"
app.use(express.static(path.join(__dirname, 'public')));

// 2) Ruta raíz: entrega el index.html
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// 3) (Opcional) Puedes mantener la ruta de la “Hola Mundo” en /hello
app.get('/hello', (req, res) => {
  res.send('¡Hola Mundo A desde Heroku Docker A!');
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`);
});
