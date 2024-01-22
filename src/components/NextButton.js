import { useQuiz } from "../contexts/QuizContext";

function NextButton() {
  const { index, answer, numQuestions, handleNextQuestion, handleFinishQuiz } =
    useQuiz();

  if (answer === null) return null;

  if (index < numQuestions - 1)
    return (
      <button className="btn btn-ui" onClick={(e) => handleNextQuestion(e)}>
        Next
      </button>
    );

  if (index === numQuestions - 1)
    return (
      <button className="btn btn-ui" onClick={(e) => handleFinishQuiz(e)}>
        Finish
      </button>
    );
}

export default NextButton;
