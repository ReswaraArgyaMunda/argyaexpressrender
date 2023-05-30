const express = require('express');

const app = express();

const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  const radius = parseFloat(req.query.radius);
  if (!isNaN(radius)) {
    const area = Math.PI * radius * radius;
    res.send(`Luas lingkaran dengan jari-jari ${radius} adalah ${area.toFixed(2)}`);
  } else {
    res.send('Masukkan jari-jari lingkaran sebagai parameter radius');
  }
});

app.listen(port, () => console.log(`Server berjalan pada port: ${port}`));
