const router = require('express').Router();
const thoughtController = require('../../controllers/thought-controller')


// api/thoughts
router.route('/').get(thoughtController.getAllUsers).post(thoughtController.addThought)

// api/thoughts/:thoughtId
router.route("/:thoughtId").get(getSingleThought.getThoughts).put(getSingleThought.updateThought).delete(getSingleThought.deleteThought)

// api/thoughts/:thoughtId/reactions
router.route('/:thoughtId/reactions').post(addReaction)

// api/thoughts/:thoughtId/reactions
route.route('/:thoughtId/reactions/:reactionsId').delete(deleteThought)

module.exports = router;
