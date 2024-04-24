import { Request, Response } from "express";
import { AppDataSource } from "../../data-source";
import { OrderItem } from "../entity/OrderItem";

export const getAllOrderItems = async (req: Request, res: Response) => {
    try {
      const orderitemRepository = AppDataSource.getRepository(OrderItem);
      const allOrderItem = await orderitemRepository.find();
  
      return res.status(200).send({ message: 'All orderItem retrieved successfully', categories: allOrderItem });
    } catch (error) {
      console.error('Error getting all orderItem:', error);
      return res.status(400).send({ message: 'error getting all orderItem' });
    }
  };

  export const createOrderItems = async (req: Request, res: Response) => {
    const {orderItemId, orderId, quantity, unitPrice, productId } = req.body;
    const orderitem = new OrderItem();
    orderitem.orderItemId = orderItemId;
    orderitem.orderId = orderId;
    orderitem.quantity = quantity;
    orderitem.unitPrice = unitPrice;
    orderitem.productId = productId;

    const orderitemRepository = AppDataSource.getRepository(OrderItem);
    
    return res
      .status(200)
      .send({ message: "orderItem created successfully",   orderitem: await orderitemRepository.save(orderitem) });
  };

  export const removeOrderItems = async (req: Request, res: Response) => {
    const { orderItemId } = req.body;
    const orderitemRepository = AppDataSource.getRepository(OrderItem);
  
    try {
      const orderItemToRemove = await orderitemRepository.findOneBy(orderItemId);
      if (!orderItemToRemove) {
        return res.status(404).send({ message: 'orderItem not found' });
      }
      await orderitemRepository.remove(orderItemToRemove);
      return res.status(200).send({ message: 'orderItem removed successfully' });
    } catch (error) {
      console.error('Error removing orderItem:', error);
      return res.status(400).send({ message: 'orderItem not removed' });
    }
  };

  export const updateOrderItems = async (req: Request, res: Response) => {
    const {orderItemId, orderId, quantity, unitPrice, productId} = req.body;

    const orderitemRepository = AppDataSource.getRepository(OrderItem);
    const orderItemToUpdate = await orderitemRepository.findOneBy(orderItemId);

    orderItemToUpdate.orderId = orderId;
    orderItemToUpdate.quantity = quantity;
    orderItemToUpdate.unitPrice = unitPrice;
    orderItemToUpdate.productId = productId;

    await orderitemRepository.save(orderItemToUpdate);

    return res.status(200).send({ message: 'orderItem updated successfully',  orderItemToUpdate: await orderitemRepository.save(orderItemToUpdate) });
 
  };