import React from 'react';
import './Style/BackToTop.scss';

let BackToTopClickHandler = () => {
    scrollTo(0,0)
}

const BackToTop = () => {
    return(
        <div onClick={BackToTopClickHandler} id='back__to__top' className='back__to__top'>
            <svg className="fas fa-arrow-up" />
        </div>
    )
}

export default BackToTop