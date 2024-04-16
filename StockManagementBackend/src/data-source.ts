import "reflect-metadata"
import { DataSource } from "typeorm"
import { Customers } from "./Customers/entity/Customers"
import { Suppliers } from "./Suppliers/entity/Suppliers"
import { Products } from "./Products/entity/Products"
import { Order } from "./Order/entity/Order"
import { OrderItem } from "./OrderItem/entity/OrderItem"
import { Category } from "./category/entity/Category"

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "",
    database: "stock_management_db",
    synchronize: true,
    logging: false,
    entities: [Customers,Suppliers,Products,Order,OrderItem,Category],
    migrations: [],
    subscribers: [],
})

AppDataSource.initialize()
  .then(async () => {
    console.log("connected to database!");
  })
  .catch((error) => console.log(error));

