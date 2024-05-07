// controllers/homeController.js
const homeController = {};

homeController.homePage = (req, res) => {
    // Render the home page view with all necessary components
    res.render('home', { title: 'Home Page' });
};

module.exports = homeController;
