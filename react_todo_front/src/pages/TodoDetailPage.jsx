import { useParams } from "react-router-dom";
import TodoDetail from "../components/todo/TodoDetail";
import styles from "./pagelayout.module.css";
const TodoDetailPage = () => {
  const { todoNo } = useParams();
  return (
    <div className={styles.page}>
      <h3 className={styles.page_title}>TODO 상세보기</h3>
      <TodoDetail todoNo={todoNo} />
    </div>
  );
};

export default TodoDetailPage;
