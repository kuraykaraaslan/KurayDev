'use client';
import React , { useState, useEffect } from 'react';
import axios from '@/libs/http/axios';
import { useSession, SessionProvider } from 'next-auth/react';
import { User } from '@prisma/client';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash, faUser } from '@fortawesome/free-solid-svg-icons';

interface Props {
    // Add any props you need here
}

const UsersTable: React.FC = () => {

    const session = useSession();

    const [users, setUsers] = useState<User[]>([]);
    const [search, setSearch] = useState('');
    const [status, setStatus] = useState('all');
    const [page, setPage] = useState(1);
    const [pageSize, setPageSize] = useState(5);

    useEffect(() => {
        if (!session) return;
        if (users.length > 0) return;
        axios.get('/api/user')
            .then((response) => {
                setUsers(response.data);
                console.log(response.data);
            })
            .catch((error) => {
                console.error(error);
            });
    }, []);

    //create observable
    const filterUsers = () => {
        return users.filter((user: User) => {
            if (status === 'all') {
                return user;
            }
            return user.status === status;
        }
        ).filter((user: User) => {
            if (search === '' || search === null || search.length < 3) {
                return user;
            }
            return user.name?.toLowerCase().includes(search.toLowerCase()) || user.email.toLowerCase().includes(search.toLowerCase());
        });
    }
    

    function prevPage() {
        if (page > 1) {
            setPage(page - 1);
        }
    }

    function nextPage() {
        if (page < Math.ceil(users.length / pageSize)) {
            setPage(page + 1);
        }
    }
        


    return (
            <div className="container mx-auto px-4 sm:px-8">
                <div className="py-8">
                    <div>
                        <h2 className="text-2xl font-semibold leading-tight">Users</h2>
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
                                    className="appearance-none h-full rounded-r border-t sm:rounded-r-none sm:border-r-0 border-r border-b block appearance-none w-full bg-white border-gray-400 text-gray-700 py-2 px-4 pr-8 leading-tight focus:outline-none focus:border-l focus:border-r focus:bg-white focus:border-gray-500">
                                    <option value="all">All</option>
                                    <option value="active">Active</option>
                                    <option value="inactive">Inactive</option>
                                </select>
                                <div
                                    className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <div className="block relative">
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
                                    {filterUsers().slice((page - 1) * pageSize, page * pageSize).map((user) => (
                                        <tr key={user.id}>
                                            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                <div className="flex items-center">
                                                    <div className="flex-shrink-0 w-10 h-10">
                                                        {user.image ? <img className="w-full h-full rounded-full"
                                                            src={user.image} alt="" />
                                                            : <FontAwesomeIcon icon={faUser} className="w-full h-full rounded-full" />}
                                                    </div>
                                                    <div className="ml-3">
                                                        <p className="text-gray-900 whitespace-no-wrap">
                                                            {user.name ? user.name : user.email}
                                                        </p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                <p className="text-gray-900 whitespace-no-wrap">{user.role}</p>
                                            </td>
                                            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                <p className="text-gray-900 whitespace-no-wrap">
                                                    {user.createdAt ? new Date(user.createdAt).toLocaleDateString() : ''}
                                                </p>
                                            </td>
                                            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                <span
                                                    className={`relative inline-block px-3 py-1 font-semibold text-${user.status === 'ACTIVE' ? 'green' : 'red'}-900 leading-tight`}>
                                                    <span aria-hidden
                                                        className={`absolute inset-0 bg-${user.status === 'active' ? 'green' : 'red'}-200 opacity-50 rounded-full`}></span>
                                                    <span className="relative">{user.status === 'active' ? 'Active' : 'Inactive'} </span>                                                </span>
                                            </td>
                                            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                <div className="flex items-center gap-2">
                                                    <button
                                                        className="btn btn-primary">
                                                        <FontAwesomeIcon icon={faEdit} />
                                                    </button>
                                                    <button disabled={user.role === 'ADMIN'}
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
                                    Showing {page} to {pageSize} of {users.length} Entries
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
                                        disabled={page === Math.ceil(users.length / pageSize)}
                                        className={"text-sm font-semibold py-2 px-4 rounded-r " + (page === Math.ceil(users.length / pageSize) ? 'bg-gray-300' : 'bg-gray-400 hover:bg-gray-500 text-gray-800')}>
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

export default UsersTable;