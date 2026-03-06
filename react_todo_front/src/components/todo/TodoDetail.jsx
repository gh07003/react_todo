import axios from "axios";
import { useEffect, useState } from "react";
import styles from "./TodoDetail.module.css";

const TodoDetail = ({ todoNo }) => {
  const [todo, setTodo] = useState(null);
  const backServer = import.meta.env.VITE_BACKSERVER;
  useEffect(() => {
    axios
      .get(`${backServer}/todos/${todoNo}`)
      .then((res) => {
        console.log(res);
        setTodo(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className={styles.detail_wrap}>
      {todo !== null && (
        <div>
          <div className={styles.detail_header}>
            <span
              className={
                todo.todoDone === 1
                  ? styles.detail_badge1
                  : styles.detail_badge0
              }
            >
              {todo.todoDone === 1 ? "완료" : "진행중"}
            </span>
            <span className={styles.detail_no}>NO.{todo.todoNo}</span>
          </div>
          <div className={styles.detail_item}>
            <div className={styles.detail_writer}>
              <p>작성자</p>
              <p>{todo.todoWriter}</p>
            </div>
            <div className={styles.detail_content}>
              <p>내용</p>
              <p>{todo.todoContent}</p>
            </div>
            <div className={styles.detail_date}>
              <p>작성일</p>
              <p>{todo.todoDate}</p>
            </div>
          </div>
          <div className={styles.btn_zone}>
            <button className={styles.success_btn}>완료됨</button>
            <button className={styles.delete_btn}>삭제</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default TodoDetail;
