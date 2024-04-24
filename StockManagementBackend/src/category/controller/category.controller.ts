import { Request, Response } from "express";
import { AppDataSource } from "../../data-source";
import { Category } from "../entity/Category";

export const getAllCategories = async (req: Request, res: Response) => {
  try {
    const categoryRepository = AppDataSource.getRepository(Category);
    const allCategories = await categoryRepository.find();

    return res.status(200).send({ message: 'All categories retrieved successfully', categories: allCategories });
  } catch (error) {
    console.error('Error getting all categories:', error);
    return res.status(400).send({ message: 'error getting all categories' });
  }
};

export const createCategory = async (req: Request, res: Response) => {
    const { categoryId = 4, categoryName = "beads", categoryDescription = "elegant and classy beads"} = req.body;
    const category = new Category();
    category.categoryId = categoryId;
    category.categoryName = categoryName;
    category.categoryDescription = categoryDescription;

    const categoryRepository = AppDataSource.getRepository(Category);
    
    return res
      .status(200)
      .send({ message: "category created successfully",   category: await categoryRepository.save(category) });

  };

  export const removeCategory = async (req: Request, res: Response) => {
    const { categoryId = 4 } = req.body;
    const categoryRepository = AppDataSource.getRepository(Category);
  
    try {
      const categoryToRemove = await categoryRepository.findOneBy(categoryId);
      if (!categoryToRemove) {
        return res.status(404).send({ message: 'category not found' });
      }
      await categoryRepository.remove(categoryToRemove);
      return res.status(200).send({ message: 'category removed successfully' });
    } catch (error) {
      console.error('Error removing category:', error);
      return res.status(400).send({ message: 'category not removed' });
    }
  };

  export const updateCategory = async (req: Request, res: Response) => {
    const { categoryId = 4, categoryName, categoryDescription = "Elegant beads"} = req.body;

    const categoryRepository = AppDataSource.getRepository(Category);
    const categoryToUpdate = await categoryRepository.findOneBy(categoryId);

    categoryToUpdate.categoryName = categoryName;
    categoryToUpdate.categoryDescription = categoryDescription;

    await categoryRepository.save(categoryToUpdate);

    return res.status(200).send({ message: 'Category updated successfully',  categoryToUpdate: await categoryRepository.save(categoryToUpdate) });
 
  };

