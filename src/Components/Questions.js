import React,{ useState } from 'react'




function Questions() {
    const [currentQuestion, setCurrentQuestion] = useState(0)
    const [showScore, setShowScore] = useState(false)
    const [score, setScore] =useState(0)
    
   
    
    const questions =[
        {
            questionsText : "Remko's Favorite music to listen to is Rap & Hip Hop?",
            answerOptions : [
                {answerText: 'True', isCorrect: true},
                {answerText: 'False, Kaite Perry and Lady GAGA all the way!', isCorrect: false},
                
            ]
        },
        {
            questionsText : 'Is a Tattoo Gun and Machine the same thing?',
            answerOptions : [
                {answerText: 'True', isCorrect: false},
                {answerText: 'False, Guns are for protection, Machines are for Tatooing', isCorrect: true},
            ]
        },
        {
            questionsText : 'Does Remko mostly Tattoo Tribal?',
            answerOptions : [
                {answerText: 'True', isCorrect: true},
                {answerText: 'False', isCorrect: false},
               
            ]
        },

    ];
    
const handleAnswerButtonClick = (isCorrect) => {
    if ( isCorrect){
        setScore(score + 1)
    }
    const nextQuestion = currentQuestion + 1;
    setCurrentQuestion(nextQuestion) 
    if(nextQuestion < questions.length){
        setCurrentQuestion(nextQuestion)
    } else {
        setShowScore(true)
    }
}

    return (
       

        <div className="container">
                {showScore ? (
				<div className='score-section'><p>You scored {score} out of {questions.length} </p>
                <p> Use Coupon Code: "HOOKSINK" for 10% off your next Tattoo</p> 
                </div>
                
			) : (
				<>
					<div className='question-section'>
                        <div className='logo' /> 
						<div className='question-count'>
							<span>Question {currentQuestion + 1}</span>/{questions.length}
						</div>
						<div className='question-text'>{questions[currentQuestion].questionsText}</div> 
					</div>
					<div className='answer-section'>
                        {questions[currentQuestion].answerOptions.map((answerOption,index) =>(
                            <button className='answer-button' onClick={()=> handleAnswerButtonClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
                        ))}
						
					</div>
				</>
			)}
		</div>
        
	);
}
       


export default Questions


// write a handleclick when answer it is clicked it switches to the next question.
// this needs to move to the next array of questions in the index. 
// this is adding to the array count to switch 
// it will go in the answer sections array and add 1 to the array number to switch between them. 

// I will need a to display the current score and using a another useState would be correct. 