"use client";

import React, { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import Profile from "@/components/Profile";

const UserProfile = ({params}) => {
  const searchParams = useSearchParams();
  const userName = searchParams.get("name");

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch(`/api/users/${params?.id}/posts`);

      const data = await response.json();

      setPosts(data);
    };

    if (params?.id) fetchPosts();
  }, []);

  return (
    <Profile
      name={userName}
      desc={`Welcome to ${userName} profile page`}
      data={posts}
    />
  );
};

export default UserProfile;
