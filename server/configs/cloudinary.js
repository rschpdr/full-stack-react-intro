const cloudinary = require("cloudinary");
const cloudinaryStorage = require("multer-storage-cloudinary");
const multer = require("multer");

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_KEY,
  api_secret: process.env.CLOUD_API_SECRET,
});

const storage = cloudinaryStorage({
  cloudinary: cloudinary,
  folder: "task_attachments", // The name of the folder in cloudinary
  allowedFormats: ["jpg", "png"],
  // params: { resource_type: 'raw' }, => this is in case you want to upload other type of files, not just images
  filename: function (req, file, cb) {
    cb(null, file.originalname); // The file on cloudinary would have the same name as the original file name
  },
});

//                        storage: storage
const uploadCloud = multer({ storage: storage });

module.exports = uploadCloud;
