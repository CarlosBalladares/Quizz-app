import React from "react";
import { Link } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';

const green = "#45ad6b",red = "#ea5468", gray="#414944"

const styles = {
  score:{
    position: "absolute",
    top: "10px",
    right: "10px",
    color:"gray"
  },
  buttons:{
    "margin-top":50,
    "display": "inline",
    "justify-content": "center",
    "flex-direction": "column",
  },
  button:{
    "margin-bottom":10,
    "margin-right":10,
  },
  root:{
    display:"flex",
    "justify-content": "center",
    "flex-direction": "column",
    "margin-top":30
  }
}

class QuizComponent extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      ...props.quiz, 
      score:0,
      question_index:0,
      show_ans : false,

    };
    this.start           = this.start.bind(this);
    this.finishedQuiz    = this.finishedQuiz.bind(this);
    this.getNextQuestion = this.getNextQuestion.bind(this);
    this.submitAnswer    = this.submitAnswer.bind(this);
    this.switchQuestion  = this.switchQuestion.bind(this);
  }

  start(){
    this.setState({
      started:!this.state.started
    });
  }

  finishedQuiz(){
    return !(this.state.question_index<this.state.questions.length);
  }

  getNextQuestion(){
    return this.state.questions[this.state.question_index];
  }

  submitAnswer(answer){
    this.setState({
      show_ans:true,
      score: this.state.score +(answer?1:0)
    });
    setTimeout( this.switchQuestion, 2000);
  }

  switchQuestion(){
    this.setState({
       question_index:this.state.question_index+1,
       show_ans:false,
    });
  }

  render(){
    const {classes}  = this.props;
    
    if(this.finishedQuiz()){
      return (
        <div className={classes.root}>
          
          <Typography 
            variant="display1" 
            color={"red"}
            style ={{color:`${(this.state.score>this.state.questions.length/2)?
              green:red}`}}
          >   
            You scored  {this.state.score}{" "} 
            {this.state.score>this.state.questions.length/2?
              "Congratulations":"Better Luck next time"}
          </Typography>
          <div className={classes.buttons}>
            <Button 
              variant="outlined" 
              size="large"   
              className={classes.button}
              component={Link}
              to="/"
              >
              Take another quiz
            </Button>
          </div>
        </div>

      );

    }
    const question = this.getNextQuestion();
    
    return(
      <div className={classes.root}>
        <Typography variant="display1">{question.question}</Typography>
        <Typography className={classes.score}> Score: {this.state.score}</Typography>
        <div className={classes.buttons}>
          {question.answers.map((answer)=>
            <Button 
              disabled={this.state.show_ans}
              onClick={()=>this.submitAnswer(answer.value)} 
              variant="outlined" 
              size="large"   
              className={classes.button}
              style ={{color:`${(this.state.show_ans===true)?
                (answer.value===true)?green:red:gray}`}}>
              {answer.content}
            </Button>
          )} 
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(QuizComponent);