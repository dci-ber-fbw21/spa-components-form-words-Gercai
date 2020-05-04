import React from 'react';
import './index.scss';

class Form extends React.Component{
 
    constructor(props){

        super(props);

        this.state = {
            words: [],
            currentWord: "",
            errorMessage: "invisible",
            resultMessage: "invisible",
            form: ""
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

    handleEnter(){
        let word = document.querySelector(".field").value;
        document.querySelector(".field").value = "";
        this.wordList.push(word);
        this.setState({
            words: this.wordList
        })
   }

   increaseCount(){
        this.count>=this.state.words.length?this.count=0:this.count++;
   }

   setCurrentWord(){
    this.setState({
        currentWord: this.state.words[this.state.count],
        count: this.count
    })
   }

//    Mount
    handleShow(){

        if(this.state.words.length < 3){
            this.setState({
                currentWord: "Expected at least 3 words or more",
                errorMessage: "visible"
            })

        }
        // Success
        else{
            this.setState({
                resultMessage: "visible",
                errorMessage: "invisible",
                form: "invisible"
            })

            setInterval(() => {
                this.setCurrentWord();
                this.increaseCount();
               },1000);
        }
    }   

    handleSubmit(event){
        event.preventDefault();
    }

    render(){

    return (
        <article className="box">
            
            <form onSubmit={this.handleSubmit} className={this.state.form}>

            <fieldset className="upper">
              
            <h3 id="words">Words</h3>
            <input aria-labelledby="words" className="field" name="word"></input>
               
            </fieldset>

            <fieldset>
            <button onClick={this.handleShow}>Show</button>
            <button onClick={this.handleEnter}>Enter</button>
            </fieldset>

            </form>

            <section name="result" className={this.state.resultMessage}>
                {/* Inner Result */}
                <article className="result">
            I am a  
            <span className={"word"}> {this.state.currentWord} </span>
                </article>

            </section>

            <section name="Errmsg" className={this.state.errorMessage}>
            {this.state.currentWord}
            </section>

        </article>
      );

    }
}

export default Form;
