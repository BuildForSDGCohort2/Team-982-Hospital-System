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

app.get('/all_appointments', (req, res) => {
    res.render('all_appointments')
});

app.get('/all_patients', (req, res) => {
    res.render('all_patients')
});
app.get('/logout', (req, res) => {
    res.render('login')
});
app.get('/transactions', (req, res) => {
    res.render('transactions')
});
app.get('/all_employees', (req, res) => {
    res.render('all_employees')
});
app.get('/profile', (req, res) => {
    res.render('profile')
})
app.get('/mail_compose', (req, res) => {
    res.render('mail_compose')
});

app.get('/mail_detail', (req, res) => {
    res.render('mail_detail')
});

app.get('/employee_profiles', (req, res) => {
    res.render('employee_profiles')
});

app.get('/mailbox', (req, res) => {
    res.render('mailbox')
});
app.get('/register', (req, res) => {
    res.render('register')
});

app.listen(port, () => {
    console.log(`server running on ${port}`);
});