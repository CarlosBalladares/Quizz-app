import React from 'react';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';

const styles = theme =>({
  root:{
    padding: 20
  },
  button: {
    margin: theme.spacing.unit
  },
  text:{
    color:"#414944"
  }
})

function QuizCard(props){
  const {quiz, classes} = props;
  return (
    <div className={classes.root}>
      <Typography variant="title" gutterBottom className={classes.text}>
        {quiz.title}
      </Typography>
      <Typography variant="body2" gutterBottom className={classes.text}>
        This quiz has {quiz.questions.length} questions
      </Typography>
     
        <Button 
          className={classes.button} 
          variant="outlined" 
          size="large" 
          component={Link}
          to ={{
            pathname: `quiz/${quiz.title}`,
            state: {...quiz}
          }} 
        >
          start
        </Button>
    </div>
  );
}

export default withStyles(styles)(QuizCard);