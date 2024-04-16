import { AppDataSource } from "../../data-source";
import { Suppliers } from "../entity/Suppliers";


export async function SupplierController(){


    console.log("Inserting a new supply into the database...");
        const supply = new Suppliers();
        supply.supplierId = 1,
        supply.supplierName = "Brenda",
        supply.adress = "Acacia",
        supply.phoneNumber = 696784350,
        supply.email = "mylka@gmail.com";

    const supplierRepository = AppDataSource.getRepository(Suppliers);
    await supplierRepository.save(supply)


    console.log("Here you can setup and run express / fastify / any other framework.");

}