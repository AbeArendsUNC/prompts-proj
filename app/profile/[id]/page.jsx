"use client";

import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';

import Profile from '@components/Profile';

const UserProfile = ({ params }) => {
    const searchParams = useSearchParams();
    const userName = searchParams.get('name');

    const [userPosts, setuserPosts] = useState([]);

    useEffect(() => {
        const fetchPosts = async () => {
            const response = await fetch(`/api/users/${params.id}/posts`);
            const data = await response.json();

            setuserPosts(data);
        };

        if (params?.id) fetchPosts();
    }, [params.id]);


    return (
        <Profile
            name={`${userName}'s`}
            desc={`Read ${userName}'s shit takes here:`}
            data={userPosts}
        />
    );
};

export default UserProfile;