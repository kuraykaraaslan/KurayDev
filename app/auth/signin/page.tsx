import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import React, { useState, useEffect } from "react";

import { signIn, auth, providerMap } from "@/auth";
import { AuthError } from "next-auth";
import { redirect } from "next/navigation";

export default function Example() {

    const SIGNIN_ERROR_URL = "/auth/signin/error";

    return (
        <>
            <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <h1 className="mt-6 text-3xl font-bold text-center">
                        <FontAwesomeIcon icon={faCode} className="mr-2 w-8 h-8 inline-block" />
                        kuray.dev
                    </h1>
                    <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight">
                        Sign in to your account
                    </h2>
                </div>

                <div className="bg-base-200 p-4 rounded-box mt-10 sm:mx-auto sm:w-full sm:max-w-sm divide-y">
                    <form action="#" method="POST" className="space-y-6">
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium leading-6">
                                Email address
                            </label>
                            <div className="mt-2">
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    required
                                    autoComplete="email"
                                    className="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        <div>
                            <div className="flex items-center justify-between">
                                <label htmlFor="password" className="block text-sm font-medium leading-6">
                                    Password
                                </label>
                                <div className="text-sm">
                                    <a href="#" className="font-semibold">
                                        Forgot password?
                                    </a>
                                </div>
                            </div>
                            <div className="mt-2">
                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    required
                                    autoComplete="current-password"
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        <div>
                            <button
                                type="submit"
                                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                                Sign in
                            </button>
                        </div>
                    </form>

                    <div className="flex flex-col gap-2 mt-2 pt-2">
                        {Object.values(providerMap).map((provider) => (
                            <form
                                action={async () => {
                                    "use server"
                                    try {
                                        await signIn(provider.id)
                                    } catch (error: any) {
                                        // Signin can fail for a number of reasons, such as the user
                                        // not existing, or the user not having the correct role.
                                        // In some cases, you may want to redirect to a custom error
                                        if (error instanceof AuthError) {
                                            return redirect(`${SIGNIN_ERROR_URL}?error=${error.type}`)
                                        }

                                        // Otherwise if a redirects happens NextJS can handle it
                                        // so you can just re-thrown the error and let NextJS handle it.
                                        // Docs:
                                        // https://nextjs.org/docs/app/api-reference/functions/redirect#server-component
                                        throw error
                                    }
                                }}
                            >
                                <button type="submit" className="flex w-full justify-center rounded-md px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
                                    style={{ backgroundColor: provider.bgColor, color: provider.color }}    >

                                    <span className="flex items-center justify-center" >
                                        <FontAwesomeIcon icon={provider.icon} className="mr-2 w-4 h-4 inline-block" />
                                        Sign in with {provider.name}
                                    </span>
                                </button>
                            </form>
                        ))}


                        <p className="mt-1 text-center text-sm">
                            Not a member?{' '}
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}
