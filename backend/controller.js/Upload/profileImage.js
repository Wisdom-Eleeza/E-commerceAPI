import cloudinary from '../../utils/cloudinary.upload';

const uploadProfile = (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({
        success: false,
        message: 'No file provided',
      });
    }

    cloudinary.uploader.upload(
      req.file.path,
      function (uploadErr, result) {
        if (uploadErr) {
          return res.status(500).json({
            success: false,
            message: 'Error uploading profile image',
          });
        }

        console.log(req.file); // Ensure req.file is defined and contains the file information

        res.status(200).json({
          success: true,
          message: 'Image Uploaded Successfully',
          data: result,
        });
      },
    );
  } catch (error) {
    console.error('Error uploading image:', error);
    res.status(500).json({
      success: false,
      message: 'An error occurred while uploading the image',
    });
  }
};

export default uploadProfile;
