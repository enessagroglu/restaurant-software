const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const PORT = 5000;

// JSON dosyasının tam yolu (src/data klasöründe)
const tablesJsonPath = path.join(__dirname, '../data/tables.json');

// JSON dosyasını okuyup frontend'e dönen endpoint
app.get('/tables', (req, res) => {
  fs.readFile(tablesJsonPath, 'utf8', (err, data) => {
    if (err) {
      return res.status(500).send("Error reading file");
    }
    res.send(JSON.parse(data)); // JSON dosyasını frontend'e gönder
  });
});

// JSON dosyasına yeni veriyi kaydetmek için endpoint
app.post('/update-tables', express.json(), (req, res) => {
  const newTableData = req.body; // Gelen veri
  fs.writeFile(tablesJsonPath, JSON.stringify(newTableData, null, 2), (err) => {
    if (err) {
      return res.status(500).send("Error writing file");
    }
    res.send("Tables updated successfully"); // Başarılı olursa mesaj
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
