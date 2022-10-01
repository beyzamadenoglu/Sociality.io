import React from 'react';
import PostCard from './PostCard';
import Data from '../contants/data/data.json';


function PublishRow(date) {
    return (
        <div style={{display: 'inline-flex'}}>
            {Data["posts_by_date"][date['date']].map((value) => {
                return (
                    <PostCard data={value}/>
                )
            })}
        </div>
    )
}

function Publishes() {
    return (
        <div>

            {Object.keys(Data["posts_by_date"]).map((value, index) => {

                return (
                    <div key={index}>
                        <h3>{value}</h3>
                        <PublishRow date={value} />
                    </div>
                )
            })}
        </div>
    )
}

export default Publishes