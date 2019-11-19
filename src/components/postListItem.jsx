import React from 'react';
import { Link } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import MarkdownParser from "../lib/markdown-parser";
import './postListItem.css';



export default class PostListItem extends React.Component{
    

    render(){
        const title = this.props.title;
        const excerpt = this.props.excerpt;
        const uuid = this.props.uuid;
        const id = this.props.id;

        const path = {
          pathname: `/posts/${id}/`,
          query:uuid,
        }
        

        //let htmlOutput = MarkdownParser.render(content);
        // const renderResult = {
        //     __html: htmlOutput
        //   };
        return(
            <div className = "itemwrapper">
                <h2 className = "postTitle">
                    <Link className = "link" to = {path}>{title}</Link>
                </h2>
                <p className= "excerpt">
            {
              excerpt.length > 300
                ? (
                  <span>
                    {excerpt.slice(0, 300) + ' ... '}
                    <span >
                      <Link className = "readMore" to = {path}>
                        Read More
                      </Link>
                    </span>
                  </span>
                ) : (
                  <span>
                    {excerpt + ' '} &nbsp;
                    <span >
                      <Link className = "readMore" to={path}>
                        Read More
                      </Link>
                    </span>
                  </span>
                )
            }
          </p>
                {/* <div dangerouslySetInnerHTML={renderResult} ></div>
                
                <ReactMarkdown source={content}/> */}
                
            </div>
        )
    }


}