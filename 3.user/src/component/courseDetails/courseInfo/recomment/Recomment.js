// import { Component } from "react";
// import { connect } from "react-redux";
// import * as actions from "../../../../redux/actions/comment";
// import "./recomment.scss";

// class Recomment extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {};
//   }

//   render() {
//     var { comments } = this.props;
//     return (
//       <div id="recomment" className="p-2">
//         <h4 className="pt-1 mb-0 pb-0">Nhận xét của học viên</h4>
//         <hr />
//         <div className="comment p-2">{this.showComment(comments)}</div>
//         <button
//           className="btn btn-outline-primary w-100"
//           onClick={this.props.moreComment}
//         >
//           Xem thêm
//         </button>
//       </div>
//     );
//   }
//   showRand(rand, index) {
//     var rs = [];
//     for (let i = 0; i < rand; i++)
//       rs.push(
//         <li className="nav-item" key={"nav-fa" + index + i}>
//           <i className="fa fa-star" aria-hidden="true"></i>
//         </li>
//       );
//     for (let i = 0; i < 5 - rand; i++)
//       rs.push(
//         <li className="nav-item" key={"nav-far" + index + i}>
//           <i className="far fa-star" aria-hidden="true"></i>
//         </li>
//       );
//     return rs;
//   }
//   showComment(comments) {
//     if (comments != null) {
//       return comments.map((comment, index) => {
//         var arrayName = comment.name.split(" ");
//         var shortName = arrayName[arrayName.length - 1][0];
//         return (
//           <div className="row mt-1" key={"comment" + index}>
//             <div className="col-1 mt-2">
//               <div className="avatar text-center">{shortName}</div>
//             </div>
//             <div className="col-11">
//               <h6>{comment.name}</h6>
//               <ul className="nav justify-align-content-start">
//                 {this.showRand(comment.rand, index)}
//               </ul>

//               <p>{comment.comment}</p>
//             </div>
//             <div className="divider"></div>
//           </div>
//         );
//       });
//     }
//     return "";
//   }
// }

// const mapStateToProps = (state) => {
//   return {
//     comments: state.comments,
//   };
// };
// const mapDispatchToProps = (dispatch) => {
//   return {
//     moreComment: () => {
//       dispatch(actions.clickMoreComment());
//     },
//   };
// };
// export default connect(mapStateToProps, mapDispatchToProps)(Recomment);
