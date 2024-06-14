export interface Post {
    id?: string;
    title: string;
    content: string;
    slug: string;
    category: string;
    image?: string;
    created_at?: Date;
}