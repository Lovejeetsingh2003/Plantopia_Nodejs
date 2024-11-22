const express = require('express');
const app = express();
const port = 7000;
const body_parser = require('body-parser');
const userRoutes = require('./routes/user_routes');
const productRoutes = require('./routes/product_routes');
const cartRoutes = require('./routes/cart_routes');
const topPickRoutes = require('./routes/top_pick_routes');
const recommendedRoutes = require('./routes/recommended_routes');
const favouriteRoutes = require('./routes/favourites_routes');
 

app.use(express.json({ limit: '10mb' }));

app.use(express.urlencoded({ limit: '10mb', extended: true }));

app.use(body_parser.json());

app.use('/', userRoutes);

app.use('/', productRoutes);

app.use('/', cartRoutes);

app.use('/', topPickRoutes);

app.use('/', recommendedRoutes);

app.use('/', favouriteRoutes);

app.listen(port, () => {
    console.log('Server run successfully at port number ', port)
});