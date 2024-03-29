import { useQuiz } from "../contexts/QuizContext";

function Options() {
  const { questions, index, answer, handleSelectOption } = useQuiz();
  const hasAnswered = answer !== null;
  const question = questions[index];

  return (
    <div className="options">
      {question.options.map((option, index) => (
        <button
          className={`btn btn-option ${index === answer ? "answer" : ""} ${
            hasAnswered
              ? index === question.correctOption
                ? "correct"
                : "wrong"
              : ""
          }`}
          key={option}
          disabled={hasAnswered}
          onClick={(e) => handleSelectOption(e, index)}
        >
          {option}
        </button>
      ))}
    </div>
  );
}

export default Options;
