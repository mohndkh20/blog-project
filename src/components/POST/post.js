import { Link } from "react-router-dom"


let Post = ({ post }) => {

    
    return (
        <div className="post position-relative">
            <div className="thumbnail">
                <img id="sideNa" src={post?.thumbnail} />
            </div>
            <div id="post2" className="postMeta text-center">
                <h3 className="mb-4">
                <Link to={"/blog/" + post.slug}><h3>{post.title}</h3></Link>

                </h3>
                <p className="text-small mb-3" dangerouslySetInnerHTML={{ __html: post.excerpt }}></p>
                <ul id="postd1" className="postDetails">
                    <div id="postDe1">
                        <li>
                            <i className="bi bi-eye"></i> {post.views}
                        </li>
                    </div>
                    <div id="postDe1">
                        <li>
                            <i className="bi bi-calendar-event"></i> {post.date}
                        </li>
                    </div>
                    <div id="postDe1">
                        <li>
                            <i className="bi bi-tags"></i> {post.tags.join(", ")}
                        </li>
                    </div>
                </ul>
            </div>
        </div>
    )
}

export default Post
