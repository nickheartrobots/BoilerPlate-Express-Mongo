import express from 'express';
//import mongoose from 'mongoose';
import Routes from './routes';
import bodyParser from 'body-parser'

const App = express();

// Uncomment if using mongodb
// mongoose.connect(process.env.MONGODB_URI, () => {
//     console.log('Connected to MongoDB')
// })

//middleware goes here

App.use(bodyParser.json());
App.use('/api', Routes);

export default App;