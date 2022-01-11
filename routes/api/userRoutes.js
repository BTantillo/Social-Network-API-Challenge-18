const router = require('express').Router();
const userController = require("../../controllers/users-controller")

router.route('/').get(userController.getAllUsers).post(userController.postNewUser)

router.route("/:id").get(userController.getUserId).put(userController.updateUser).delete(userController.deleteUser)

router.route("/:id/friends/:friendId").post(userController.addFriend).delete(userController.deleteFriend)

module.exports = router;