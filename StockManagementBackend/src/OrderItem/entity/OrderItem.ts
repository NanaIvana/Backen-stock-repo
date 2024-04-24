import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne } from "typeorm"
import { Products } from "../../Products/entity/Products"
import { Order } from "../../Order/entity/Order"

@Entity()
export class OrderItem {

    @PrimaryGeneratedColumn()
    orderItemId: number

    @Column()
    orderId: number

    @Column()
    quantity: number

    @Column()
    unitPrice: number

    @ManyToOne(() => Products, (product) => product.orderitems)
    product: Products

    @OneToMany(() => Order, (orders) => orders.orderitems)
    order: Order[]




}
