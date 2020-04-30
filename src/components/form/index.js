import React from 'react';
import './index.scss';



class Form extends React.Component{
 

    constructor(props){

        super(props);

        this.state = {
            words: [],
            currentWord: "",
            count: 0
        }

        this.wordList = [];

        this.handleEnter = this.handleEnter.bind(this);
        this.handleShow = this.handleShow.bind(this);

    }

    componentDidMount() {        

        this.timer = setInterval(

            () => this.setState({
                currentWord: this.state.words[this.state.count],
                count: this.state.count++
            }),
            2000,
        );
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

    handleShow(event){



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
