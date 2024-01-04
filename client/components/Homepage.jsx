import React, { useState, useEffect } from 'react';
import Grid from '@mui/joy/Grid';
import OverflowCard from './OverflowCard';

const Homepage = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        // Fetch user data
        const usersResponse = await fetch("http://localhost:3000/api/users");
        const usersData = await usersResponse.json();

        // Fetch user posts data
        const postsResponse = await fetch("http://localhost:3000/api/posts");
        const postsData = await postsResponse.json();

        // Combine user and post data
        const usersWithPosts = usersData.users.map(user => {
          const userPosts = postsData.posts.filter(post => post.author.id === user.id);
          return { ...user, posts: userPosts };
        });

        setUsers(usersWithPosts);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    getData();
  }, []);

  return (
    <Grid container spacing={6} sx={{ flexGrow: 1 }}>
      {users.map((user) => (
        // <Grid key={user.id} xs={user.isFeatured ? 8 : 4}>
        <Grid key={user.id} item xs={12} sm={6} md={4} lg={3} xl={2}>
          <OverflowCard user={user} />
        </Grid>
      ))}
    </Grid>
  );
};

export default Homepage;