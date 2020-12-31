const { authJwt } = require("../middlewares")
const controller = require("../controllers/user.controller")

module.exports = function(app) {
    app.use((req, res, next)=> {
        res.header(
            "Access-Control-Allow-Headers",
            "x-access-token, Origin, Content-type, Accept"
        )
        next()
    })
    app.get("/api/test/all", controller.allAccess)
    app.get("/api/test/user", [authJwt.verifyWebToken], controller.userBoard)
    app.get("/api/test/admin", [authJwt.verifyWebToken, authJwt.isAdmin],
    controller.adminBoard)
    app.get("/api/user/favorites", controller.getAllFavorites)
    app.put("/api/user/favorites", controller.addFavorites)
    app.delete("/api/user/favorites", controller.deleteFavorite)

}

