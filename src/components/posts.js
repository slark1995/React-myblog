import React from 'react';
import Header from './header';
import './post.css';

class Posts extends React.Component{
    render(){
        return(
            <div className="Posts">
                <Header open={true} />
            </div>
        );
    };
};

export default Posts;