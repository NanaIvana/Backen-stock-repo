import { AppDataSource } from "../../data-source";
import { OrderItem } from "../entity/OrderItem";


export async function orderItemController(){


    console.log("Inserting a new orderitem into the database...");
        const orderitem = new OrderItem();
        orderitem.orderItemId = 1;
        orderitem.orderId = 2;
        orderitem.quantity = 5;
        orderitem.unitPrice = 5000;
        orderitem.productId = 6;

    const orderitemRepository = AppDataSource.getRepository(OrderItem);
    await orderitemRepository.save(orderitem)


    console.log("Here you can setup and run express / fastify / any other framework.");

}