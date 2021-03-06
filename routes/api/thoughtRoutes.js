const router = require('express').Router();
const thoughtController = require('../../controllers/thought-controller')


// api/thoughts
router.route('/').get(thoughtController.getThoughts).post(thoughtController.addThought)

// api/thoughts/:thoughtId
router.route("/:thoughtId").get(thoughtController.getSingleThought).put(thoughtController.updateThought).delete(thoughtController.deleteThought)

// api/thoughts/:thoughtId/reactions
router.route('/:thoughtId/reactions').post(thoughtController.addReaction)

// api/thoughts/:thoughtId/reactions
router.route('/:thoughtId/reactions/:reactionId').delete(thoughtController.removeReaction)

module.exports = router;
