import React from 'react';
import portrait from '../assets/pics/portrait.JPG'
import postcard from '../assets/pics/postcard.jpg'
import photocard from '../assets/pics/photocard.png'
import democard from '../assets/pics/democard.png'
import './welcome.css';
import Header from './header';
import Paper from '@material-ui/core/Paper';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';


class Welcome extends React.Component {

    render() {
        return (
            <div className="Welcome">
                <Header />

                <div className="WelcomeBackground">
                    <img src={portrait} className="portrait" alt="portrait" />
                    <h2>Taijie Yang</h2>
                    <p>Web Developper/Amateur Photographer</p>
                    <div className = "slogan">
                        <i className="fa fa-quote-left"></i><span> 要努力成为优秀的人 </span><i className="fa fa-quote-right"></i>
                    </div>

                    <AboutMeButton />

                </div>

                <div className = "Navigation">
                    <NaviCard CardTitle = "POSTS" img = {postcard}/>
                    <NaviCard CardTitle = "PHOTOS" img = {photocard}/>
                    <NaviCard CardTitle = "DEMOS" img = {democard}/>
                </div>
            </div>

        );
    };
};


class AboutMeButton extends React.Component {
    render() {
        return (
            <Paper className = "AboutMeButton" elevation = {2} square = {true}>
                About Me
            </Paper>
        )
    }

}


class NaviCard extends React.Component{
    render(){
        const CardTitle = this.props.CardTitle;
        const img = this.props.img;

        return(
            <Card className = "Card" square = {true}>
                <CardActionArea>
                    <CardContent className = "CardTitle">
                        <h2>{CardTitle}</h2>
                    </CardContent>
                    <img src={img} className="cardimg" alt="card image" />
                </CardActionArea>
            </Card>

        )
    }
}


export default Welcome;


