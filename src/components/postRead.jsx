import React from 'react';
import Header from './header';
import { fetchPost } from "../lib/api.js";
import ReactMarkdown from "react-markdown";
import MarkdownParser from "../lib/markdown-parser";
import "./postRead.css"
import 'github-markdown-css'
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
        let uuid = this.props.match.params.postId
        fetchPost(uuid).then(data => {
            this.setState( {post:data} );
        })
      }

    render(){

        if(this.state.post === undefined ){
            return;
        }

        // 这里加上 ”“ 是把content 从 markdown 转换为 string,
        //因为下面MarkdownParser.render后面只能加string
        const excerpt = this.state.post.excerpt;
        const content = (this.state.post.content) + "";
        const title = this.state.post.title;
        let htmlOutput = MarkdownParser.render(content);
        const renderResult = {
             __html: htmlOutput
            };

        return(
            <div className = 'postRead'>
                <Header open={true} />
                <div className = "readPage">
                    <h1 className = "title_read"> {title} </h1>
                    <div className = "excerpt_read"> { excerpt } </div>
                    <div className = "markdown-body">
                        <div className = "text" dangerouslySetInnerHTML={renderResult} ></div>
                    </div>
                </div>
                {/* <ReactMarkdown source={content}/> */}

            </div>
        )
    }



}