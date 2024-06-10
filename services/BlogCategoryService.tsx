import { Category } from "@/types/Category";
import firestore from "@/libs/firestore/firestore";

export default class BlogCategoryService {
    constructor() {
    }

    async createCategory(category: Category) : Promise<Category> {
        const res = await firestore.collection('categories').add(category);
        
        return {
            ...category,
            id: res.id
        };
    }

    async getCategories() {
        const categories : Category[] = [];
        await firestore.collection('categories').get().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                categories.push(doc.data() as Category);
            });
        });
        return categories;
    }

    async getCategory(slug: string) {
        const res = await firestore.collection('categories').where('slug', '==', slug).get().then((querySnapshot) => {
            if (querySnapshot.empty) {
                return null;
            }
            return querySnapshot.docs[0].data() as Category;
        }
        );
        return res;
    }

    async updateCategory(slug: string, category: Category) {
        const res = await firestore.collection('categories').doc(slug).update(category as any);
        return res;

    }

    async deleteCategory(slug: string) {
        const res = await firestore.collection('categories').doc(slug).delete();
        return res;
    }

}