import multer from "multer";
import routes from "./routes";

export const multerVideo = multer({ dest: "uploads/videos/" });

export const localMiddleWare = (req, res, next) => {
  res.locals.siteName = "WeTube";
  res.locals.routes = routes;
  res.locals.user = {
    // 가짜 유저 데이터
    isAuthenticated: true,
    id: 1,
  };
  next();
};

export const uploadVideo = multerVideo.single("videoFile");

// local이 추가되어서 어디에서든 쓸 수 있다.
// 요건 중요한 정보들을 보낼때 유용하다.
// local에 로컬 변수를 저장하면, 저장된 변수들을 템플릿에 사용할 수 있다!!
