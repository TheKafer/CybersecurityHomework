const express = require("express");
const cors = require("cors");
const app = express();
const port = 3000;
app.use(cors());
app.use(express.json());

let mysql = require("mysql");

let connection = mysql.createConnection({
  host: "localhost",
  user: "santi",
  password: "asdf",
  database: "cibersecurity",
});

(connectBD) => {
  connection.connect(function (err) {
    if (err) throw err;
    console.log("You are now connected...");
  });
  return connection;
};

app.get("/products", (req, res) => {
  connection.query("SELECT * FROM product", function (err, result) {
    if (err) throw err;
    res.json({
      products: result,
    });
  });
});

app.post("/products", (req, res) => {
  const { product } = req.body;
  connection.query(
    `INSERT INTO cibersecurity.product (title, price, description, image) VALUES (
        '${product.title}',
        ${product.price},
        '${product.description}',
        '${product.image}'
    );`,
    function (err, result) {
      if (err) throw err;
    }
  );
  //   res.sendStatus(200);
  res.end();
});

app.put("/products/:id", (req, res) => {
  const productId = req.params.id;
  const { product } = req.body;
  connection.query(
    `UPDATE product
    SET
      title='${product.title}',
      price=${product.price},
      description='${product.description}',
      image='${product.image}'
    WHERE id=${productId}`,
    function (err, result) {
      if (err) throw err;
    }
  );
  res.end();
});

app.delete("/products/:id", (req, res) => {
  const productId = req.params.id;
  connection.query(
    `DELETE FROM product WHERE id=${productId}`,
    function (err, result) {
      if (err) throw err;
    }
  );
  // res.sendStatus(200);
  res.end();
});

app.get("/products/:id", (req, res) => {
  const productId = req.params.id;
  connection.query(
    `SELECT * FROM product where id=${productId}`,
    function (err, result) {
      if (err);
      res.json({
        product: result,
      });
    }
  );
});

app.listen(port, "0.0.0.0", () => {
  console.log(`Listening on port: ${port}`);
});
