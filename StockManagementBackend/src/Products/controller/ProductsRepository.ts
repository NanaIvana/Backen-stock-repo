import { Request, Response } from "express";
import { AppDataSource } from "../../data-source";
import { Products } from "../entity/Products";

export const getAllProducts = async (req: Request, res: Response) => {
    try {
      const prdouctRepository = AppDataSource.getRepository(Products);
      const allProducts = await prdouctRepository.find();
  
      return res.status(200).send({ message: 'All products retrieved successfully', products: allProducts });
    } catch (error) {
      console.error('Error getting all products:', error);
      return res.status(400).send({ message: 'error getting all products' });
    }
  };

  export const createProducts = async (req: Request, res: Response) => {
    const {productId, productName, unitPrice, quantityProduct, categoryId} = req.body;
    const produt = new Products();
    produt.productId = productId;
    produt.productName = productName;
    produt.unitPrice = unitPrice;
    produt.quantityProduct = quantityProduct;
    produt.category = categoryId;

    const prdouctRepository = AppDataSource.getRepository(Products);
    
    return res
      .status(200)
      .send({ message: "product created successfully",   produt: await prdouctRepository.save(produt) });

  };

  export const removeProducts = async (req: Request, res: Response) => {
    const { productId } = req.body;
    const prdouctRepository = AppDataSource.getRepository(Products);
  
    try {
      const productsToRemove = await prdouctRepository.findOneBy(productId);
      if (!productsToRemove) {
        return res.status(404).send({ message: 'product not found' });
      }
      await prdouctRepository.remove(productsToRemove);
      return res.status(200).send({ message: 'product removed successfully' });
    } catch (error) {
      console.error('Error removing product:', error);
      return res.status(400).send({ message: 'product not removed' });
    }
  };

  export const updateProducts = async (req: Request, res: Response) => {
    const {productId, productName, unitPrice, quantityProduct, categoryId} = req.body;

    const prdouctRepository = AppDataSource.getRepository(Products);
    const productToUpdate = await prdouctRepository.findOneBy(productId);

    productToUpdate.productName = productName;
    productToUpdate.unitPrice = unitPrice;
    productToUpdate.quantityProduct = quantityProduct;
    productToUpdate.category = categoryId;
    await prdouctRepository.save(productToUpdate);

    return res.status(200).send({ message: 'product updated successfully',  productToUpdate: await prdouctRepository.save(productToUpdate) });
 
  };
