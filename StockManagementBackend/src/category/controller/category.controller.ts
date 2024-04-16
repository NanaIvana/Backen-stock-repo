import { Request, Response } from "express";
import { AppDataSource } from "../../data-source";
import { Category } from "../entity/Category";


export const createCategory = async (req: Request, res: Response) => {
    const { categoryId = 2, categoryName = "Necklace", categoryDescription = "elegant and classy Necklaces"} = req.body;
    const category = new Category();
    category.categoryId = categoryId;
    category.categoryName = categoryName;
    category.categoryDescription = categoryDescription;

    const categoryRepository = AppDataSource.getRepository(Category);
    await categoryRepository.save(category);
    return res
      .status(200)
      .json({ message: "category created successfully",  category });

  };




