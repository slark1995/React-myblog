import React from 'react';
import PostListItem from './postListItem'
import { fetchPostList } from "../lib/api.js";
import './post.css';
export default class PostList extends React.Component{

    constructor(props){
        super(props)

        this.state = {
            posts:[]
        }
    }
    
    componentDidMount() {
        this.getPosts();
    }

    getPosts = () => {
        fetchPostList().then(data => {
            //const id = "-Ltvqtd3hWZ6eDCIHuxz";
            console.log(Object.values(data));
            let dataArray = Object.values(data)
            this.setState( {posts:dataArray} );
        })
      }

    
    render(){
        console.log(this.state.posts);
        let postList = this.state.posts.map(i => <PostListItem title = {i.title} excerpt = {i.excerpt} /> );
        //let postList = <PostListItem title = 'title1' />;
        return(
            <div className = "postlist">
                {postList? postList: null}
            </div>
        )
    }


}