import React from 'react';
import PostListItem from './postListItem'
import { fetchPostList } from "../lib/api.js";
import './post.css';
export default class PostList extends React.Component{

    constructor(props){
        super(props)

        this.state = {
            posts:[],
        }
    }
    
    componentDidMount() {
        this.getPosts();
    }

    getPosts = () => {
        fetchPostList().then(data => {
            let uuids = [];
            for (let i in data){
                uuids.push(i);
            }

            for (let j = 0; j < uuids.length; j++) {  
                Object.values(data)[j]['uuid'] = uuids[j];
            }  

            //console.log(Object.values(data));
            let dataArray = Object.values(data)
            this.setState( {posts:dataArray} );
        })
      }

    
    render(){
        //console.log(this.state.posts);
        let postList = this.state.posts.map(i => <PostListItem key = {i.uuid} uuid = {i.uuid} id ={i.id} title = {i.title} excerpt = {i.excerpt} /> );
        return(
            <div className = "postlist">
                {postList? postList: null}
            </div>
        )
    }


}