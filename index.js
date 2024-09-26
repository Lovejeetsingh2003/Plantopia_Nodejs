const express = require('express');
const app = express();
const port = 7000;
const body_parser = require('body-parser');
const userRoutes = require('./routes/user_routes');
const productRoutes = require('./routes/product_routes');
 

app.use(body_parser.json());

app.use('/', userRoutes);
app.use('/', productRoutes);

app.listen(port, () => {
    console.log('Server run successfully at port number ', port)
});