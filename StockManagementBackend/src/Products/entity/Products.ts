import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne, JoinColumn, OneToOne } from "typeorm"
import { Suppliers } from "../../Suppliers/entity/Suppliers"
import { Customers } from "../../Customers/entity/Customers"
import { Category } from "../../category/entity/Category"
import { OrderItem } from "../../OrderItem/entity/OrderItem"

@Entity()
export class Products {

    @PrimaryGeneratedColumn()
    productId: number

    @Column()
    productName: string

    @Column()
    unitPrice: number

    @Column()
    quantityProduct: number

    @OneToOne(() => Category, (Category) => Category.category)
    @JoinColumn()
    category: Category

    @OneToMany(() => Suppliers, (Suppliers) => Suppliers.product) // note: we will create author property in the Photo class below
    supply: Suppliers[]

    @OneToMany(() => Customers, (customer) => customer.produt)
    customer: Customers

    @OneToMany(() => OrderItem, (orderitem) => orderitem.product) // note: we will create author property in the Photo class below
    orderitems: OrderItem[]

}
