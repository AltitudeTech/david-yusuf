import React, { Component } from 'react';

export default class extends Component {
    render(){
        return(
            <div className="bg-home page-header">
                <div className="header-container">
                <div className="video-container">
                    <video
                    preload="true"
                    autoPlay="autoplay"
                    loop="loop"
                    volume="0"
                    poster="/static/images/home-background.svg"
                    >
                    <source src="/static/video/davidyusuf.mp4" type="video/mp4" />
                    <source src="/static/video/davidyusuf.webm" type="video/webm" />
                    <source src="/static/video/davidyusuf.ogg" type="video/ogg" />
                    </video>
                </div>
                </div>
            </div>
        );
    }
}