import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm"
import { Products } from "../../Products/entity/Products"

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
    password: string

    @ManyToOne(() => Products, (product) => product.customer) // note: we will create author property in the Photo class below
    produt: Products[]

}
