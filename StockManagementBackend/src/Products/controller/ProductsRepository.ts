import { AppDataSource } from "../../data-source";
import { Products } from "../entity/Products";


export async function productController(){


        const produt = new Products();
        produt.productId = 1;
        produt.productName = "Rolex Watch";
        produt.unitPrice = 10000;
        produt.quantityProduct = 10;
        produt.categoryId = 2;

        const prdouctRepository = AppDataSource.getRepository(Products);
        await prdouctRepository.save(produt)




    console.log("Here you can setup and run express / fastify / any other framework.");

}