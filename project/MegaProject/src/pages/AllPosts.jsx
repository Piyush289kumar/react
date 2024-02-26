import React, { useState, useEffect } from "react";
import { Container, PostCard } from "../components";
import dbservice from "../appwrite/dbconfig";
import { useNavigate } from "react-router-dom";


function AllPosts() {

    const [allPosts, setAllPosts] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        dbservice.getPosts()
            .then((posts) => {
                if (posts) {
                    setAllPosts(posts.documents)
                } else {
                    setAllPosts([])
                    navigate('/')
                }
            })
    }, [])


    return (
        <div className="w-full py-8">
            <Container>
                <div className="flex flex-wrap">
                    {
                        allPosts.map((post) => (
                            <div key={post.$id} className="p-2 w-1/4">
                                <PostCard {...post} />
                            </div>
                        ))
                    }
                </div>
            </Container>
        </div>
    )
}

export default AllPosts