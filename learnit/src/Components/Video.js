import React from 'react'

function Video({title,url}) {
  return (
    <>
      <div className="video-block">
            <span className="name-rog">
              <div className="hr-line" /> {title}
            </span>
            <div className="section-how">
              <span className="num-video">
                <span className="video-icons" />
              </span>
              <div className="reved">
                <div className="arrow-roadx" />
                <span className="video-center">
                  <iframe
                    width={703}
                    height={400}
                    src={url}
                    frameBorder={0}
                    allow="autoplay; encrypted-media"
                    allowFullScreen=""
                  />
                </span>
              </div>
            </div>
          </div>
    </>
  )
}

export default Video
