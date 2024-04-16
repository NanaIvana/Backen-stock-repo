import { AppDataSource } from "../../data-source";
import { Customers } from "../entity/Customers";


export async function customerController(){

    console.log("Inserting a new user into the database...");
        const user = new Customers();
        user.customerName = "Pascaline Leonita",
        user.address = "Maison Damas",
        user.email = "pascaline@gmail.com",
        user.phoneNumber = 696784350,
        user.productId = 3;

    const customersRepository = AppDataSource.getRepository(Customers);
   await customersRepository.save(user)


    console.log("Here you can setup and run express / fastify / any other framework.");

}