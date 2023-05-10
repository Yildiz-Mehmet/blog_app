import React, { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase-config";

const Home = () => {
  const [postLists, setPostLists] = useState([]);
  const postsCollectionRef = collection(db, "posts");

  useEffect(() => {
    const getPosts = async () => {
      const data = await getDocs(postsCollectionRef);
      setPostLists(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
  }, []);

  return (
    <div className="homePage">
      {postLists.map((post) => {
        return <div className="post">{post.title}</div>;
      })}
    </div>
  );
};

export default Home;
