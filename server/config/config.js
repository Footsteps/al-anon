export const config = {
  port: process.env.PORT || 3000,

  mail: {
    to: process.env.MAIL_TO,
    from: process.env.MAIL_FROM,
    subject: "Al-Anon App",
  },

  upload: {
    maxFileSize: 5 * 1024 * 1024,
    allowedMimeTypes: [
      "application/pdf",
      "image/jpeg",
      "image/png",
      "image/webp",
    ],
  },
};