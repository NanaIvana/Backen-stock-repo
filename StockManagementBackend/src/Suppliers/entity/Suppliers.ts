import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export class Suppliers {

    @PrimaryGeneratedColumn()
    supplierId: number

    @Column()
    supplierName: string

    @Column()
    adress: string

    @Column()
    phoneNumber: number

    @Column()
    email: string

}
