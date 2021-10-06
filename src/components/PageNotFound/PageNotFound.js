import React from 'react';
import msmnotFoundjpg from '../../images/msmnotFoundjpg.jpg';
import './PageNotFound.scss';

export const PageNotFound = () => {
    return (
        <div className="pageNotFound">
            <img className="pageNotFound-img" src={ msmnotFoundjpg } alt="pageNotFound" />
        </div>
    )
}
