import "./about.scss";
import React from "react";
import { Accordion } from "react-bootstrap";
import LessonDetail from "../../../LessonDetail";

export default function CourseContent({ data }) {
  return (
    <div id="list-video" className="box-shadow mt-2 p-2">
      <h4 className="pt-1 mb-0 pb-0">Nội dung khóa học</h4>
      <hr />
      <div>
        <Accordion>
          {data[2].map((item, index) => (
            <Accordion.Item eventKey={index} key={index}>
              <Accordion.Header>
                Phần {index + 1}: {item.chap.Chap_description}
              </Accordion.Header>

              {item.lesson.map((lesson, index) => (
                <Accordion.Body key={index}>
                  <LessonDetail index={index} lesson={lesson} />
                </Accordion.Body>
              ))}
            </Accordion.Item>
          ))}
        </Accordion>
      </div>
    </div>
  );
}
