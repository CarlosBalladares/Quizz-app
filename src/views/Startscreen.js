import React from "react";
import Typography from '@material-ui/core/Typography';

import { withStyles } from '@material-ui/core/styles';
import { quizzes } from './../data/quiz.json';
import QuizCard from './../components/QuizCard.js';

const styles ={

}

function Startscreen(props){
  console.log(quizzes);
  return (
    <div>
      <Typography variant="display2" gutterBottom>
        Choose your quiz 
      </Typography>      

      {quizzes.map(function(q){
          return <QuizCard quiz={q}/>;
      })}
    </div>
  );
}

export default withStyles(styles)(Startscreen);