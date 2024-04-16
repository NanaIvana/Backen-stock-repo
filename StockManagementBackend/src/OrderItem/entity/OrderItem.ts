import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

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

    @Column()
    productId: number

}
