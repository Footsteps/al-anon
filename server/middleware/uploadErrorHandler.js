import multer from "multer";
export function uploadErrorHandler(err, req, res, next) {
  if (err instanceof multer.MulterError) {
    if (err.code === "LIMIT_FILE_SIZE") {
      return res.status(400).json({
        success: false,
        errors: {
          flyer: "file_too_large",
        },
      });
    }
  }

  if (err.message === "invalid_file_type") {
    return res.status(400).json({
      success: false,
      errors: {
        flyer: "invalid_file_type",
      },
    });
  }

  next(err);
}