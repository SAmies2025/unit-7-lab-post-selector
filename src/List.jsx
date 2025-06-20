import { useEffect, useState } from "react";

export default function List ({ setPostID }) {
    const [titles, setTitles] = useState([]);
    useEffect(()=>{
        async function doFetch() {
            if (titles.length === 0) {
                const response = await fetch(`https://jsonplaceholder.typicode.com/posts`);
                const data = await response.json();
                setTitles(data);
            }
        }
        doFetch();
    }, [titles]);

    

    return (
        <div>
            <h1>Post Titles</h1>
            <div>
                {titles.map((post) => (
                    <div className="post"
                        key={post.id}
                        onClick={() => {
                            console.log(post.id);
                            setPostID(post.id);
                        }}
                    >
                        • {post.title}
                    </div>
                ))}
            </div>
        </div>
    )
}