import NewTopicForm from "../../components/NewTopicForm";
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
      <h1>Topic: {topic.name}</h1>
      <ul className="quizzes-list">
        {quizzesForTopic.map((quiz) => (
          <li className="quiz" key={quiz.id}>
            <Link to={ROUTES.quizRoute(quiz.id)}>{quiz.name.toUpperCase()}
            <li className='questions-display'>{quiz.cardIds.length} Card{quiz.cardIds.length > 1 && 's'}</li>
            </Link>
          </li>
        ))}
      </ul>
      <Link to="/quizzes/new" className="button center">
        Create a New Quiz
      </Link>
    </section>
  );
}
