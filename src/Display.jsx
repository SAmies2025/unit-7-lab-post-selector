import { useEffect, useState } from "react";

export default function Display({ postID }) {
    const [post, setPost] = useState("");

      console.log('Display component received postID:', postID);

    useEffect(() => {
        async function doFetch() {
            const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postID}`);
            const data = await response.json();
            setPost(data);
            console.log(response)
        }
        doFetch();
    }, [postID]);

    return (
        <div>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
        </div>
    );
}