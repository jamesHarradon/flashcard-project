import { Link } from "react-router-dom";
import ROUTES from "../../app/routes";
import { useEffect } from "react";
import { quizzesSelector } from "./quizzesSlice";
import { topicsSelector } from "../topics/topicsSlice";
import { useSelector } from "react-redux";
import { cardsSelector } from "../cards/cardsSlice";


export default function Quizzes() {
  const quizzes = useSelector(quizzesSelector);
  const topics = useSelector(topicsSelector);
  const cards = useSelector(cardsSelector)

  useEffect(() => {
    localStorage.setItem('quizzes', JSON.stringify(quizzes))
    localStorage.setItem('topics', JSON.stringify(topics))
    localStorage.setItem('cards', JSON.stringify(cards))
  }, [quizzes, topics, cards]);


  return (
    <section className="center">
      <h1>Quizzes</h1>
      <ul className="quizzes-list">
        {Object.values(quizzes).map((quiz) => (
          <Link key={quiz.id} to={ROUTES.quizRoute(quiz.id)} className='quiz-link'>
            <li className="quiz">{quiz.name.toUpperCase()}
            <li className='questions-display'>{quiz.cardIds.length} Card{quiz.cardIds.length > 1 && 's'}</li>
            </li>
            
          </Link>
        ))}
      </ul>
      <Link to={ROUTES.newQuizRoute()} className="button">
        Create New Quiz
      </Link>
    </section>
  );
}
