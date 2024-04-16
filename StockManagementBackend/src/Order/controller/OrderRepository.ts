import { AppDataSource } from "../../data-source";
import { Order } from "../entity/Order";


export async function orderController(){

    console.log("Inserting a new order into the database...");
        const order = new Order();
        order.orderId = 2,
        order.supplierId = 1,
        order.orderDate = "14-02-2024"
        order.totalAmount = 10


    const orderRepository = AppDataSource.getRepository(Order);
    await orderRepository.save(order)


    console.log("Here you can setup and run express / fastify / any other framework.");

}