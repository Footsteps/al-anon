import multer from "multer";
import {config} from "../config/config.js"

const storage = multer.memoryStorage();

const fileFilter = (req, file, cb) => {
  if (config.upload.allowedMimeTypes.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(new Error("invalid_file_type"));
  }
};

export const upload = multer({
  storage,
  fileFilter,
  limits: {
    fileSize: config.upload.maxFileSize,
  },
});