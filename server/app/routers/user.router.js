module.exports = router = function(router){
    var user = require('../controllers/user.controller');

    router.get("/api/user/all/",  user.all);

    router.get("/api/user/get-by-id-card/:id_card",  user.getByIdCard);
    
    router.post("/api/user/add", user.add);
    
    router.delete("/api/user/delete/:id", user.delete);

    router.put("/api/user/update", user.update);
    
};