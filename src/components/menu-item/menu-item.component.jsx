import React from "react";
import { useLocation, useNavigate, useParams, useMatch } from "react-router-dom";
import './menu-item.styles.scss'

function MenuItem({ title, imageUrl, size, linkUrl }) {
    // let params = useParams();
    let location = useLocation();
    let navigate = useNavigate();
    // let match = useMatch('');
    // console.log(location);
    return (
        <div
            onClick={() => navigate(`${location.pathname}${linkUrl}`)}
            className={`${size} menu-item`}
        >
            <div
                style={{
                    backgroundImage: `url(${imageUrl})`
                }}
                className="background-image"
            />
            <div className="content">
                <h1 className="title">{title.toUpperCase()}</h1>
                <span className="subtitle">SHOPNOW</span>
            </div>
        </div>

    )
}

export default MenuItem;