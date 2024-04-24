import { Request, Response } from "express";
import { AppDataSource } from "../../data-source";
import { Customers } from "../entity/Customers";

export const getAllCustomers = async (req: Request, res: Response) => {
    try {
      const customersRepository = AppDataSource.getRepository(Customers);
      const allCustomers= await customersRepository.find();
  
      return res.status(200).send({ message: 'All customers retrieved successfully', customers: allCustomers });
    } catch (error) {
      console.error('Error getting all customers:', error);
      return res.status(400).send({ message: 'error getting all customers' });
    }
  };

  export const createCustomers = async (req: Request, res: Response) => {
    const {customerId, customerName = "Ngassam Vicky ", address = "Bayonne", email = "Vicky@gmail.com", phoneNumber = "+33 678868950", password = "Marlyse", productId = "1"} = req.body;
    const user = new Customers();
    user.customerId = customerId;
    user.customerName = customerName;
    user.address = address;
    user.email = email;
    user.phoneNumber = phoneNumber;
    user.password = password;
    user.produt = productId;
    const customersRepository = AppDataSource.getRepository(Customers);
    
    return res
      .status(200)
      .send({ message: "customers created successfully",   user: await customersRepository.save(user) });

  };

  export const removeCustomer = async (req: Request, res: Response) => {
    const { customerId } = req.body;
    const customersRepository = AppDataSource.getRepository(Customers);
  
    try {
      const customerToRemove = await customersRepository.findOneBy(customerId);
      if (!customerToRemove) {
        return res.status(404).send({ message: 'customer not found' });
      }
      await customersRepository.remove(customerToRemove);
      return res.status(200).send({ message: 'customer removed successfully' });
    } catch (error) {
      console.error('Error removing customer:', error);
      return res.status(400).send({ message: 'customer not removed' });
    }
  };

  export const updateCustomer = async (req: Request, res: Response) => {
    const {customerId, customerName, address, email, phoneNumber, password, productId } = req.body;

    const customersRepository = AppDataSource.getRepository(Customers);
    const customerToUpdate = await customersRepository.findOneBy(customerId);

    customerToUpdate.customerName = customerName;
    customerToUpdate.address = address;
    customerToUpdate.email = email;
    customerToUpdate.phoneNumber = phoneNumber;
    customerToUpdate.password = password;
    customerToUpdate.produt = productId;

    await customersRepository.save(customerToUpdate);

    return res.status(200).send({ message: 'Customer updated successfully',  customerToUpdate: await customersRepository.save(customerToUpdate) });
 
  };
