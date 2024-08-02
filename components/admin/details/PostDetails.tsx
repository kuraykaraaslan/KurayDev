'use client';
import React, { useEffect } from 'react';
import { Post, User} from '@/libs/prisma/prisma';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faImage } from '@fortawesome/free-solid-svg-icons';
import axiosInstance from '@/libs/http/axios';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';


interface PostDetailsProps {
    post: Post;
}

const PostDetails: React.FC<PostDetailsProps> = (props) => {

    const [id, setId] = React.useState<string>("");
    const [title, setTitle] = React.useState<string>("");
    const [slug, setSlug] = React.useState<string>("");
    const [content, setContent] = React.useState<string>("");
    const [status, setStatus] = React.useState<string>("");
    const [image, setImage] = React.useState<string>("");

    const [authorId, setAuthorId] = React.useState<string>("");
    const [categoryId, setCategoryId] = React.useState<string>("");


    // 
    const [authors, setAuthors] = React.useState<any[]>([]);
    const [categories, setCategories] = React.useState<any[]>([]);

    //

    useEffect(() => {
        if (!props) {
            return;
        };
        fetchAuthors();
        fetchCategories();
        setId(props.post.id);
        setTitle(props.post.title);
        setSlug(props.post.slug);
        setContent(props.post.content);
        setStatus(props.post.status);
        setImage(props.post.image);
        setAuthorId(props.post.authorId);
        setCategoryId(props.post.categoryId);

    }, [props]);

    // handle form submit
    const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();

        console.log("title: ", title);
        console.log("slug: ", slug);
        console.log("content: ", content);
        console.log("status: ", status);
        console.log("authorId: ", authorId);
        console.log("categoryId: ", categoryId);

        if (!title || !slug || !content || !status || !authorId || !categoryId) {
            alert("Please fill all fields");
            return;
        }
        
        if (id) {
            updatePost(e);
        } else {
            createPost(e);
        }
    }

    //update current post
    const updatePost = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        axiosInstance.put(`/api/blog/posts/${props?.post.id}`, {
            title,
            slug,
            content,
            status,
            image,
            authorId,
            categoryId
        }).
            then((res) => {
                console.log(res.data);
            }).
            catch((err) => {
                console.log(err);
            });
    }

    //create new post
    const createPost = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        axiosInstance.post(`/api/blog/posts`, {
            title,
            slug,
            content,
            status,
            image,
            authorId,
            categoryId
        }).
            then((res) => {
                console.log(res.data);
            }).
            catch((err) => {
                console.log(err);
            });
    }

    //fetch authors
    const fetchAuthors = () => {
        axiosInstance.get(`/api/users`).
            then((res) => {
                setAuthors(res.data);
                console.log(res.data);
            }).
            catch((err) => {
                console.log(err);
            });
    }

    //fetch categories
    const fetchCategories = () => {
        axiosInstance.get(`/api/blog/categories`).
            then((res) => {
                setCategories(res.data.categories);
                console.log(res.data);
            }).
            catch((err) => {
                console.log(err);
            }
            );
    }


    return (
        <div className="container mx-auto px-4 sm:px-8">
            <div className="py-8">
                <div>
                    <h2 className="text-2xl font-semibold leading-tight">Post Details</h2>
                </div>
                <form>
                    <div className="space-y-12 mt-2">
                        <div className="border-b pb-12 bg-base-300 p-4 rounded-lg">

                            <div className="grid grid-cols-1 gap-x-6 gap-y-8">
                                <div className="sm:col-span-4">
                                    <label htmlFor="name" className="block text-sm font-medium leading-6 ">
                                        Title
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            id="title"
                                            name="title"
                                            type="text"
                                            value={title}
                                            onChange={(e) => setTitle(e.target.value)}
                                            placeholder="Jane Smith"
                                            autoComplete="name"
                                            className="block w-full rounded-md border-0 py-1.5  shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        />
                                    </div>
                                </div>

                                <div className="sm:col-span-4">
                                    <label htmlFor="slug" className="block text-sm font-medium leading-6 ">
                                        Slug
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            id="slug"
                                            name="slug"
                                            type="text"
                                            value={slug}
                                            onChange={(e) => setSlug(e.target.value)}
                                            placeholder="jane-smith"
                                            autoComplete="slug"
                                            className="block w-full rounded-md border-0 py-1.5  shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        />
                                    </div>
                                </div>

                                <div className="sm:col-span-4">
                                    <label htmlFor="status" className="block text-sm font-medium leading-6 ">
                                        Status
                                    </label>
                                    <div className="mt-2">
                                        <select
                                            id="status"
                                            name="status"
                                            value={status}
                                            onChange={(e) => setStatus(e.target.value)}
                                            autoComplete="status"
                                            className="block w-full rounded-md border-0 py-1.5  shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        >
                                            <option value="draft">Draft</option>
                                            <option value="published">Published</option>
                                            <option value="archived">Archived</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="sm:col-span-4">
                                    <label htmlFor="author" className="block text-sm font-medium leading-6 ">
                                        Author
                                    </label>
                                    <div className="mt-2">
                                        <select
                                            id="author"
                                            name="author"
                                            value={authorId}
                                            onChange={(e) => setAuthorId(e.target.value)}
                                            autoComplete="author"
                                            className="block w-full rounded-md border-0 py-1.5  shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        >
                                            {authors.length === 0 && <option value="" disabled>No authors</option>}
                                            {authorId == "" && <option value="" disabled>Select an author</option>}
                                            {authors.map((author: User) => (
                                                <option key={author.id} value={author.id}>{author.name ? author.name : author.email}</option>
                                            ))}
                                        </select>
                                    </div>
                                </div>

                                <div className="sm:col-span-4">
                                    <label htmlFor="category" className="block text-sm font-medium leading-6 ">
                                        Category
                                    </label>
                                    <div className="mt-2">
                                        <select
                                            id="category"
                                            name="category"
                                            value={categoryId}
                                            onChange={(e) => setCategoryId(e.target.value)}
                                            autoComplete="category"
                                            className="block w-full rounded-md border-0 py-1.5  shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        >
                                            {categories.length === 0 && <option value="" disabled>No categories</option>}
                                            {categoryId == "" && <option value="" disabled>Select a category</option>}
                                            {categories.map((category: any) => (
                                                <option key={category.id} value={category.id}>{category.title}</option>
                                            ))}
                                        </select>
                                    </div>
                                </div>

                                <div className="sm:col-span-4">
                                    <label htmlFor="content" className="block text-sm font-medium leading-6 ">
                                        Content
                                    </label>
                                    <ReactQuill theme="snow" className='h-64 bg-white'
                                     value={content} onChange={setContent} />
                                </div>                              

                            </div>
                        </div>
                        <div className="border-b pb-12 bg-base-300 p-4 rounded-lg">
                            <div className="grid grid-cols-1 gap-x-6 gap-y-8">
                                <div className="sm:col-span-4">
                                    <label htmlFor="metaTitle" className="block text-sm font-medium leading-6 ">
                                        Meta Title
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            id="metaTitle"
                                            name="metaTitle"
                                            type="text"
                                            placeholder="Jane Smith"
                                            autoComplete="name"
                                            className="block w-full rounded-md border-0 py-1.5  shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        />
                                    </div>
                                </div>

                                <div className="sm:col-span-4">
                                    <label htmlFor="metaDescription" className="block text-sm font-medium leading-6 ">
                                        Meta Description
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            id="metaDescription"
                                            name="metaDescription"
                                            type="text"
                                            placeholder="Jane Smith"
                                            autoComplete="name"
                                            className="block w-full rounded-md border-0 py-1.5  shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        />
                                    </div>
                                </div>

                                <div className="sm:col-span-4">
                                    <label htmlFor="metaKeywords" className="block text-sm font-medium leading-6 ">
                                        Meta Keywords
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            id="metaKeywords"
                                            name="metaKeywords"
                                            type="text"
                                            placeholder="Jane Smith"
                                            autoComplete="name"
                                            className="block w-full rounded-md border-0 py-1.5  shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mt-6 flex items-center justify-end gap-x-6">
                        <button type="button" className="text-sm font-semibold leading-6 ">
                            Cancel
                        </button>
                        <button
                            type="submit"
                            onClick={handleSubmit}
                            className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                            Save
                        </button>
                    </div>
                </form>

            </div>
        </div>
    );
}

export default PostDetails;