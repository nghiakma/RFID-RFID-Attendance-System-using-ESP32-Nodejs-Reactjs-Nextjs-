module.exports = router = function(router){
    var admin = require('../controllers/admin.controller');

    router.post("/api/admin/login", admin.handleLogin);
};