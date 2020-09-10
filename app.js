const express = require('express');
const path = require('path');
const morgan = require('morgan');

const app = express();
const port = process.env.PORT || 6700

app.set('view engine', 'ejs');
morgan(':method :url :status :res[content-length] - :response-time ms')
app.use('/assets', express.static(path.join(__dirname, './assets')));
app.use('/dashboard/?', express.static(path.join(__dirname, './assets')));

app.get('/', (req, res) => {
    res.render('login')
});
app.get('/dashboard', (req, res) => {
    res.render('dashboard')
});

app.listen(port, () => {
    console.log(`server running on ${port}`);
});