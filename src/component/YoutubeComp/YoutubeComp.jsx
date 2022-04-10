import React from "react";
import './YoutubeComp.css';

const YoutubeComp = (props) => {
    return (
        <div className="youtube-wrapper">
            <div className="img-thumb">
                <img src="https://i.ytimg.com/vi/l3bbE8B7g9E/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDxuXfVMtSU5FeWv4Mzv2pfQaut5g" alt=""/>
                <p className="time">{props.time}</p>
            </div>
            <p className="title">{props.title}</p>
            <p className="desc">{props.desc}</p>
        </div>
    )
}

//memberikan nilai default props
YoutubeComp.defaultProps = {
    time:'00.00',
    title: 'Title Here',
    desc: '2x ditonton. 2 hari yang lalu'
}

export default YoutubeComp