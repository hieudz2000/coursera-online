// import { useEffect, useState } from "react";

// import { Accordion } from "react-bootstrap";
// import "./about.scss";

// import Axios from "axios";
// import api from "../../../../json/api.json";

// function showsIntroduct(course) {
//   return course[2].map((list1, id1) => {
//     return (
//       <Accordion.Item
//         eventKey={id1}
//         key={id1 + "2"}
//         style={{ border: "none", borderBottom: "1px solid gray" }}
//       >
//         <Accordion.Header style={{ fontSize: 18 }}>
//           {"Chuong " + (id1 + 1)}:{list1.chap.Chap_description}
//         </Accordion.Header>
//         <Accordion.Body>
//           <ul className="nav flex-column">
//             {list1.lesson.map((list3, id3) => {
//               return (
//                 <div key={id3 + id1}>
//                   <div
//                     className="modal fade"
//                     id={"h" + id1 + id3}
//                     aria-hidden="true"
//                     aria-labelledby="exampleModalToggleLabel"
//                     tabIndex="-1"
//                   >
//                     <div className="modal-dialog modal-dialog-centered">
//                       <div className="modal-content">
//                         <div className="modal-header">
//                           <h5
//                             className="modal-title"
//                             id="exampleModalToggleLabel"
//                           >
//                             <li className="nav-item">
//                               <i className="fa fa-play-circle"></i>
//                               {"Bai " + (id3 + 1)}: {list3.Lesson_header}
//                             </li>
//                           </h5>
//                           <button
//                             type="button"
//                             className="btn-close"
//                             data-bs-dismiss="modal"
//                             aria-label="Close"
//                           ></button>
//                         </div>
//                         <div className="modal-body">
//                           <iframe
//                             width="100%"
//                             height={400}
//                             src={list3.Lesson_video}
//                             title="video"
//                           />
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                   <a
//                     className="btn "
//                     data-bs-toggle="modal"
//                     href={`#h${id1}${id3}`}
//                     role="button"
//                   >
//                     <i className="fa fa-play-circle"></i>
//                     {"Bai " + (id3 + 1)}: {list3.Lesson_header}
//                   </a>
//                 </div>
//               );
//             })}
//           </ul>
//         </Accordion.Body>
//       </Accordion.Item>
//     );
//   });
// }

// const About = () => {
//   const [courses, setCourses] = useState(null);
//   useEffect(() => {
//     Axios.get(api.find((e) => e.pages === "khoa_hoc").api["khoa_hoc"]).then(
//       (res) => {
//         const data = res.data;
//         setCourses(data);
//         //console.log(data);
//       }
//     );
//   }, []);
//   return (
//     <div>
//       <Accordion defaultActiveKey="0">
//         {courses === null ? "" : showsIntroduct(courses)}
//       </Accordion>
//     </div>
//   );
// };

// export default About;

import React from "react";

export default function About() {
  return <div></div>;
}
