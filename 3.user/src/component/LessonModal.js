import React from "react";
import { Modal } from "react-bootstrap";

export default function LessonModal({ lesson, onHide, show }) {
  return (
    <Modal
      show={show}
      onHide={onHide}
      backdrop="static"
      keyboard={false}
      size="lg"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title>{lesson.Lesson_header}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <iframe
          width="100%"
          height="500px"
          src={lesson.Lesson_video}
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </Modal.Body>
    </Modal>
  );
}
