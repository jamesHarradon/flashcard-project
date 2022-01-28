import { Link, useParams } from "react-router-dom";
import ROUTES from "../../app/routes";
import { useSelector } from "react-redux";
import { topicsSelector } from "./topicsSlice";
import { quizzesSelector } from "../quizzes/quizzesSlice";


export default function Topic() {
  const topics = useSelector(topicsSelector);
  const quizzes = useSelector(quizzesSelector)
  let { topicId } = useParams();
  const topic = topics[topicId];
  const quizzesForTopic = topic.quizIds.map((quizId) => quizzes[quizId]);

  return (
    <section>
      <img src={topic.icon} alt="" className="topic-icon" />
      <h1>Quizzes By Topic - {topic.name.toUpperCase()}</h1>
      <div className="list-container">
        <ul className="quizzes-list">
        {quizzesForTopic.map((quiz) => (
            <Link key={quiz.id} to={ROUTES.quizRoute(quiz.id)} className='quiz-link'>
              <div className="quiz-container">
                <li className="quiz">{quiz.name.toUpperCase()}</li>
                <li className='questions-display'>{quiz.cardIds.length} Question{quiz.cardIds.length > 1 && 's'}</li>
              </div>
            </Link>
          ))}
        </ul>
      </div>
      <Link to="/quizzes/new" className="button create-new-button">
        Create a New Quiz
      </Link>
    </section>
  );
}
