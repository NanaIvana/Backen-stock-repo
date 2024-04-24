import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn } from "typeorm"
import { Products } from "../../Products/entity/Products";

@Entity()
export class Category {

    @PrimaryGeneratedColumn()
    categoryId: number;

    @Column()
    categoryName: string;

    @Column()
    categoryDescription: string;


    @OneToOne(() => Products, (Products) => Products.category)
    category: Products

}
