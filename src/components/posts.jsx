import React from 'react';
import Header from './header';
import './post.css';
import PostList from './postList';

export default class Posts extends React.Component{

    
    render(){
        //const { developers } = this.state;
        //console.log(this.state)
        return(
            <div className="posts">
                <Header open={true} />
                <PostList />
            </div>
        );
    };
};