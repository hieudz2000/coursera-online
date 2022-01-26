var ListTeacher = [
  {
    id: 1,
    img: "https://static.unica.vn/upload/images/2019/04/guitar-dem-hat-cung-haketu-nang-cao_m_1555571664.jpg",
    name: "nguyen Duc Hieu",
    subjects: "Guitar đệm hát nâng cao cùng Haketu",
  },
  {
    id: 2,
    img: "https://static.unica.vn/upload/images/2019/04/quan-tri-cuoc-doi-le-tham-duong_m_1555575906.jpg",
    subjects: "Quản trị cuộc đời - Đường đến thành công",
    name: "Pham Minh Thu",
  },
  {
    id: 3,
    img: "https://static.unica.vn/upload/images/2019/04/30-tuyet-chieu-tang-doanh-so_m_1555557945.jpg",
    subjects: "Giảng viên chém gió",
    name: "Nguyễn Viết Huy",
  },
  {
    id: 4,
    img: "https://static.unica.vn/upload/images/2019/04/hoc-quan-tri-cam-xuc_m_1555571029.jpg",
    subjects: "Giảng viên ăn uống",
    name: "Vũ Văn Trọng",
  },
];

const myReducer = (state = ListTeacher, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
export default myReducer;
