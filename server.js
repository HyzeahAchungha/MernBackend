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
// Enable CORS middleware
app.use((req, res, next) => {
	res.setHeader('Access-Control-Allow-Origin', 'http://hyzeal-todo-app-98ee5043d3e9.herokuapp.com');
	res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
	res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
	next();
  });
  // Proxy route
app.post('/api/save', async (req, res) => {
	try {
	  const response = await axios.post('http://localhost:4000/api/save', req.body);
	  res.json(response.data);
	} catch (error) {
	  res.status(500).json({ error: 'An error occurred' });
	}
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
