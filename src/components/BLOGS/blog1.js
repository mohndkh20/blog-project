import { useEffect, useState } from "react"
import Post from "../POST/post"
import Loading from "../LOADING/load"
import BlogWrapper from "./blog2"

const Blog1 = () => {
    let [posts, setPosts] = useState([])
    let [currentPage, setCurrentPage] = useState(0)
    let [loading, setLoading] = useState(true)
    let [showMore, setShowMore] = useState(true)

    useEffect(() => {
        loadMorePosts()
        window.scrollTo(0, 0)
    }, [])

    var loadMorePosts = () => {
        setLoading(true)
        fetch(`https://www.wp-course.site/wp-json/youthink/posts?page=${currentPage + 1}`)
            .then((response) => {
                
                return response.json().then((json) => {

                    const newPosts = json?.data
                    if (Array.isArray(newPosts) && newPosts?.length > 0) {
                        setPosts([...posts, ...newPosts]);
                        setCurrentPage(json?.meta?.current_page)
                    } else {
                        setShowMore(false)
                    }
                    setLoading(false)
                })
            })
            .catch(event => console.log(event))
    }

    return (
        <BlogWrapper title='Our Latest Posts'>
            <div className="row">
                <div className="col">
                    {posts.map((post, i) => {
                        return <Post post={post} key={i} />
                    })}
                </div>
            </div>
            {loading && <div className="row">
                <div className="col">
                    <Loading />
                </div>
            </div>}
            {showMore && <div className="row">
                <div className="col text-center">
                    <button className="btn btn-primary" onClick={loadMorePosts}>Load More</button>
                </div>
            </div>}
        </BlogWrapper>
    )
};

export default Blog1