import React from 'react';
import PostCard from './PostCard';
import Moment from 'moment';
import Data from '../contants/data/data.json';


function PublishRow(date) {
    var row_date = Moment(date.date).format('d MMMM YYYY');

    return (
        <>
            <p className="publish-row-date">{row_date}</p>

            <div className="publish-row">
                {Data["posts_by_date"][date['date']].map((value) => {
                    return (
                        <PostCard data={value} />
                    )
                })}
            </div>
        </>
    )
}

function Publishes() {
    return (
        <div>

            {Object.keys(Data["posts_by_date"]).map((value, index) => {
                return (
                    <div key={index}>
                        <PublishRow date={value} key={index} />
                    </div>
                )
            })}
        </div>
    )
}

export default Publishes