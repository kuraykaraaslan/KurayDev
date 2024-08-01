'use client';
import { Category } from '@prisma/client';
import React, { useState, useEffect } from 'react';
import axios from '@/libs/http/axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash, faUser } from '@fortawesome/free-solid-svg-icons';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { useSession, SessionProvider } from 'next-auth/react';
import { useRouter } from 'next/navigation';

const CategoriesTable: React.FC = () => {
    const session = useSession();
    const router = useRouter();

    const [categories, setCategories] = useState<Category[]>([]);
    const [search, setSearch] = useState('');
    const [status, setStatus] = useState('all');
    const [page, setPage] = useState(1);
    const [pageSize, setPageSize] = useState(5);
    const [totalPages, setTotalPages] = useState(0);

    useEffect(() => {
        axios.get('/api/blog/categories', {
            params: {
                search,
                status,
                page,
                pageSize
            }
        })
            .then((response) => {
                console.log(response.data);
                setCategories(response.data.categories);
                setTotalPages(response.data.total === 0 ? 1 : Math.ceil(response.data.total / pageSize));
                setPage(response.data.page);
            })
            .catch((error) => {
                console.error(error);
            });
    }
    , [  page, pageSize ]);

    useEffect(() => {
        setPage(1);

        axios.get('/api/blog/categories', {
            params: {
                search,
                status,
                page,
                pageSize
            }
        })
            .then((response) => {
                console.log(response.data);
                setCategories(response.data.categories);
                setTotalPages(response.data.total === 0 ? 1 : Math.ceil(response.data.total / pageSize));
                setPage(response.data.page);
            })
            .catch((error) => {
                console.error(error);
            });

    }
    , [search, status]);


    function prevPage() {
        if (page > 1) {
            setPage(page - 1);
        }
    }

    function nextPage() {
        if (page < totalPages) {
            setPage(page + 1);
        }
    }
        


    return (
            <div className="container mx-auto px-4 sm:px-8">
                <div className="py-8">
                    <div>
                        <h2 className="text-2xl font-semibold leading-tight">Categories</h2>
                    </div>
                    <div className="my-2 flex flex-row">
                        <div className="flex flex-row mb-1 sm:mb-0">
                            <div className="relative">
                                <select
                                onChange={(e) => setPageSize(Number(e.target.value))}
                                    className="appearance-none h-full rounded-l border block appearance-none w-full bg-base-200 border-base-100 py-2 px-4 pr-8 leading-tight focus:outline-none">
                                    <option>5</option>
                                    <option>10</option>
                                    <option>20</option>
                                </select>
                                <div
                                    className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                                    </svg>
                                </div>
                            </div>
                            <div className="relative">
                                <select
                                onChange={(e) => setStatus(e.target.value)}
                                    className="appearance-none h-full rounded-r border-t sm:rounded-r-none sm:border-r-0 border-r border-b block appearance-none w-full bg-base-200 py-2 px-4 pr-8 leading-tight">
                                    <option value="all">All</option>
                                    <option value="active">Active</option>
                                    <option value="inactive">Inactive</option>
                                </select>
                            </div>
                        </div>
                        <div className="block relative">
                        <div className="pointer-events-none absolute inset-y-0 left-0 mb-1 flex items-center px-2 text-gray-700">
                                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                                </div>
                            <input placeholder="Search"
                            onChange={(e) => setSearch(e.target.value)}
                                className="appearance-none rounded-r rounded-l sm:rounded-l-none border border-gray-400 border-b hidden sm:block pl-8 pr-6 py-2 bg-white text-sm" />
                        </div>
                        <div className=" flex flex-grow">
                    </div>
                    <div className="flex flex-row mb-1 sm:mb-0">
                        <button type="button" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                            New
                        </button>
                    </div>
                    </div>
                    <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
                        <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
                            <table className="min-w-full leading-normal">
                                <thead>
                                    <tr>
                                        <th
                                            className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                            User
                                        </th>
                                        <th
                                            className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                            Rol
                                        </th>
                                        <th
                                            className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                            Created at
                                        </th>
                                        <th
                                            className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                            Status
                                        </th>
                                        <th
                                            className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                            Actions
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {categories.map((category) => (
                                        <tr key={category.id}>
                                            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                <div className="flex items-center">
                                                    <div className="ml-3">
                                                        <p className="text-gray-900 whitespace-no-wrap">
                                                            {category.title ? category.title : 'No title'}
                                                        </p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                <p className="text-gray-900 whitespace-no-wrap">{category.slug}</p>
                                            </td>
                                            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                <p className="text-gray-900 whitespace-no-wrap">
                                                    {category.createdAt ? new Date(category.createdAt).toLocaleDateString() : ''}
                                                </p>
                                            </td>
                                            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                <span
                                                    className={`relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight`}>
                                                    <span aria-hidden
                                                        className={`absolute inset-0 bg-green-200 opacity-50 rounded-full`}></span>
                                                    <span className="relative">active</span>
                                                </span>
                                            </td>
                                            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                <div className="flex items-center gap-2">
                                                    <button
                                                        onClick={() => router.push(`/admin/users/${category.id}`)}
                                                        className="btn btn-primary">
                                                        <FontAwesomeIcon icon={faEdit} />
                                                    </button>
                                                    <button disabled={!session}
                                                        className="btn btn-danger">
                                                        <FontAwesomeIcon icon={faTrash} />
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                            <div
                                className="px-5 py-5 bg-white border-t flex flex-col xs:flex-row items-center xs:justify-between          ">
                                <span className="text-xs xs:text-sm text-gray-900">
                                    Showing {page} to {pageSize} of {categories.length} Entries
                                </span>
                                <div className="inline-flex mt-2 xs:mt-0">
                                    <button
                                     onClick={prevPage}
                                     disabled={page === 1}
                                        className={"text-sm font-semibold py-2 px-4 rounded-l " + (page === 1 ? 'bg-gray-300' : 'bg-gray-400 hover:bg-gray-500 text-gray-800')}>
                                        Prev
                                    </button>
                                    <button
                                        onClick={nextPage}
                                        disabled={totalPages === 0 || page === totalPages}
                                        className={"text-sm font-semibold py-2 px-4 rounded-r " + (page === Math.ceil(categories.length / pageSize) ? 'bg-gray-300' : 'bg-gray-400 hover:bg-gray-500 text-gray-800')}>
                                        Next
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    );
};

export default CategoriesTable;