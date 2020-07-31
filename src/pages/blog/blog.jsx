// package imports
import React from "react";

// component imports
import Header from "../../components/common/header/header";
import BlogBody from "../../components/blog/bog-body";

function Blog(props) {
    const data = props.resumeData;
    return (
        <div>
            <Header
                image={"https://i.imgur.com/EUXQxro.jpg"}
                title={"Blog"}
                lite={false}
            ></Header>
            <BlogBody></BlogBody>
        </div>
    );
}

export default Blog;
