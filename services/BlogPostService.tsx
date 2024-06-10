import { Post } from "@/types/Post";
import firestore from "@/libs/firestore/firestore";


export default class BlogPostService {
    constructor() {
    }

    async createPost(post: Post) : Promise<Post> {
        const res = await firestore.collection('posts').add(post);
        
        return {
            ...post,
            id: res.id
        };
    }

    async getPosts() {
        const posts : Post[] = [];
        await firestore.collection('posts').get().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                posts.push(doc.data() as Post);
            });
        });
        return posts;
    }

    async getPostsPaginated(page: number, limit: number) {
        const res = await firestore.collection('posts').offset(page * limit).limit(limit).get();
        return res;
    }

    async getPost(slug: string) {
        const res = await firestore.collection('posts').where('slug', '==', slug).get().then((querySnapshot) => {
            if (querySnapshot.empty) {
                return null;
            }
            return querySnapshot.docs[0].data() as Post;
        }
        );
        return res;
    }

    async updatePost(slug: string, post: Post) {
        const res = await firestore.collection('posts').doc(slug).update(post as any);
        return res;

    }

    async deletePost(slug: string) {
        const res = await firestore.collection('posts').doc(slug).delete();
        return res;
    }

}

