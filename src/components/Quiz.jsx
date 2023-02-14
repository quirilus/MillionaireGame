
import {useState, useEffect} from 'react';
import './Quiz.css';
import useSound from 'use-sound';
import correct from '../Assets/correct.mp3';
import play from '../Assets/play.mp3';
import wrong from '../Assets/wrong.mp3';
//import wait from '../Assets/wait.mp3';

export default function Quiz({data, setStopTime, questionNumber, setQuestionNumber}){
//Hooks react 18. 

    const [question, setQuestion] = useState(null);
    const [selectedAnswer, setselectedAnswer] = useState(null);
    const [clickedAnswer, SetClickedAnswer] = useState("answer");

    //consuming the sounds dynamically.
    const [playSound] = useSound(play);
    const [correctAnswer] = useSound(correct);
    const [wrongAnswer] = useSound(wrong);

    useEffect(() =>{
        playSound();
    }, [playSound])

// 

    useEffect(() =>{
        setQuestion(data[questionNumber -1]);

    },[data, questionNumber])

    const delay = (duration, callback) =>{
        setTimeout(() =>{
        callback()
        }, duration)

    }

    const handleClick = (e) =>{
        setselectedAnswer(e)
        SetClickedAnswer("answer active")

        delay(2000, () =>  SetClickedAnswer(e.correct ? "answer correct": "answer wrong"));

        //Question Nexting

        delay(4000, ()=>{

            if(e.correct){
                //  setting the correct answer sound.
                correctAnswer()
                delay(2000, ()=> {
                    setQuestionNumber( prev => prev + 1); // we increment by 1 if the quiz is okay.
                    setselectedAnswer(null) 
                })
                
            }
            else {
                wrongAnswer()
                delay(1000, ()=> {
                    setStopTime(true); 
                })

            }
        });

    }  

    return(
        <div className="quiz">
            <div className="questions">{question?.question}</div>
            <div className="answers">
                {question?.answer.map(e => (
                    <div className={selectedAnswer === e? clickedAnswer :"answer"}
                     onClick={() => handleClick(e)}>{e.text}
                     </div>

                ))};
            </div>
          
        </div>
    )
    
}