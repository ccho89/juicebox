import React from "react";
import AspectRatio from "@mui/joy/AspectRatio";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import CardOverflow from "@mui/joy/CardOverflow";
import Divider from "@mui/joy/Divider";
import Typography from "@mui/joy/Typography";
import { Link } from "react-router-dom";
import juiceImg from '../images/juicepic.jpg'

const OverflowCard = ({ user }) => {
  return (
    <Card variant="outlined" sx={{ width: 320, height: 400 }}>
      <CardOverflow>
        <AspectRatio ratio="2">
          <img src={juiceImg} alt="" />
        </AspectRatio>
      </CardOverflow>
      <CardContent orientation="vertical" sx={{ textAlign: 'center' }}>
        <Typography level="title-md">{user.name}</Typography>
        <Link to={`/users/${user.id}`}>
          <Typography level="body-sm">Username: {user.username}</Typography>
        </Link>
        <Typography level="body-sm">{user.location}</Typography>
      </CardContent>
      <CardOverflow variant="soft" sx={{ bgcolor: "background.level1" }}>
        <Divider inset="context" />
        <CardContent orientation="vertical" sx={{ textAlign: 'center' }}>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                {user.posts.map((post) => (
                  <li key={post.id}>
                    <Link to={`/posts/${post.id}`}>
                      <Typography level="title-xs">{post.title}</Typography>
                    </Link>
                    <Typography level="body-xs">{post.content}</Typography>
                    <ul style={{ listStyle: 'none', padding: 0 }}>
                      {post.tags.map((tag) => (
                        <li key={tag.id}>
                          <Typography level="body-xs">{tag.name}</Typography>
                        </li>
                      ))}
                    </ul>
                  </li>
                ))}
              </ul>
            </ul>
          </div>
        </CardContent>
      </CardOverflow>
    </Card>
  );
};

export default OverflowCard;