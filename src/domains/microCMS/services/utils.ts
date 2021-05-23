import { CategoryResponse } from '../models/category';
import { getAbout } from './get-about';
import { getAllCategories } from './get-categoris';

export const getSideMenuItem = async (): Promise<{
  categories: CategoryResponse[];
  selfIntroduction: string;
}> => {
  const categoryData = await getAllCategories();
  const authorData = await getAbout('author');

  return {
    categories: categoryData.contents,
    selfIntroduction: authorData.body,
  };
};
