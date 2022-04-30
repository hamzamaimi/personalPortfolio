import React from "react";
import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";

const Blog = () => {
    const [redirect, setRedirect] = useState(null);
    useEffect(() => {
        setTimeout(function () {
            if (!redirect) {
                setRedirect(true)
            }
        }, 2000);

    }, [redirect])

    if (redirect) {
        return (
            <Navigate to="/" />
        )
    } else {
        return (
            <>
                <style dangerouslySetInnerHTML={{ __html: "\n                    #root {\n                        height: 100%;\n}\n                    html {\n                        height: 100%;\n}\n                    body {\n                        height: 100%;\n}\n                " }} />
                <div className="container-fluid h-100">
                    <div className="row centra">
                        <div className="col text-center h-100">
                            <img id="comingSoonBlog" src="images/coming_soon.png" alt="coming soon" />
                            <div>
                                <img src="images/loading.gif" alt="loading" />
                                <div>you will be redirect in 3s...</div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default Blog;
