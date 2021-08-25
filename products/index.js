const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;
app.use(cors());
app.use(express.json());

let mysql = require('mysql');

let connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'cibersecurity'
});

connectBD => {
    connection.connect(function(err) {
        if (err) throw err;
        console.log('You are now connected...');
    });
    return connection;
}

app.get('/products', (req, res) => {
    connection.query('SELECT * FROM product', function(err, result) {
        if (err) throw err;
        res.json({
            products: result
        });
    });
});

app.listen(port, () => {
  console.log(`Listening on port: ${port}`)
});
