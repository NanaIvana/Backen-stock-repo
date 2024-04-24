import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm"
import { Products } from "../../Products/entity/Products"

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

    
    @ManyToOne(() => Products, (product) => product.supply)
    product: Products

}
