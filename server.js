const express=require('express')
const PORT=4000;
const app=express('');
const cors=require('cors')
const mongoose=require('mongoose')

const MONGO_URI = 'mongodb+srv://Hyzeah:wpOLq80kZ8PtpobJ@cluster0.iig3hxs.mongodb.net/?retryWrites=true&w=majority';

app.use(express.json());
app.use(express.urlencoded());
app.use(cors());
app.use(function (req, res, next) {
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
	next();
});


const routes =require('./Routes/TaskRoutes')





app.use( "/api",routes)


const start = () => {
	mongoose.connect(MONGO_URI, (errr) => {
		if (errr) {
			return console.log('Failed to connect to mongoDB');
		}
		console.log('Connected to DB.....');
	});
 app.listen(PORT,()=>console.log(`server is runing on ${PORT}`))
}
 start()
