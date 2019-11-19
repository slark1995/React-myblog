import React from 'react';
import Header from './header';
import { fetchPost } from "../lib/api.js";
import ReactMarkdown from "react-markdown";
import MarkdownParser from "../lib/markdown-parser";
import "./postRead.css"

export default class PostRead extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            post:''
        }
    }

    componentDidMount() {
        this.getPosts();
    }

    getPosts = () => {
        let id = "-Lu-c38V8wTeCkOwJxSM";
        console.log(id);
        fetchPost(id).then(data => {
            this.setState( {post:data} );
            console.log(this.state.post);
            console.log(this.state.post.content);
        })
      }

    render(){
        
        if(this.state.post === undefined){
            return;
        }

        // 这里加上 ”“ 是把content 从 markdown 转换为 string,
        //因为下面MarkdownParser.render后面只能加string
        const content = (this.state.post.content) + "";
        let htmlOutput = MarkdownParser.render(content);
        const renderResult = {
             __html: htmlOutput
            };

        return(
            <div className = 'postRead'>
                <Header open={true} />
                <div className = "text">
                    <div dangerouslySetInnerHTML={renderResult} ></div>
                </div>
                {/* <ReactMarkdown source={content}/> */}

            </div>
        )
    }



}