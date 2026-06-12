const express = require('express');
const cookieParser = require('cookie-parser');
const authRoutes = require('./routes/auth.routes');
const foodRoutes = require('./routes/food.routes');
const cors = require('cors');
const foodpartnerroutes = require('./routes/food-partener-routes');
const foodPartenerRoutes = require('./routes/food-partener-routes');

const app = express();

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({
	origin:"http://localhost:5173",
	credentials:true
}));
app.get("/",(req,res)=>{
	res.send("hello world");
})
app.use('/api/auth',authRoutes);
app.use('/api/food',foodRoutes);
app.use('/api/food-partner',foodPartenerRoutes);
module.exports = app;