import Loading from "../LOADING/load"
import { useEffect, useState } from "react"

const Sidebar = () => {
    let [comments, setComments] = useState([])
    let [loading, setLoading] = useState(true)

    useEffect(() => {
        fetch("https://www.wp-course.site/wp-json/wp/v2/comments")
            .then((response) => {
                response.json()
                    .then(json => {setComments(json)})
                setLoading(false)
                    .catch()
            })
            .catch()
    }, [])

    return (
        <div id="sidebar" className="col-md-4 mt-5 mt-md-0">
            <div className="sidebar-content">
                <h4 className="mb-4">Latest Comments</h4>
                {loading && <Loading />}
                {comments.map((comment, i) => {
                    return <div key={i} className="comment d-flex align-items-start mb-4">
                        <div className="avatar me-2">
                            <img src={comment.author_avatar_urls["24"]} />
                        </div>
                        <div>
                            <div className="mb-0 fw-bold">{comment.author_name}</div>
                            <div className="comment-content" dangerouslySetInnerHTML={{ __html: comment?.content?.rendered }}></div>
                        </div>
                    </div>
                })
                }
            </div>
        </div>
    )
};

export default Sidebar