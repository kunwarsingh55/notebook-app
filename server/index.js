const connectDB = require('./db');
const express = require('express')
const authRoutes = require('./routes/auth');
const notesRoutes = require('./routes/notes');

connectDB();
const app = express()
const port = 3000

app.use(express.json());
app.use('/api/auth', authRoutes);
app.use('/api/notes', notesRoutes);


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on PORT ${port}`)
})


