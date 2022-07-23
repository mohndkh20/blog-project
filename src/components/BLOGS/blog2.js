import { Fragment } from "react"
import Sidebar from "../SIDEBAR/side"

const Blog2 = ({ title, children }) => {
    return (
        <Fragment>
            <section className="py-5 mb-5 bg-light">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <h1 dangerouslySetInnerHTML={{ __html: title }}></h1>
                        </div>
                    </div>
                </div>
            </section>
            <section className="mb-5">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8">{children}</div>
                        <Sidebar />
                    </div>
                </div>
            </section>
        </Fragment>
    )
}

export default Blog2

