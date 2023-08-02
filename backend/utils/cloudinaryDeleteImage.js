const cloudinary = require("cloudinary");

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.SECRET_KEY,
});

const cloudinaryDeleteImage = async (fileToDelete) => {
  try {
    return new Promise((resolve, reject) => {
      cloudinary.uploader.destroy(
        fileToDelete,
        (result, error) => {
          if (error) {
            reject(error);
          } else {
            resolve({
              url: result.secure_url,
              asset_id: result.asset_id,
              public_id: result.public_id,
            });
          }
        },
        { resource_type: "auto" }
      );
    });
  } catch (error) {
    throw new Error(error.message);
  }
};

module.exports = cloudinaryDeleteImage;
