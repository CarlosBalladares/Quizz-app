import React from "react";
import Typography from '@material-ui/core/Typography';
import QuizComponent from './../components/QuizComponent.js';
import {Redirect} from 'react-router-dom';
function QuizView(props) {
  const quiz = props.location.state;
  if(!quiz)  return(<Redirect to="/"/>);

  return(
    <div>
      <Typography variant="display2" gutterBottom>
          {quiz.title}
      </Typography>
      <QuizComponent quiz ={quiz}/>
    </div>
  );
}

export default QuizView;