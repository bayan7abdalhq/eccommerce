import connectDB from '../DB/connection.js';
import categoriesRouter from './modules/category/category.router.js';
import productRouter from './modules/product/product.router.js';

const initApp =(app,express)=>{
    connectDB();
    app.use(express.json());
    app.get('/',(req,res)=>{
        return res.status(200).json({message:"success"});
    });
    app.use('/categories',categoriesRouter);
    app.use('/products',productRouter);
    app.use('*',(req,res)=>{
        return res.status(404).json({message:"page not found"});
    });
}
export default initApp;