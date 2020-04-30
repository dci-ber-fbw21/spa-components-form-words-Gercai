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
        this.function1 = this.function1.bind(this);
        this.function2 = this.function2.bind(this);

    }

    

    componentWillUnmount() {
        clearInterval(this.timer);
    }


    handleEnter(event){

        const {name} = event.target;

        let word = document.querySelector(".field").value;
        document.querySelector(".field").value = "";
        console.log(word);
        
        
        this.wordList.push(word);

        console.log(this.wordList);

        this.setState({
            words: this.wordList
        })

   }


   function1(){
                this.count++;
                if(this.count > this.state.words.length){
                    this.count = 0;
                }    
   }

   function2(){
    this.setState({
        currentWord: this.state.words[this.state.count],
        count: this.count
    })
   }

    handleShow(event){
       setInterval( function(){
        this.function1(),
        this.function2()
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
