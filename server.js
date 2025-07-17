const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// ✅ Serve static files or views from current directory (branch-specific)
app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

