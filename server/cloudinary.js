// require('dotenv').config();
const cloudinary = require('cloudinary').v2;
cloudinary.config({
    cloud_name: "fast123",
    api_key: 761841385784952,
    api_secret: 'vzFakAh_Vw8BTckHSRZGUGeKMkw',
});

module.exports = { cloudinary };