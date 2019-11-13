import React from 'react';
import Header from './header';
import './post.css';
import { fetchPostList } from "../lib/api.js";

export default class Posts extends React.Component{

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
            console.log(data);
        })
      }
    
    

    render(){
        //const { developers } = this.state;
        //console.log(this.state)
        return(
            <div className="Posts">
                <Header open={true} />
            </div>
        );
    };
};