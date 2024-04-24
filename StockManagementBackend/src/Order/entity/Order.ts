import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne } from "typeorm"
import { OrderItem } from "../../OrderItem/entity/OrderItem"

@Entity()
export class Order {

    @PrimaryGeneratedColumn()
    orderId: number

    @Column()
    supplierId: number

    @Column()
    productId: number

    @Column()
    orderDate: string

    @Column()
    totalAmount: number

    @ManyToOne(() => OrderItem, (orderitem) => orderitem.order) // note: we will create author property in the Photo class below
    orderitems: OrderItem

}
