import React, { useState } from "react";
import LessonModal from "./LessonModal";

export default function LessonDetail(props) {
  const [modalShow, setModalShow] = useState(false);
  return (
    <>
      <button onClick={() => setModalShow(true)}>
        Bài {props.index + 1}: {props.lesson.Lesson_header}
      </button>
      {props.lesson.Lesson_video && (
        <LessonModal
          show={modalShow}
          onHide={() => setModalShow(false)}
          lesson={props.lesson}
        />
      )}
    </>
  );
}
