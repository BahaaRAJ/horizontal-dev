import React from "react"

type VideoProps = {
    videoSrc: string;
}

export const Video: React.FC<VideoProps> = ({ videoSrc }) =>  {
    return (
        <video width="320" height="240" preload="none" autoPlay muted >
            <source src={videoSrc} type="video/mp4" />
            Your browser does not support the video tag.
        </video>
    )
}
