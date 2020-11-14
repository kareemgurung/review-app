import React, { useState } from 'react';
import people from "../data";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";

function Review() {

    const [index, setIndex] = useState(0);
    const {name, job, image, text} = people[index];

    function handleDecrease() {
        if (index === 0) {
            setIndex(people.length - 1);
        } else {
            setIndex(index - 1);
        }
    }
    function handleIncrease() {
        if (index === (people.length - 1)) {
            setIndex(0);
        } else {
            setIndex(index + 1);
        }
    }
    function randomReview() {
        const newIndex = Math.floor(Math.random()*(people.length));
        setIndex(newIndex);
    }
    return (
        <article className="review">
                <div className="img-container">
                    <img src={image} alt={name} className="person-img" />
                </div>
                <div>
                    <h4 className="author">{name}</h4>
                    <p className="job">{job}</p>
                    <p className="info">{text}</p>
                </div>
                <div>
                    <button 
                        className="prev-btn" 
                        onClick={handleDecrease}
                    >
                        <ArrowBackIosIcon />
                    </button>
                    <button 
                        className="next-btn" 
                        onClick={handleIncrease}
                    >
                        <ArrowForwardIosIcon />
                    </button>
                </div>
                <button 
                    className="random-btn"
                    onClick={randomReview}
                >
                    Surprise Me
                </button>
        </article>
    )
}

export default Review;