import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
// Next Auth
import { useSession } from "next-auth/react"
import { signOut } from "next-auth/react"
import ThemeButton from '../default/NavbarPartial/ThemeButton';

const Navbar = () => {

    const { data: session } = useSession();

    return (
        <div className="navbar bg-base-300">
            <div className="flex-1">
                <Link href="/admin" className="flex items-center gap-2 mr-2">
                <FontAwesomeIcon icon={faCode} className="w-5 h-5" />
                <span className="text-lg font-bold">kuray.dev</span>
                </Link>
                <ThemeButton />
            </div>
            <div className="flex-none gap-2">
                <ul className="menu menu-horizontal px-1">
                    <li><Link href="/admin">Home</Link></li>
                    <li><Link href="/admin/users">Users</Link></li>
                    <li>
                        <details>
                            <summary>Blog</summary>
                            <ul className="bg-base-300 rounded-t-none p-2 z-10 mt-3">
                                <li><Link href="/admin/blog/posts/new">New Post</Link></li>
                                <li><Link href="/admin/blog/posts">Posts</Link></li>
                                <li><Link href="/admin/blog/categories">Categories</Link></li>
                                <li><Link href="/admin/blog/comments">Comments</Link></li>
                            </ul>
                        </details>
                    </li>
                    <li>
                        <details>
                            <summary>Projects</summary>
                            <ul className="bg-base-300 rounded-t-none p-2 z-10 mt-3">
                                <li><Link href="/admin/projects/new">New Project</Link></li>
                                <li><Link href="/admin/projects">Projects</Link></li>
                                <li><Link href="/admin/projects/tags">Tags</Link></li>
                            </ul>
                        </details>
                    </li>
                </ul>
                <div className="form-control">
                    <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" />
                </div>
                <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img
                                alt="Tailwind CSS Navbar component"
                                src={session?.user?.image || "https://avatars.dicebear.com/api/avataaars/kuray.svg"}
                                className="rounded-full w-10 h-10"
                            />
                        </div>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-300 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        <li>
                            <a className="justify-between">
                                Profile
                                <span className="badge">New</span>
                            </a>
                        </li>
                        <li><a>Settings</a></li>
                        <li><a>Logout</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;