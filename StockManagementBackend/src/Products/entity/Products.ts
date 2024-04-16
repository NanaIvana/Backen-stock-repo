import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

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

    @Column()
    categoryId: number

}
