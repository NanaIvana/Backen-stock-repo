import { Request, Response } from "express";
import { AppDataSource } from "../../data-source";
import { Order } from "../entity/Order";

export const getAllOrders = async (req: Request, res: Response) => {
    try {
      const orderRepository = AppDataSource.getRepository(Order);
      const allOrders= await orderRepository.find();
  
      return res.status(200).send({ message: 'All orders retrieved successfully', orders: allOrders });
    } catch (error) {
      console.error('Error getting all orders:', error);
      return res.status(400).send({ message: 'error getting all orders' });
    }
  };

  export const createOrders = async (req: Request, res: Response) => {
    const {orderId, supplierId, orderDate, totalAmount } = req.body;
    const order = new Order();
    order.orderId = orderId;
    order.supplierId = supplierId;
    order.orderDate = orderDate;
    order.totalAmount = totalAmount;

    const orderRepository = AppDataSource.getRepository(Order);
    
    return res
      .status(200)
      .send({ message: "order created successfully",   order: await orderRepository.save(order) });

  };

  export const removeOrders = async (req: Request, res: Response) => {
    const { orderId = 4 } = req.body;
    const orderRepository = AppDataSource.getRepository(Order);
  
    try {
      const orderToRemove = await orderRepository.findOneBy(orderId);
      if (!orderToRemove) {
        return res.status(404).send({ message: 'order not found' });
      }
      await orderRepository.remove(orderToRemove);
      return res.status(200).send({ message: 'order removed successfully' });
    } catch (error) {
      console.error('Error removing order:', error);
      return res.status(400).send({ message: 'order not removed' });
    }
  };

  export const updateOrders = async (req: Request, res: Response) => {
    const {orderId, supplierId, orderDate, totalAmount} = req.body;

    const orderRepository = AppDataSource.getRepository(Order);
    const orderToUpdate = await orderRepository.findOneBy(orderId);

    orderToUpdate.supplierId = supplierId;
    orderToUpdate.orderDate = orderDate;
    orderToUpdate.totalAmount = totalAmount;
    await orderRepository.save(orderToUpdate);

    return res.status(200).send({ message: 'order updated successfully',  orderToUpdate: await orderRepository.save(orderToUpdate) });
 
  };