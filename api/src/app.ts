import express, { Application } from 'express';
import morgan from 'morgan';
import path from 'path';
const multer = require('multer')
import cors from 'cors';
import indexRoutes from './routes/index'

// Initializations

const app: Application = express();

// Settings
app.set('port', process.env.PORT || 4000);


let storage = multer.diskStorage({
    destination: (req: any, file: any, cb: any) => {
        cb(null, 'C:\\Users\\HP\\Desktop\\precios\\api\\src\\subidas')
    },
    filename: (req: any, file: any, cb: any) => {
        cb(null, file.fieldname + '-' +'excel'+ path.extname(file.originalname))

    }
})

const upload = multer({ storage })


// Middlewares
app.use(morgan('dev'));
app.use(cors());
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Routes
app.use('/api', indexRoutes);

app.post('/subir', upload.single('file'), (req, res) => {
    res.send("subido")
    console.log(`storage location is ${req.hostname}/${req.file.path}`)
})



export default app;