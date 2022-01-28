import { Link } from "react-router-dom";
import { useEffect } from "react";
import ROUTES from "../../app/routes";
import { useSelector } from 'react-redux';
import { topicsSelector } from "./topicsSlice";


export default function Topics() {
  const topics = useSelector(topicsSelector);
  
  useEffect(() => {
    localStorage.setItem('topics', JSON.stringify(topics))
  }, [topics])

  return (
    <section className="center">
      <h1>Topics</h1>
      <div className='list-container'>
        <ul className="topics-list">
          {Object.values(topics).map((topic) => (
            <li className="topic" key={topic.id}>
            <Link to={ROUTES.topicRoute(topic.id)} className="topic-link">
            <div className="topic-container">
              <img src={topic.icon} alt="" />
              <div className="text-content">
                <h2>{topic.name}</h2>
                <p>{topic.quizIds.length} Quizzes</p>
              </div>
            </div>
          </Link>
            </li>
          ))}
        </ul>
      </div>
      <Link
        to={ROUTES.newTopicRoute()}
        className="button create-new-button"
      >
        Create New Topic
      </Link>
    </section>
  );
}
