'use client';
import React, { useEffect } from 'react';
import { User } from '@/libs/prisma/prisma';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faImage } from '@fortawesome/free-solid-svg-icons';
import axiosInstance from '@/libs/http/axios';

interface UserDetailsProps {
    user?: User | null;
}

const UserDetails: React.FC<UserDetailsProps> = (props : UserDetailsProps) => {

    const [username, setUsername] = React.useState<string>("");
    const [name, setName] = React.useState<string>("");
    const [about, setAbout] = React.useState<string>("");
    const [image, setImage] = React.useState<string>("");

    useEffect(() => {
        if (!props) {
            return;
        };
        setUsername(props?.user?.username || "");
        setName(props?.user?.name || "");
        setAbout(props?.user?.about || "");
        setImage(props?.user?.image || "");

    } , [props]);

    // handle form submit
    const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        // save the
        axiosInstance.put(`/api/users/${props?.user?.id}`, {
            username: username,
            name: name,
            about: about,
            image: image
        }).then((response) => {
            console.log(response.data);
        }).catch((error) => {
            console.error(error);
        });
    }


    return (
        <div className="container mx-auto px-4 sm:px-8">
            <div className="py-8">
                <div>
                    <h2 className="text-2xl font-semibold leading-tight">User Details</h2>
                </div>
                <form>
                    <div className="space-y-12 mt-2">
                        <div className="border-b border-gray-900/10 pb-12 bg-base-300 p-4 rounded-lg">
                            <h2 className="text-base font-semibold leading-7 ">Profile</h2>
                            <p className="mt-1 text-sm leading-6 ">
                                This information will be displayed publicly so be careful what you share.
                            </p>

                            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                                <div className="sm:col-span-4">
                                    <label htmlFor="username" className="block text-sm font-medium leading-6 ">
                                        Username
                                    </label>
                                    <div className="mt-2">
                                        <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 bg-white sm:max-w-md">
                                            <span className="flex select-none items-center pl-3 pt-[0.5px] text-gray-500 sm:text-sm">kuray.dev/users/</span>
                                            <input
                                                id="username"
                                                name="username"
                                                type="text"
                                                value={username}
                                                onChange={(e) => setUsername(e.target.value)}
                                                placeholder="janesmith"
                                                autoComplete="username"
                                                className="block flex-1 border-0 bg-transparent py-1.5 pl-1  placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div className="sm:col-span-4">
                                    <label htmlFor="name" className="block text-sm font-medium leading-6 ">
                                        Name
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            id="name"
                                            name="name"
                                            type="text"
                                            value={name}
                                            onChange={(e) => setName(e.target.value)}
                                            placeholder="Jane Smith"
                                            autoComplete="name"
                                            className="block w-full rounded-md border-0 py-1.5  shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        />
                                    </div>
                                </div>

                                <div className="col-span-full">
                                    <label htmlFor="about" className="block text-sm font-medium leading-6 ">
                                        About
                                    </label>
                                    <div className="mt-2">
                                        <textarea
                                            id="about"
                                            name="about"
                                            rows={3}
                                            placeholder="You can write a few sentences about yourself."
                                            value={about}
                                            onChange={(e) => setAbout(e.target.value)}
                                            className="block w-full rounded-md border-0 py-1.5  shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        />
                                    </div>
                                    <p className="mt-3 text-sm leading-6 ">Write a few sentences about yourself.</p>
                                </div>

                                <div className="col-span-full">
                                    <label htmlFor="photo" className="block text-sm font-medium leading-6 ">
                                        Photo
                                    </label>
                                    <div className="mt-2 flex items-center gap-x-3">
                                        {image ? (
                                            <img src={image} alt="User" className="h-12 w-12 rounded-full" />
                                        ) : (
                                            <div className="h-12 w-12 bg-gray-300 rounded-full"></div>
                                        )}
                                        <button
                                            type="button"
                                            className="rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold  shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                                        >
                                            Change
                                        </button>
                                    </div>
                                </div>

                                <div className="col-span-full">
                                    <label htmlFor="cover-photo" className="block text-sm font-medium leading-6 ">
                                        Cover photo
                                    </label>
                                    <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                                        <div className="text-center">
                                            <FontAwesomeIcon icon={faImage} className="h-12 w-12 text-gray-300 mx-auto" />
                                            <div className="mt-4 flex text-sm leading-6 ">
                                                <label
                                                    htmlFor="file-upload"
                                                    className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                                                >
                                                    <span>Upload a file</span>
                                                    <input id="file-upload" name="file-upload" type="file" className="sr-only" />
                                                </label>
                                                <p className="pl-1">or drag and drop</p>
                                            </div>
                                            <p className="text-xs leading-5 ">PNG, JPG, GIF up to 10MB</p>
                                        </div>
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

export default UserDetails;