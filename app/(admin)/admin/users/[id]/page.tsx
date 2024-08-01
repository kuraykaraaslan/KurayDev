'use client';
import UserDetails from '@/components/admin/details/UserDetails';
import axios from '@/libs/http/axios';
import { useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';


const UsernamePage = () => {

    // Get the username from the URL
    const {id} = useParams();
    const [user, setUser] = useState(null);


    useEffect(() => {

        if (!id) {
            return;
        }
        // Fetch the user data
        axios.get(`/api/users/${id}`).then((response) => {
            if (response.status === 200) {
                setUser(response.data);
            }
            else if (response.status === 404) {
                alert("User not found");
            }
        } ).catch((error) => {
            console.error(error);
        } );
    } , [id] );


    return (
        <>
            <UserDetails user={user} />

        </>
    );
};

export default UsernamePage;

