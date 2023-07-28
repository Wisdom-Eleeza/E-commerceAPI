const Blog = require('../models/blogModel')
const userModel = require('../models/userModel')
const asyncHandler = require('express-async-handler')
const cloudinaryUploadImage = require('../utils/cloudinary')
const fs = require('fs')

const createBlog = asyncHandler(async (req, res) => {
    const { id } = req.params
    try {
        const updateBlog = await Blog.findByIdAndUpdate(id, req.body, {
            new: true,
        })
        res.json(updateBlog)
    } catch (error) {
        throw new Error(error)
    }
})

module.exports = createBlog