import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export class Order {

    @PrimaryGeneratedColumn()
    orderId: number

    @Column()
    supplierId: number

    @Column()
    orderDate: string

    @Column()
    totalAmount: number


}
