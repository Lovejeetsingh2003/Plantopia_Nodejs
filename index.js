const express = require('express');
const app = express();
const port = 7000;
const body_parser = require('body-parser');
const userRoutes = require('./routes/user_routes');
const productRoutes = require('./routes/product_routes');
const cartRoutes = require('./routes/cart_routes');
const topPickRoutes = require('./routes/top_pick_routes');
const recommendedRoutes = require('./routes/recommended_routes');
 

app.use(body_parser.json());

app.use('/', userRoutes);

app.use('/', productRoutes);

app.use('/', cartRoutes);

app.use('/', topPickRoutes);

app.use('/', recommendedRoutes);

app.listen(port, () => {
    console.log('Server run successfully at port number ', port)
});