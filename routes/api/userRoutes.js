const router = require('express').Router();
const userController = require("../../controllers/users-controller")

router.route('/').get(userController.getAllUsers).post(userController.postNewUser)

router.route("/:id").get(userController.getUserId).put(userController.updateUser).delete(userController.deleteThought)

router.route(":id/thoughtId/:friendId").post(userController.addFriend).delete(userController.deleteThought)

module.exports = router;