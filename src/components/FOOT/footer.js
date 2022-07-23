import { useRef, useState } from "react"

const Footer = () => {
    let emailAD = useRef()
    let [subRes, setSubRes] = useState({})
    let [loading, setLoading] = useState(false)

    var Submit2 = (e) => {
        e.preventDefault()
    }

    var Email2 = () => {
        setLoading(true)
        fetch("https://www.wp-course.site/wp-json/youthink/subscribe", {
            method: "post",
            body: JSON.stringify({ email: emailAD.current.value }),
            headers: {
                "Content-Type": "application/json"
            }
        }).then((response) => {
            response.json().then((json) => {
                setSubRes(json)
                setLoading(false)   
            }).catch(e => console.log(e))
        })
            .catch(e => console.log(e))
    }

    return (
        <div className="footer-basic">
            <footer id="fot">
                <div className="col-lg-4 mt-3 mt-lg-0 p-5" id="for" >
                    <form>
                        <h4>Subscribe to our newsletter</h4>
                        <div className="d-flex w-100 gap-2 p-10">
                            <label className="visually-hidden">Email address</label>
                            <input type="text" className="form-control" placeholder="Email address" ref={emailAD} />
                            <button disabled={loading} className="btn btn-primary" type="button" onClick={Email2}>
                                {loading ? <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                                    : <>Subscribe</>}
                            </button>
                        </div>
                        {subRes.message && <p style={{ color: subRes.success ? "blue" : "red" }}>
                            {subRes.message}
                        </p>}
                    </form>
                </div>
                <div id="dd">
                    <div className="social">
                        <a href="#"><i className="icon ion-social-instagram">
                        </i></a><a href="#"><i className="icon ion-social-snapchat"></i>
                        </a><a href="#"><i className="icon ion-social-twitter"></i></a><a href="#">
                        <i className="icon ion-social-facebook"></i></a></div>
                    <ul className="list-inline" id="list">
                        <li className="list-inline-item"><a id="list1" href="#">About US</a></li>
                        <li className="list-inline-item"><a id="list1" href="#">Contact US</a></li>
                    </ul>
                </div>
            </footer >
        </div>
    )
};

export default Footer