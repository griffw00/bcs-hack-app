import React from "react";
import videoBG from "../assets/small_background_video.mp4"

function Homepage() {
    return(
        <div className="homepage">
            <div className="video_overlay"></div>
            <video src={ videoBG } autoPlay loop muted />
            <div className="homepage_content">
                <h1>Welcome </h1>
                <h2>to learning redefined</h2>
            </div>
        </div>
    );
}

export default Homepage;