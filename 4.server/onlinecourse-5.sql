-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Máy chủ: 127.0.0.1
-- Thời gian đã tạo: Th1 19, 2022 lúc 10:56 AM
-- Phiên bản máy phục vụ: 10.4.22-MariaDB
-- Phiên bản PHP: 8.0.13

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Cơ sở dữ liệu: `onlinecourse`
--

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `category`
--

CREATE TABLE `category` (
  `Category_ID` int(11) NOT NULL,
  `Category_name` varchar(256) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `category`
--

INSERT INTO `category` (`Category_ID`, `Category_name`) VALUES
(1, 'Category 1'),
(2, 'Category 2'),
(3, 'Category 3'),
(4, 'Category 4'),
(5, 'Category 5');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `chap`
--

CREATE TABLE `chap` (
  `Chap_ID` int(11) NOT NULL,
  `Chap_description` varchar(512) NOT NULL,
  `Course_ID` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `chap`
--

INSERT INTO `chap` (`Chap_ID`, `Chap_description`, `Course_ID`) VALUES
(2, 'phan 1 khoa hoc 1', 2),
(3, 'phan 1 khoa hoc 2', 3),
(4, 'phan 2 khoa hoc 2', 3),
(5, 'phan 3 khoa hoc 2', 3),
(6, 'phan 1 khoa hoc 3', 4),
(7, 'phan 1 khoa hoc 5', 6),
(8, 'phan 1 khoa hoc 6', 7),
(10, 'phan 2 khoa hoc 6', 7),
(11, 'Chap jisoo', 18),
(13, 'Chap jenny', 18),
(15, 'Chap sehun', 24),
(16, 'Chap seungri go jail', 25),
(17, 'Chap hit khoi', 26),
(18, 'Chap tho khoi', 26),
(19, 'Chap nuot khoi', 26),
(20, 'Chap tho ra khoi', 26);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `comment`
--

CREATE TABLE `comment` (
  `Comment_ID` int(11) NOT NULL,
  `Comment_content` mediumtext DEFAULT NULL,
  `Comment_by` int(11) DEFAULT NULL,
  `Comment_in` int(11) DEFAULT NULL,
  `User_rate` decimal(10,0) DEFAULT NULL,
  `Comment_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `comment`
--

INSERT INTO `comment` (`Comment_ID`, `Comment_content`, `Comment_by`, `Comment_in`, `User_rate`, `Comment_at`) VALUES
(5, 'dit cot vezi gut', 7, 7, '4', '2021-12-28 15:18:36'),
(6, 'dit cot vezi nai', 6, 7, '5', '2021-12-28 15:18:50');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `course`
--

CREATE TABLE `course` (
  `Course_ID` int(11) NOT NULL,
  `Author_ID` int(11) NOT NULL,
  `Course_header` mediumtext NOT NULL,
  `Course_description` mediumtext NOT NULL,
  `Course_price` decimal(10,0) NOT NULL,
  `Course_createdAt` datetime DEFAULT NULL,
  `Course_updatedAt` datetime DEFAULT NULL,
  `Course_image` mediumtext DEFAULT NULL,
  `Course_approve` tinyint(1) DEFAULT 0,
  `Course_category` int(11) NOT NULL,
  `Course_rate` int(11) DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `course`
--

INSERT INTO `course` (`Course_ID`, `Author_ID`, `Course_header`, `Course_description`, `Course_price`, `Course_createdAt`, `Course_updatedAt`, `Course_image`, `Course_approve`, `Course_category`, `Course_rate`) VALUES
(2, 2, 'Header 1', 'Des 1', '1000', '2021-12-27 08:40:59', '2021-12-27 08:40:59', 'https://ict-imgs.vgcloud.vn/2021/07/17/17/trao-luu-cham-biem-cac-hot-girl-tai-chinh-hot-boy-thoi-nen-4-0-7.jpg', 1, 1, 0),
(3, 3, 'Header 2', 'Des 2', '1500', '2021-12-27 09:02:02', '2021-12-27 09:02:02', 'https://ict-imgs.vgcloud.vn/2021/07/17/17/trao-luu-cham-biem-cac-hot-girl-tai-chinh-hot-boy-thoi-nen-4-0-15.jpg', 1, 2, 0),
(4, 5, 'Header 3', 'Des 3', '1500', '2021-12-27 09:02:24', '2021-12-27 09:02:24', 'https://ict-imgs.vgcloud.vn/2021/07/17/17/trao-luu-cham-biem-cac-hot-girl-tai-chinh-hot-boy-thoi-nen-4-0-6.jpg', 1, 3, 0),
(5, 5, 'Header 4', 'Des 4', '1500', '2021-12-27 09:02:37', '2022-01-09 15:11:38', 'https://cdnmedia.tinmoi.vn/upload/thanhdat/2021/07/16/thoi-nen-cat-nen-tia-nen-goi-nen-la-gi-hang-loat-thuat-ngu-tai-chinh-40-cho-nguoi-toi-co-1626422055-3.jpg', 1, 4, 0),
(6, 5, 'Header 5', 'Des 5', '1500', '2021-12-27 09:02:49', '2022-01-09 15:12:01', 'https://media.molistar.com/thumb_w/editors/2021/07/16/M0NuoB7o1Sg0ll7xPYYRKZBAkDf3PkJZafUG5X6v_680.jpg', 1, 5, 0),
(7, 3, 'Header 6', 'Des 6', '1500', '2021-12-27 09:03:33', '2021-12-27 09:03:33', 'https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/7/16/photo-1-16264455203651089490658.jpg', 0, 5, 4),
(8, 12, 'Header 7', 'Des 7', '1800', '2022-01-08 14:30:58', '2022-01-08 14:30:58', 'https://st.quantrimang.com/photos/image/2021/07/17/thoi-nen-2.jpg', 0, 5, 0),
(9, 12, 'Header 8', 'Des 8', '2000', '2022-01-08 14:31:25', '2022-01-08 14:31:25', 'https://st.quantrimang.com/photos/image/2021/07/17/thoi-nen-2.jpg', 0, 5, 0),
(11, 5, 'Python Course', 'Detailsl about python course', '2000', '2022-01-09 15:35:54', '2022-01-10 14:30:49', 'https://st.quantrimang.com/photos/image/2021/07/17/thoi-nen-2.jpg', 0, 4, 0),
(12, 3, 'Khoa hoc dang cap', 'khoa hoc sieu hay', '1599', '2022-01-09 15:36:07', '2022-01-09 15:36:07', 'https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/7/16/photo-1-16264362683541080713536.jpg', 0, 1, 0),
(13, 3, 'khoa hoc day lam giau', 'khoa hoc choi coin', '1799', '2022-01-09 15:43:45', '2022-01-09 15:43:45', 'https://www.sctv.com.vn/Upload/images/Bot/2021/7/ngoc-phuoc-minh-tu-hoang-dung-bat-trend-lam-quot-chuyen-gia-tai-chinh-quot-khien-fan-cuoi-ngat-4.jpg', 0, 3, 0),
(14, 3, 'Khoa hoc hoang anh', 'Hoang anh dep trai', '2000', '2022-01-09 15:58:26', '2022-01-09 15:58:26', 'https://www.sctv.com.vn/Upload/images/Bot/2021/7/ngoc-phuoc-minh-tu-hoang-dung-bat-trend-lam-quot-chuyen-gia-tai-chinh-quot-khien-fan-cuoi-ngat-6.jpg', 0, 2, 0),
(15, 5, 'JS Course', 'Details about js course', '1800', '2022-01-09 16:24:08', '2022-01-09 16:24:08', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRy1bFcaKrhwt6P-KxWa6jCWu1XEjYRgiktdzxDOSSRA7uphJhG5je7yVTb0EMlVkPr1SQ&usqp=CAU', 0, 4, 0),
(16, 3, 'Khoa hoc pro vip', 'Gai xinh', '400', '2022-01-09 16:28:24', '2022-01-09 16:28:24', 'https://www.elle.vn/wp-content/uploads/2022/01/13/464763/jisoo-blackpink-mocah.jpeg', 0, 3, 0),
(17, 3, 'Khoa hoc khoai to', 'Gai xinh', '400', '2022-01-09 16:31:11', '2022-01-09 16:31:11', 'https://file.tinnhac.com/resize/600x-/2021/07/13/20210713155030-237a.jpg', 0, 1, 0),
(18, 3, 'Ten khoa hoc dep trai', 'Xinh gai thiet', '300', '2022-01-09 16:32:32', '2022-01-09 16:32:32', 'https://media.vov.vn/sites/default/files/styles/large/public/2021-09/Blackpink_0.jpeg', 0, 3, 0),
(19, 3, 'Ten khoa hoc day coin', 'Xinh gai thiet qua di', '300', '2022-01-09 16:36:29', '2022-01-09 16:36:29', 'https://media-cdn.laodong.vn/Storage/NewsPortal/2021/12/17/985676/Rose-Blackpink.jpeg', 0, 2, 0),
(20, 3, 'Khoa hoc blackpink', 'den hong trang xânh', '300', '2022-01-09 16:37:50', '2022-01-09 16:37:50', 'https://duhocsunny.edu.vn/wp-content/uploads/2021/03/rose-9.jpg', 0, 3, 0),
(21, 3, 'Khoa hoc bigbang', 'Bigbangg nhai son tung', '300', '2022-01-09 16:39:46', '2022-01-09 16:39:46', 'https://znews-photo.zadn.vn/w660/Uploaded/bzwvopcg/2021_02_12/rose55.jpg', 0, 2, 0),
(22, 3, 'Khoa hoc twice', 'twice dep gai', '200', '2022-01-09 16:41:22', '2022-01-09 16:41:22', 'https://www.manganetworkplus.com/wp-content/uploads/2021/06/manga-jujutsu-kaisen-bi-ngung-phat-hanh-vi-tac-gia-gap-van-de-ve-suc-khoe.jpg', 0, 4, 0),
(23, 3, 'Khoa hoc exo', 'exo dep trai', '299', '2022-01-09 16:42:27', '2022-01-09 16:42:27', 'https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/9/21/anh-1-16322137314711694936747.jpg', 0, 1, 0),
(24, 3, 'Khoa hoc exo 2', 'exo dep trai 2', '299', '2022-01-09 16:43:42', '2022-01-09 16:43:42', 'https://ae01.alicdn.com/kf/H03e5d6b6307947fa93db36a5ff6e0f99y/C-u-m-Ch-n-Kinh-Kaisen-Gojo-Satoru-Cosplay-M-t-D-n-C-ng.jpg', 0, 5, 0),
(25, 3, 'Khoa hoc gdragon', 'GD nhai son tung', '350', '2022-01-09 16:48:43', '2022-01-09 16:48:43', 'https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/2/13/photo-1-16132319877711323770755.jpg', 0, 5, 0),
(26, 3, 'Khoa hoc hut thuoc', 'Hut thuoc co loi cho suc khoe', '400', '2022-01-09 16:53:30', '2022-01-09 16:53:30', 'https://fandom.vn/wp-content/uploads/2021/05/Satoru-Gojo-Workout-3.jpg', 0, 2, 0);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `courseenrollment`
--

CREATE TABLE `courseenrollment` (
  `User_ID` int(11) DEFAULT NULL,
  `Course_ID` int(11) DEFAULT NULL,
  `Payment_ID` int(11) DEFAULT NULL,
  `Payment_date` datetime DEFAULT NULL,
  `Learning_history` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `courseenrollment`
--

INSERT INTO `courseenrollment` (`User_ID`, `Course_ID`, `Payment_ID`, `Payment_date`, `Learning_history`) VALUES
(6, 3, 3, '2021-12-27 16:26:21', NULL),
(6, 7, 4, '2021-12-28 07:43:13', NULL);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `coursetag`
--

CREATE TABLE `coursetag` (
  `Course_ID` int(11) NOT NULL,
  `Tag_ID` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `coursetag`
--

INSERT INTO `coursetag` (`Course_ID`, `Tag_ID`) VALUES
(2, 1),
(3, 5),
(4, 8),
(5, 12),
(6, 13),
(7, 15),
(2, 2),
(3, 6),
(4, 7),
(4, 9),
(6, 14);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `failed_jobs`
--

CREATE TABLE `failed_jobs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `uuid` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `connection` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `queue` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `payload` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `exception` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `lesson`
--

CREATE TABLE `lesson` (
  `Lesson_ID` int(11) NOT NULL,
  `Chap_ID` int(11) NOT NULL,
  `Lesson_header` mediumtext NOT NULL,
  `Lesson_description` mediumtext NOT NULL,
  `Lesson_uploadedAt` datetime DEFAULT NULL,
  `Lesson_updatedAt` datetime DEFAULT NULL,
  `Lesson_video` mediumtext DEFAULT NULL,
  `Lesson_view` int(11) DEFAULT 0,
  `Lesson_isFree` tinyint(1) DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `lesson`
--

INSERT INTO `lesson` (`Lesson_ID`, `Chap_ID`, `Lesson_header`, `Lesson_description`, `Lesson_uploadedAt`, `Lesson_updatedAt`, `Lesson_video`, `Lesson_view`, `Lesson_isFree`) VALUES
(2, 2, 'Java Course 2', 'Details about java course', '2021-12-27 08:53:30', '2022-01-10 15:33:46', 'https://www.youtube.com/watch?v=lTRiuFIWV54', 0, 1),
(3, 3, 'Head 3_1', 'Des 3_1', '2021-12-27 09:05:55', NULL, 'https://www.youtube.com/watch?v=5Q2Pc-e-8Qc', 0, 1),
(4, 4, 'Head 3_2', 'Des 3_2', '2021-12-27 09:06:17', NULL, 'https://www.youtube.com/watch?v=C2dTGSd3ax4', 0, 1),
(5, 5, 'Head 3_3', 'Des 3_3', '2021-12-27 09:06:38', NULL, 'https://www.youtube.com/watch?v=8FHAZQIgJIg', 0, 0),
(6, 6, 'Head 4_1', 'Des 4_1', '2021-12-27 09:06:58', NULL, 'https://www.youtube.com/watch?v=ok7kbM38NlM', 0, 0),
(7, 6, 'Head 4_2', 'Des 4_2', '2021-12-27 09:07:09', NULL, 'https://www.youtube.com/watch?v=MFaVlU28l2g', 0, 0),
(8, 6, 'Head 4_3', 'Des 4_3', '2021-12-27 09:07:36', NULL, 'https://www.youtube.com/watch?v=7Lf8dZ1fj1Y', 0, 0),
(9, 7, 'Head 5_1', 'Des 5_1', '2021-12-27 09:07:56', NULL, 'https://www.youtube.com/watch?v=hoFMs-AD_Pc', 0, 0),
(10, 8, 'Head 6_1', 'Des 6_1', '2021-12-27 09:08:13', NULL, 'https://www.youtube.com/watch?v=BtG48vVGgGA', 0, 0),
(11, 8, 'Head 6_2', 'Des 6_2', '2021-12-27 09:08:47', NULL, 'https://www.youtube.com/watch?v=BtG48vVGgGA', 0, 0),
(12, 10, 'Head 6_3', 'Des 6_3', '2021-12-27 09:08:59', NULL, 'https://www.youtube.com/watch?v=lWA1YQxYdyc', 0, 0),
(13, 10, 'Head 6_4', 'Des 6_4', '2021-12-27 09:09:09', NULL, 'https://www.youtube.com/watch?v=jzPymvGWAGg', 0, 0),
(14, 19, 'tim hoai khong thay', 'dien ta dien dich', '2022-01-09 17:18:47', NULL, 'https://www.youtube.com/watch?v=5qap5aO4i9A', 0, 0),
(15, 20, 'Bai hoc ia ra khoi', 'Ia ra ca khoi', '2022-01-09 17:19:06', NULL, 'https://res.cloudinary.com/drvrg0ixi/video/upload/v1641748745/video/gvcbrfb0qrgcnd7lsjth.3gp', 0, 0);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(1, '2014_10_12_000000_create_users_table', 1),
(2, '2014_10_12_100000_create_password_resets_table', 1),
(3, '2016_06_01_000001_create_oauth_auth_codes_table', 1),
(4, '2016_06_01_000002_create_oauth_access_tokens_table', 1),
(5, '2016_06_01_000003_create_oauth_refresh_tokens_table', 1),
(6, '2016_06_01_000004_create_oauth_clients_table', 1),
(7, '2016_06_01_000005_create_oauth_personal_access_clients_table', 1),
(8, '2019_08_19_000000_create_failed_jobs_table', 1),
(9, '2019_12_14_000001_create_personal_access_tokens_table', 1);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `oauth_access_tokens`
--

CREATE TABLE `oauth_access_tokens` (
  `id` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `user_id` bigint(20) UNSIGNED DEFAULT NULL,
  `client_id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `scopes` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `revoked` tinyint(1) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `expires_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `oauth_access_tokens`
--

INSERT INTO `oauth_access_tokens` (`id`, `user_id`, `client_id`, `name`, `scopes`, `revoked`, `created_at`, `updated_at`, `expires_at`) VALUES
('01fa9fab705786a6f983c7a256644751a1693a5b4fed05ff79eac6b1d1d0c001e55e4eb13bc80605', 6, 3, 'access_token', '[]', 0, '2022-01-18 10:20:49', '2022-01-18 10:20:49', '2023-01-18 17:20:49'),
('46a585e26b8c1b1b365d5029e77bc8313224dcb6a6fe177e7f1536343d6e2151c9bc8207448bf77d', 12, 3, 'Key', '[]', 0, '2022-01-11 08:31:31', '2022-01-11 08:31:31', '2023-01-11 15:31:31'),
('66797e60bb66232487d91d0c8756cf4866e72ab558e195e798111329927e628f43e48a46c038a503', 4, 3, 'access_token', '[]', 0, '2022-01-12 08:26:15', '2022-01-12 08:26:15', '2023-01-12 15:26:15'),
('9b28de46b73b1c41c7d42536954f5147b7d8da4f0b2387935a81cd6fd10fa9fad8479a1ede2e4e8b', 6, 3, 'access_token', '[]', 0, '2022-01-17 09:56:26', '2022-01-17 09:56:26', '2023-01-17 16:56:26'),
('a183cd891bad820980db41a2f7b42443af86e4a38736b5e4b75aa5c7ee7a9b836806aa0aff6c8703', 12, 3, 'access_token', '[]', 0, '2022-01-12 07:50:28', '2022-01-12 07:50:28', '2023-01-12 14:50:28'),
('c1a305a21597de42117ce67d7f4d656d4964ddfb4eeabca4cdfc5e942871dbc0ad9a5049174d6151', 6, 3, 'access_token', '[]', 0, '2022-01-18 10:28:17', '2022-01-18 10:28:17', '2023-01-18 17:28:17'),
('c46e7916efa22fed6baae9fc3bf3b7f0a14877817102e5cf97787f4a2fb0a87f4426eb2cab9f88df', 6, 3, 'access_token', '[]', 0, '2022-01-18 10:23:19', '2022-01-18 10:23:19', '2023-01-18 17:23:19'),
('c899a746ce0c07cf410343cbe0e9518b42faa5036a3d1f0ea0a9001a58f162d7571eb60aa868d340', 12, 3, '', '[]', 0, '2022-01-11 08:22:09', '2022-01-11 08:22:09', '2023-01-11 15:22:09'),
('c8ffde14f4aba8f9ef98c852816b628c6f422d650ee261a49df28bce7ba7f6cab9a0928e6dcce99e', 12, 3, '', '[]', 0, '2022-01-11 08:31:35', '2022-01-11 08:31:35', '2023-01-11 15:31:35'),
('f590d6ddd502a5fe8ebacb9a359c64ef62ccff9d5b1f58a2b914a47d6e687367af8e131b0dfe1661', 4, 3, 'access_token', '[]', 0, '2022-01-17 07:25:36', '2022-01-17 07:25:36', '2023-01-17 14:25:36'),
('f9e37225aa352fa108da62f8f0fcc6a4e5912a4b40b30a90a15ad6618b3fa2b18361c4865c3d489a', 12, 3, 'access_token', '[]', 0, '2022-01-12 07:49:30', '2022-01-12 07:49:30', '2023-01-12 14:49:30');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `oauth_auth_codes`
--

CREATE TABLE `oauth_auth_codes` (
  `id` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `user_id` bigint(20) UNSIGNED NOT NULL,
  `client_id` bigint(20) UNSIGNED NOT NULL,
  `scopes` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `revoked` tinyint(1) NOT NULL,
  `expires_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `oauth_clients`
--

CREATE TABLE `oauth_clients` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `user_id` bigint(20) UNSIGNED DEFAULT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `secret` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `provider` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `redirect` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `personal_access_client` tinyint(1) NOT NULL,
  `password_client` tinyint(1) NOT NULL,
  `revoked` tinyint(1) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `oauth_clients`
--

INSERT INTO `oauth_clients` (`id`, `user_id`, `name`, `secret`, `provider`, `redirect`, `personal_access_client`, `password_client`, `revoked`, `created_at`, `updated_at`) VALUES
(1, NULL, 'Laravel Personal Access Client', '9f24Lq653nwBmDiyeWzJCTkwZkLYzVqA5EYyR5SE', NULL, 'http://localhost', 1, 0, 0, '2022-01-11 07:21:08', '2022-01-11 07:21:08'),
(2, NULL, 'Laravel Password Grant Client', 'XdkTZ8UBh4TJJanV49o39Ef3lKpP6zZ3D6bLJWTJ', 'users', 'http://localhost', 0, 1, 0, '2022-01-11 07:21:08', '2022-01-11 07:21:08'),
(3, NULL, 'Laravel Personal Access Client', 'qklTZPicbULWJErizajlnNphqOPX1m06PCn1jcF3', NULL, 'http://localhost', 1, 0, 0, '2022-01-11 07:21:26', '2022-01-11 07:21:26'),
(4, NULL, 'Laravel Password Grant Client', 'CxxxDkEelvnAeCEpdReFxs9n54jwASrnWiCJL4vM', 'users', 'http://localhost', 0, 1, 0, '2022-01-11 07:21:26', '2022-01-11 07:21:26');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `oauth_personal_access_clients`
--

CREATE TABLE `oauth_personal_access_clients` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `client_id` bigint(20) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `oauth_personal_access_clients`
--

INSERT INTO `oauth_personal_access_clients` (`id`, `client_id`, `created_at`, `updated_at`) VALUES
(1, 1, '2022-01-11 07:21:08', '2022-01-11 07:21:08'),
(2, 3, '2022-01-11 07:21:26', '2022-01-11 07:21:26');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `oauth_refresh_tokens`
--

CREATE TABLE `oauth_refresh_tokens` (
  `id` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `access_token_id` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `revoked` tinyint(1) NOT NULL,
  `expires_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `password_resets`
--

CREATE TABLE `password_resets` (
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `paymenthistory`
--

CREATE TABLE `paymenthistory` (
  `Payment_ID` int(11) NOT NULL,
  `Payment_price` decimal(10,0) DEFAULT NULL,
  `Payment_Note` mediumtext DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `paymenthistory`
--

INSERT INTO `paymenthistory` (`Payment_ID`, `Payment_price`, `Payment_Note`) VALUES
(3, '1500', NULL),
(4, '1500', NULL);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `personal_access_tokens`
--

CREATE TABLE `personal_access_tokens` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `tokenable_type` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `tokenable_id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(64) COLLATE utf8mb4_unicode_ci NOT NULL,
  `abilities` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `last_used_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `personal_access_tokens`
--

INSERT INTO `personal_access_tokens` (`id`, `tokenable_type`, `tokenable_id`, `name`, `token`, `abilities`, `last_used_at`, `created_at`, `updated_at`) VALUES
(1, 'App\\Models\\User', 12, 'Key', '19dd9f5e6ad5b6480326ebeb4f989b21c0a74a14bea87cf4e962012137cc6335', '[\"*\"]', NULL, '2022-01-11 07:42:13', '2022-01-11 07:42:13'),
(2, 'App\\Models\\User', 12, 'Key', '7ad90c01995e96bc762ed51c02fa7c0060e6c085476c8740d1dee699dbc08ab2', '[\"*\"]', NULL, '2022-01-11 07:48:24', '2022-01-11 07:48:24'),
(3, 'App\\Models\\User', 12, 'Key', '11a6d2feb42d3b68d980100adb223202c0d475b2e10b71895220b056b1dfb51b', '[\"*\"]', NULL, '2022-01-11 07:51:14', '2022-01-11 07:51:14'),
(4, 'App\\Models\\User', 12, 'Key', 'fcbcbcf3fe58cf11d59de3729b68a9fa3aea198f081a32a5d2f91c2e3b7b04d3', '[\"*\"]', NULL, '2022-01-11 07:52:35', '2022-01-11 07:52:35'),
(5, 'App\\Models\\User', 12, 'MyApp', 'f768a295850f7103673f2f31737080a6495218a59f16046de22713591ce7d6f3', '[\"*\"]', NULL, '2022-01-11 07:52:58', '2022-01-11 07:52:58'),
(6, 'App\\Models\\User', 12, 'MyApp', '4716a571a80d8159467ee910b10b87d89fca03a6c2e692d6e7c8ee79854c5637', '[\"*\"]', NULL, '2022-01-11 07:54:44', '2022-01-11 07:54:44'),
(7, 'App\\Models\\User', 12, 'MyApp', '26b5eaf4fdd25a3c316c7aaf5407f2fe6e75b35b94b634d3b3f44762db31e834', '[\"*\"]', NULL, '2022-01-11 07:54:56', '2022-01-11 07:54:56');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `tag`
--

CREATE TABLE `tag` (
  `Tag_ID` int(11) NOT NULL,
  `Tag_name` varchar(20) NOT NULL,
  `Category_ID` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `tag`
--

INSERT INTO `tag` (`Tag_ID`, `Tag_name`, `Category_ID`) VALUES
(1, 'Tag1_1', 1),
(2, 'Tag1_2', 1),
(3, 'Tag1_3', 1),
(4, 'Tag2_1', 2),
(5, 'Tag2_2', 2),
(6, 'Tag2_3', 2),
(7, 'Tag3_1', 3),
(8, 'Tag3_2', 3),
(9, 'Tag3_3', 3),
(10, 'Tag4_1', 4),
(11, 'Tag4_2', 4),
(12, 'Tag4_3', 4),
(13, 'Tag5_1', 5),
(14, 'Tag5_2', 5),
(15, 'Tag5_3', 5);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `teacherinformation`
--

CREATE TABLE `teacherinformation` (
  `Teacher_ID` int(11) NOT NULL,
  `Teacher_header` mediumtext DEFAULT NULL,
  `Teacher_description` mediumtext DEFAULT NULL,
  `Teacher_updatedAt` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `teacherinformation`
--

INSERT INTO `teacherinformation` (`Teacher_ID`, `Teacher_header`, `Teacher_description`, `Teacher_updatedAt`) VALUES
(12, 'Giao vien dinh cao', 'Da co 1 ngay kinh nghiem', '2022-01-08 07:57:02');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `user`
--

CREATE TABLE `user` (
  `User_ID` int(11) NOT NULL,
  `User_account` varchar(256) NOT NULL,
  `User_password` varchar(256) NOT NULL,
  `User_name` varchar(256) NOT NULL,
  `User_DoB` date NOT NULL,
  `User_phone` varchar(12) NOT NULL,
  `User_lastSeen` datetime DEFAULT NULL,
  `User_role` int(11) NOT NULL,
  `User_image` mediumtext DEFAULT NULL,
  `User_createdAt` datetime DEFAULT NULL,
  `User_updatedAt` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `user`
--

INSERT INTO `user` (`User_ID`, `User_account`, `User_password`, `User_name`, `User_DoB`, `User_phone`, `User_lastSeen`, `User_role`, `User_image`, `User_createdAt`, `User_updatedAt`) VALUES
(2, 'teacher1@gmail.com', '$2y$10$7bcxh7EPVNSzoUN/C47pge4ZNV5.5/rixFAVc3KEfJSdVicM54mEa', 'Teacher 1', '2000-12-10', '000000000001', NULL, 1, 'NULL', '2021-12-27 08:22:22', '2021-12-27 08:22:22'),
(3, 'teacher2@gmail.com', '$2y$10$7bcxh7EPVNSzoUN/C47pge4ZNV5.5/rixFAVc3KEfJSdVicM54mEa', 'Teacher 2', '2000-12-11', '000000000002', NULL, 1, 'NULL', '2021-12-27 08:55:05', '2021-12-27 08:55:05'),
(4, 'admin@gmail.com', '$2y$10$7bcxh7EPVNSzoUN/C47pge4ZNV5.5/rixFAVc3KEfJSdVicM54mEa', 'Admin', '2000-12-12', '000000000003', NULL, 0, 'NULL', '2021-12-27 08:55:59', '2021-12-27 08:55:59'),
(5, 'teacher3@gmail.com', '$2y$10$7bcxh7EPVNSzoUN/C47pge4ZNV5.5/rixFAVc3KEfJSdVicM54mEa', 'Teacher 3', '2000-12-13', '000000000004', NULL, 1, 'NULL', '2021-12-27 08:56:38', '2021-12-27 08:56:38'),
(6, 'user1@gmail.com', '$2y$10$7bcxh7EPVNSzoUN/C47pge4ZNV5.5/rixFAVc3KEfJSdVicM54mEa', 'Toi ten la user 1', '2000-08-08', '000000000005', NULL, 2, 'https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/4/6/photo-1-16177017063062053106497.jpg', '2021-12-27 15:53:56', '2022-01-17 17:09:11'),
(7, 'user2@gmail.com', '$2y$10$7bcxh7EPVNSzoUN/C47pge4ZNV5.5/rixFAVc3KEfJSdVicM54mEa', 'user 2', '2000-12-15', '000000000006', NULL, 2, 'NULL', '2021-12-28 15:14:57', '2021-12-28 15:14:57'),
(9, 'user4@gmail.com', '$2y$10$7bcxh7EPVNSzoUN/C47pge4ZNV5.5/rixFAVc3KEfJSdVicM54mEa', 'user 4', '2000-12-17', '000000000008', NULL, 2, NULL, '2022-01-07 15:37:26', '2022-01-07 15:37:26'),
(12, 'teacher4@gmail.com', '$2y$10$Nez60w.dpS10Z6aCfhAlv.X2XXeX7qq0nQrdyejbZQhpknZSv8AFe', 'teacher 4', '2000-12-18', '000000000009', NULL, 1, NULL, NULL, NULL),
(13, 'user100@gmail.com', '$2y$10$0ZnqvhwYJtSSIkkJtX22v.o3E07D5FobjyYR7QhEdo7FbV95jzHYW', 'user 11', '2000-12-18', '000000000011', NULL, 2, NULL, '2022-01-17 18:37:37', '2022-01-17 18:37:37');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `users`
--

CREATE TABLE `users` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `remember_token` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Chỉ mục cho các bảng đã đổ
--

--
-- Chỉ mục cho bảng `category`
--
ALTER TABLE `category`
  ADD PRIMARY KEY (`Category_ID`),
  ADD UNIQUE KEY `Category_name` (`Category_name`);

--
-- Chỉ mục cho bảng `chap`
--
ALTER TABLE `chap`
  ADD PRIMARY KEY (`Chap_ID`),
  ADD KEY `fk_chap_course_id` (`Course_ID`);

--
-- Chỉ mục cho bảng `comment`
--
ALTER TABLE `comment`
  ADD PRIMARY KEY (`Comment_ID`),
  ADD KEY `Comment_by` (`Comment_by`),
  ADD KEY `Comment_in` (`Comment_in`);

--
-- Chỉ mục cho bảng `course`
--
ALTER TABLE `course`
  ADD PRIMARY KEY (`Course_ID`),
  ADD KEY `Author_ID` (`Author_ID`),
  ADD KEY `fk_category_id` (`Course_category`);

--
-- Chỉ mục cho bảng `courseenrollment`
--
ALTER TABLE `courseenrollment`
  ADD KEY `Payment_ID` (`Payment_ID`),
  ADD KEY `User_ID` (`User_ID`),
  ADD KEY `Course_ID` (`Course_ID`),
  ADD KEY `Learning_history` (`Learning_history`);

--
-- Chỉ mục cho bảng `coursetag`
--
ALTER TABLE `coursetag`
  ADD KEY `fk_coursetag_course_id` (`Course_ID`),
  ADD KEY `fk_coursetag_tag_id` (`Tag_ID`);

--
-- Chỉ mục cho bảng `failed_jobs`
--
ALTER TABLE `failed_jobs`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`);

--
-- Chỉ mục cho bảng `lesson`
--
ALTER TABLE `lesson`
  ADD PRIMARY KEY (`Lesson_ID`),
  ADD KEY `Course_ID` (`Chap_ID`);

--
-- Chỉ mục cho bảng `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `oauth_access_tokens`
--
ALTER TABLE `oauth_access_tokens`
  ADD PRIMARY KEY (`id`),
  ADD KEY `oauth_access_tokens_user_id_index` (`user_id`);

--
-- Chỉ mục cho bảng `oauth_auth_codes`
--
ALTER TABLE `oauth_auth_codes`
  ADD PRIMARY KEY (`id`),
  ADD KEY `oauth_auth_codes_user_id_index` (`user_id`);

--
-- Chỉ mục cho bảng `oauth_clients`
--
ALTER TABLE `oauth_clients`
  ADD PRIMARY KEY (`id`),
  ADD KEY `oauth_clients_user_id_index` (`user_id`);

--
-- Chỉ mục cho bảng `oauth_personal_access_clients`
--
ALTER TABLE `oauth_personal_access_clients`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `oauth_refresh_tokens`
--
ALTER TABLE `oauth_refresh_tokens`
  ADD PRIMARY KEY (`id`),
  ADD KEY `oauth_refresh_tokens_access_token_id_index` (`access_token_id`);

--
-- Chỉ mục cho bảng `password_resets`
--
ALTER TABLE `password_resets`
  ADD KEY `password_resets_email_index` (`email`);

--
-- Chỉ mục cho bảng `paymenthistory`
--
ALTER TABLE `paymenthistory`
  ADD PRIMARY KEY (`Payment_ID`);

--
-- Chỉ mục cho bảng `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `personal_access_tokens_token_unique` (`token`),
  ADD KEY `personal_access_tokens_tokenable_type_tokenable_id_index` (`tokenable_type`,`tokenable_id`);

--
-- Chỉ mục cho bảng `tag`
--
ALTER TABLE `tag`
  ADD PRIMARY KEY (`Tag_ID`),
  ADD UNIQUE KEY `Tag_name` (`Tag_name`),
  ADD KEY `Category_ID` (`Category_ID`);

--
-- Chỉ mục cho bảng `teacherinformation`
--
ALTER TABLE `teacherinformation`
  ADD KEY `fk_teacherinfor_teacher_id` (`Teacher_ID`);

--
-- Chỉ mục cho bảng `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`User_ID`),
  ADD UNIQUE KEY `User_account` (`User_account`),
  ADD UNIQUE KEY `User_phone` (`User_phone`);

--
-- Chỉ mục cho bảng `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_email_unique` (`email`);

--
-- AUTO_INCREMENT cho các bảng đã đổ
--

--
-- AUTO_INCREMENT cho bảng `category`
--
ALTER TABLE `category`
  MODIFY `Category_ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT cho bảng `chap`
--
ALTER TABLE `chap`
  MODIFY `Chap_ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- AUTO_INCREMENT cho bảng `comment`
--
ALTER TABLE `comment`
  MODIFY `Comment_ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT cho bảng `course`
--
ALTER TABLE `course`
  MODIFY `Course_ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=27;

--
-- AUTO_INCREMENT cho bảng `failed_jobs`
--
ALTER TABLE `failed_jobs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT cho bảng `lesson`
--
ALTER TABLE `lesson`
  MODIFY `Lesson_ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT cho bảng `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT cho bảng `oauth_clients`
--
ALTER TABLE `oauth_clients`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT cho bảng `oauth_personal_access_clients`
--
ALTER TABLE `oauth_personal_access_clients`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT cho bảng `paymenthistory`
--
ALTER TABLE `paymenthistory`
  MODIFY `Payment_ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT cho bảng `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT cho bảng `tag`
--
ALTER TABLE `tag`
  MODIFY `Tag_ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT cho bảng `user`
--
ALTER TABLE `user`
  MODIFY `User_ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT cho bảng `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- Các ràng buộc cho các bảng đã đổ
--

--
-- Các ràng buộc cho bảng `chap`
--
ALTER TABLE `chap`
  ADD CONSTRAINT `fk_chap_course_id` FOREIGN KEY (`Course_ID`) REFERENCES `course` (`Course_ID`);

--
-- Các ràng buộc cho bảng `comment`
--
ALTER TABLE `comment`
  ADD CONSTRAINT `comment_ibfk_1` FOREIGN KEY (`Comment_by`) REFERENCES `user` (`User_ID`),
  ADD CONSTRAINT `comment_ibfk_2` FOREIGN KEY (`Comment_in`) REFERENCES `course` (`Course_ID`);

--
-- Các ràng buộc cho bảng `course`
--
ALTER TABLE `course`
  ADD CONSTRAINT `course_ibfk_2` FOREIGN KEY (`Author_ID`) REFERENCES `user` (`User_ID`),
  ADD CONSTRAINT `fk_category_id` FOREIGN KEY (`Course_category`) REFERENCES `category` (`Category_ID`);

--
-- Các ràng buộc cho bảng `courseenrollment`
--
ALTER TABLE `courseenrollment`
  ADD CONSTRAINT `courseenrollment_ibfk_1` FOREIGN KEY (`Payment_ID`) REFERENCES `paymenthistory` (`Payment_ID`),
  ADD CONSTRAINT `courseenrollment_ibfk_2` FOREIGN KEY (`User_ID`) REFERENCES `user` (`User_ID`),
  ADD CONSTRAINT `courseenrollment_ibfk_3` FOREIGN KEY (`Course_ID`) REFERENCES `course` (`Course_ID`),
  ADD CONSTRAINT `courseenrollment_ibfk_4` FOREIGN KEY (`Learning_history`) REFERENCES `lesson` (`Lesson_ID`);

--
-- Các ràng buộc cho bảng `coursetag`
--
ALTER TABLE `coursetag`
  ADD CONSTRAINT `fk_coursetag_course_id` FOREIGN KEY (`Course_ID`) REFERENCES `course` (`Course_ID`),
  ADD CONSTRAINT `fk_coursetag_tag_id` FOREIGN KEY (`Tag_ID`) REFERENCES `tag` (`Tag_ID`);

--
-- Các ràng buộc cho bảng `tag`
--
ALTER TABLE `tag`
  ADD CONSTRAINT `tag_ibfk_1` FOREIGN KEY (`Category_ID`) REFERENCES `category` (`Category_ID`);

--
-- Các ràng buộc cho bảng `teacherinformation`
--
ALTER TABLE `teacherinformation`
  ADD CONSTRAINT `fk_teacherinfor_teacher_id` FOREIGN KEY (`Teacher_ID`) REFERENCES `user` (`User_ID`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
