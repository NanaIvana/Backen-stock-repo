import { Request, Response } from "express";
import { AppDataSource } from "../../data-source";
import { Suppliers } from "../entity/Suppliers";

export const getAllSuppliers = async (req: Request, res: Response) => {
    try {
      const supplierRepository = AppDataSource.getRepository(Suppliers);
      const allSuppliers = await supplierRepository.find();
  
      return res.status(200).send({ message: 'All suppliers retrieved successfully', suppliers: allSuppliers });
    } catch (error) {
      console.error('Error getting all suppliers:', error);
      return res.status(400).send({ message: 'error getting all suppliers' });
    }
  };

  export const createSuppliers = async (req: Request, res: Response) => {
    const {supplierId,supplierName,adress,phoneNumber,productId,email} = req.body;
    const supply = new Suppliers();
    supply.supplierId = supplierId;
    supply.supplierName = supplierName;
    supply.adress = adress;
    supply.phoneNumber = phoneNumber;
    supply.productId = productId;
    supply.email = email;

    const supplierRepository = AppDataSource.getRepository(Suppliers);
    
    return res
      .status(200)
      .send({ message: "supplier created successfully",   supply: await supplierRepository.save(supply) });

  };

  export const removeSuppliers = async (req: Request, res: Response) => {
    const { supplierId } = req.body;
    const supplierRepository = AppDataSource.getRepository(Suppliers);
  
    try {
      const SupplierToRemove = await supplierRepository.findOneBy(supplierId);
      if (!SupplierToRemove) {
        return res.status(404).send({ message: 'supplier not found' });
      }
      await supplierRepository.remove(SupplierToRemove);
      return res.status(200).send({ message: 'supplier removed successfully' });
    } catch (error) {
      console.error('Error removing supplier:', error);
      return res.status(400).send({ message: 'supplier not removed' });
    }
  };

  export const updateSuppliers = async (req: Request, res: Response) => {
    const {supplierId,supplierName,adress,phoneNumber,productId,email} = req.body;

    const supplierRepository = AppDataSource.getRepository(Suppliers);
    const supplierToUpdate = await supplierRepository.findOneBy(supplierId);

    supplierToUpdate.supplierName = supplierName;
    supplierToUpdate.adress = adress;
    supplierToUpdate.phoneNumber = phoneNumber;
    supplierToUpdate.productId = productId;
    supplierToUpdate.email = email;

    await supplierRepository.save(supplierToUpdate);

    return res.status(200).send({ message: 'Category updated successfully',  supplierToUpdate: await supplierRepository.save(supplierToUpdate) });
 
  };