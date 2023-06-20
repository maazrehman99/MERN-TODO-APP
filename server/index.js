import express from 'express';
import connectDB from './database/db.js';
import route from './routes/route.js';
import cors from "cors";
import bodyParser from 'body-parser';




const app = express();
const PORT=8000
app.use(cors());
app.use(bodyParser.json({ extended: true}));
app.use(bodyParser.urlencoded({extended:true}));
app.use('/',route);



connectDB();

app.listen(PORT,()=>console.log(`listening on port ${PORT}`))       