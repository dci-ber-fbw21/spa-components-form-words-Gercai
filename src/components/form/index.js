import React from 'react';
import './index.scss';



class Form extends React.Component{
 
    constructor(props){

        super(props);

        this.state = {
            words: [],
            currentWord: "",
        }

        this.wordList = [];
        this.count = 0;

        this.handleEnter = this.handleEnter.bind(this);
        this.handleShow = this.handleShow.bind(this);
        this.increaseCount = this.increaseCount.bind(this);
        this.setCurrentWord = this.setCurrentWord.bind(this);

    }

    componentWillUnmount() {
        clearInterval(this.timer);
    }

    handleEnter(event){

        let word = document.querySelector(".field").value;
        document.querySelector(".field").value = "";
        
        this.wordList.push(word);
        this.setState({
            words: this.wordList
        })

   }

   increaseCount(){
                this.count++;
                if(this.count > this.state.words.length){
                    this.count = 0;
                }    
   }

   setCurrentWord(){
    this.setState({
        currentWord: this.state.words[this.state.count],
        count: this.count
    })
   }


//    Mount
    handleShow(){
       setInterval(() => {
        this.increaseCount();
        this.setCurrentWord();
       },1000);
    }   

    handleSubmit(event){
        event.preventDefault();
        // Do stuff
    }

    render(){

    return (
        <article className="Form">
            
        <form onSubmit={this.handleSubmit} className="show">

        <fieldset>
            <label>Enter Word:</label>
            <input className="field" name="word"></input>
        </fieldset>

        <fieldset>
        <button onClick={this.handleShow}>Show</button>
        <button onClick={this.handleEnter}>Enter</button>
        </fieldset>

        </form>

        <article>
           I am a {this.state.currentWord} 
        </article>

        </article>
      );

    }
}

export default Form;
