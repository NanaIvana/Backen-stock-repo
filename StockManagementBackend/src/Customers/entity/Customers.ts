import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export class Customers {

    @PrimaryGeneratedColumn()
    customerId: number

    @Column()
    customerName: string

    @Column()
    address: string

    @Column()
    email: string

    @Column()
    phoneNumber: number

    @Column()
    productId: number

}
