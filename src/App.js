import React, { Component } from 'react';
import logo from './logo.svg';
import armin from './assets/img/armin.jpg';
import tiesto from './assets/img/tiesto.jpg';
import mokhov from './assets/img/mokhov.jpg';
import redsparrowes from './assets/img/redsparrowes.jpg';
import russiancircles from './assets/img/russiancircles.jpg';
import maserati from './assets/img/maserati.jpg';
import daysofstatic from './assets/img/daysofstatic.jpg';
import astro from './assets/img/astro.jpg';
import avicii from './assets/img/avicii.jpg';
import caspian from './assets/img/caspian.jpg';
import explosions from './assets/img/explosions.jpg';
import daftpunk from './assets/img/daftpunk.jpg';


import './App.css';





class Gamestats extends Component {
 
    constructor(props) {
   	  super(props);
   	  this.state = {
                   message:this.props.message,
   	      			   score:this.props.score,
   				         topscore:this.props.topscore
                 };
   }

  updateGamestats() {
  	this.setState(function(prevstate,props){
  	 return {
  			message:"You guessed correctly",
  			score: prevstate.score + 1,
  			topscore:prevstate.topscore + 1
  	 };
   });
 }

  render() {
    return (
      <div className="Statsdiv">
        <p className="stats"><h3>{this.props.message}!!</h3></p>
        <p className="stats"><h3>Score : {this.props.score}   Top Score : {this.props.topscore} </h3></p>
      </div>
    );
  }
}


class Image extends Component {
  constructor(props){
  	super(props);
  	this.state = {isClicked:false};
  }

  
  render() {
    return (
      <div className="Imgdiv">
        <img src={this.props.datasrc} className="Img" onClick={this.props.clickhandler}/>
      </div>
      
    );
  }
}


class Imagelist extends Component {
  render() {
    var images = this.props.images;
    var clickHandler = this.props.clickHandler;

    function createImages(item){
      return <Image datasrc={item} clickhandler={clickHandler}/>
    }

    var imageList = images.map(createImages); 

    return (
      <div className="Imageview">
      	{imageList}
      </div>
    );
  }
}


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
        imgList:[armin,tiesto,mokhov,redsparrowes,russiancircles,maserati,
        daysofstatic,daftpunk,
        astro,avicii,
        caspian,explosions],
        message:"click on image to start!!",
        score:0,
        topscore:0 };
        this.handleClick = this.handleClick.bind(this);
        this.imageArray = [];
        this.initialimageArray =  [armin,tiesto,mokhov,redsparrowes,russiancircles,maserati,
        daysofstatic,daftpunk,
        astro,avicii,
        caspian,explosions];
        
 }

generateImagelist(){
  this.imageArray = [];
  var ranindexarray = [];
  var uniqueIndex = 0;

    while(uniqueIndex !== 12){
      var ranIndex = Math.floor(Math.random() * this.state.imgList.length);
      if(ranindexarray.length > 0 && ranindexarray.indexOf(ranIndex) === 0){
        console.log("duplicate elements");
       
      }
      else if(ranindexarray.indexOf(ranIndex) === -1){
        ranindexarray.push(ranIndex);
        uniqueIndex = uniqueIndex + 1;
      }

    }

    console.log(ranindexarray);

    for(var i=0;i < ranindexarray.length;i++){
       this.imageArray.push(this.initialimageArray[ranindexarray[i]]);
    }
  
  this.setState({imgList:this.imageArray,
                  message:"you guessed correctly",
                  score:this.state.score+1,
                  topscore:this.state.topscore+1});
}

 handleClick(e){
   console.log("click event");
   console.log(this);
  this.generateImagelist();
 }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ClickyGame</h1>
          <Gamestats message={this.state.message} score={this.state.score} topscore={this.state.topscore}/>
        </header>
        <p className="App-intro">Click on images below</p>
        <Imagelist images={this.state.imgList} clickHandler={this.handleClick}/>
      </div>
    );
  }
}

export default App;
