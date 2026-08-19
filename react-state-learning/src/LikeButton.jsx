import "./LikeButton.css";
import { useState } from "react";
function LikeButton(){
    let [isLiked,setIsLiked]=useState(false);
    let [clicks,setclicks]=useState(0);

    let toggleLike = ()=>{
        setIsLiked(!isLiked);
        setclicks(clicks+1)

    };
    let likeStyle = {color:"red"};
    return (
        <div className="like">
            <p>clicks : {clicks}</p>
            <p onClick={toggleLike}>
                {
                    isLiked ? <i className="fa-solid fa-heart" style={likeStyle}></i> : <i className="fa-regular fa-heart"></i>
                }

            </p>
        </div>
    )
}
export default LikeButton;