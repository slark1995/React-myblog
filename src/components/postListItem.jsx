import React from 'react';
import { Link } from "react-router-dom";
import './postListItem.css';
export default class PostListItem extends React.Component{
    

    render(){
        const title = 'asdsda';
        return(
            <div className = "itemwrapper">
                <h2 className = "title">
                    <Link to = '/posts/aa'>{title}</Link>
                </h2>

            </div>
        )
    }


}