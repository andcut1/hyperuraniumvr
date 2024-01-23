import React from 'react'

function VideoSection() {
    return (
        <div className="container mx-auto w-5/6 mb-10 flex justify-center items-center">
            <iframe src='https://www.youtube.com/embed/5AKl_cEB26c?si=rKFfkEvHZ8MqQFh6' className="w-full aspect-video" />
        </div>)
}

export default VideoSection