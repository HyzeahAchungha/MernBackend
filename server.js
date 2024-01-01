const express=require('express')
const app=express('');

const mongoose=require('mongoose')
const dotenv = require('dotenv')

app.use(express.json());
app.use(express.urlencoded());

dotenv.config()
app.use(function (req, res, next) {
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
	next();
});


const routes =require('./Routes/TaskRoutes')





app.use( "/api",routes)


const start = () => {
	mongoose.connect(process.env.MONGO_Atlas, (errr) => {
		if (errr) {
			return console.log('Failed to connect to mongoDB');
		}
		console.log('Connected to DB.....');
	});
 app.listen(process.env.PORT,()=>console.log(`server is runing on ${process.env.PORT}`))
}
 start()
