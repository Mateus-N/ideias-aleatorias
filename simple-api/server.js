const express = require('express')

// App
const app = express();
app.get('/', (req, res) => {
  res.send('Salve')
})

app.listen(8080)
