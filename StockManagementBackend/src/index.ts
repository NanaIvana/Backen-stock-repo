import * as express from "express";
import * as dotenv from "dotenv";
import * as url from 'url'
import "reflect-metadata";
import './data-source'
import { createCategory, getAllCategories, removeCategory, updateCategory } from "./category/controller/category.controller";
import { getAllCustomers, createCustomers, removeCustomer, updateCustomer } from "./Customers/controller/CustomersRepository";
import { createOrders, getAllOrders, removeOrders, updateOrders } from "./Order/controller/OrderRepository";
import { createOrderItems, getAllOrderItems, removeOrderItems, updateOrderItems } from "./OrderItem/controller/OrderItemRepository";
import { createProducts, getAllProducts, removeProducts, updateProducts } from "./Products/controller/ProductsRepository";
import { createSuppliers, getAllSuppliers, removeSuppliers, updateSuppliers } from "./Suppliers/controller/SuppliersRepository";
dotenv.config();

const app = express();
app.use(express.json());
app.use((req:express.Request, res:express.Response, next)=>{
  console.log('route',req.url)
  next()
})
const port = process.env.PORT || 3000;

//category table api call
app.get('/category', getAllCategories);
app.post('/category', createCategory);
app.delete('/category', removeCategory);
app.put('/category', updateCategory);
//customers table api call
app.get('/customers', getAllCustomers);
app.post('/customers', createCustomers);
app.delete('/customers', removeCustomer);
app.put('/customers', updateCustomer);
//order table api call
app.get('/order', getAllOrders);
app.post('/order', createOrders);
app.delete('/order', removeOrders);
app.put('/order', updateOrders);
//orderItem table api call
app.get('/order_item', getAllOrderItems);
app.post('/order_item', createOrderItems);
app.delete('/order_item', removeOrderItems);
app.put('/order_item', updateOrderItems);
//product table api call
app.get('/products', getAllProducts);
app.post('/products', createProducts);
app.delete('/products', removeProducts);
app.put('/products', updateProducts);
//supplier table api call
app.get('/suppliers', getAllSuppliers);
app.post('/suppliers', createSuppliers);
app.delete('/suppliers', removeSuppliers);
app.put('/suppliers', updateSuppliers);

app.listen(port,() => console.log(`Server is running on http://localhost:${port}`))





  
