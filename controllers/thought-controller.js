const { User, Thought} = require ("../models")

//get all thoughts 
const thoughtController = {
    getThoughts(req, res) {
      Thought.find()
        .then((dbThoughtData) => {
          res.json(dbThoughtData);
        })
        .catch((err) => {
          console.log(err);
          res.status(500).json(err);
        });
    },

    //get thought by id
    getSingleThought(req, res) {
        Thought.findOne({ _id: req.params.thoughtId })
        .then((dbThoughtData) => {
            if (!dbThoughtData) {
                return res.status(404).json({ message : 'No user associated  with this id!'})
            }
            res.json(dbThoughtData)
        })
        .catch((err) => {
            console.log(err);
            res.status(500).json(err);
          });
    },

    //create a new thought
    addThought(req, res) {
        Thought.create(req.body)
        .then((dbThoughtData) =>{
            return User.findOneAndUpdate(
                {_id: req.body.userId},
                { $push: {thoughts: dbThoughtData._id}},
                { new: true }
            )
        })
        .then((dbUserData) => {
            if (!dbUserData) {
                return res.status(400).json({ message: "No user found with this ID!"})
            }
            res.json( {message: "Thought creation a success!" })
        }) 
        .catch((err) => {
            console.log(err);
            res.status(500).json(err);
          });
    },

    //update a thought
    updateThought(req, res) {
        Thought.findOneAndUpdate(
            { _id: req.params.thoughtId},
            { $set: req.body },
            {runValidators: true, new: true }
             )
             .then((dbThoughtData)=> {
                if (!dbThoughtData) {
                    return res.status(400).json({ message: 'No thought associated with this id!'})
                }
                res.json(dbThoughtData)
             }) 
             .catch((err) => {
                console.log(err);
                res.status(500).json(err);
              });
    },

    // delete a thought
    deleteThought(req, res) {
        Thought.findByIdAndRemove({ _id: req.params.thoughtId })
        .then((dbThoughtData) => {
            if (!dbThoughtData) {
                return res.status(404).json({ message: " No thought associated with this id!"})
            }
            return User.findOneAndUpdate(
                {thoughts: req.params.thoughtId },
                {$pull: {thoughts: req.params.thoughtId }},
                { new: true }
                )
        })
        .then((dbUserData) => {
            if (!dbUserData) {
                return res.status(404).json({message: "Created a thought but with no user to this id"})
            }
            res.json({ message: 'Thought was deleted!'})
        })
        .catch((err) => {
            console.log(err);
            res.status(500).json(err);
          });
    },

    //reaction added to a thought
    addReaction(req, res) {
        Thought.findByIdAndUpdate(
            { _id: req.params.thoughtId },
            { $addToSet: { reactions: req.body }},
            { runValidators: true, new: true }
        )
        .then((dbThoughtData) => {
            if (!dbThoughtData) {
                return res.status(404).json({ message: 'No thought associated with this Id!'})
            }
            res.json(dbThoughtData)
        })
        .catch((err) => {
            console.log(err);
            res.status(500).json(err);
          });
    },

    //remove the reaction from the thought
    removeReaction(req,res ) {
        Thought.findOneAndUpdate(
            { _id: req.params.thoughtId},
            { $pull: { reactions: { reactionId: req.params.reactionId}}},
            { runValidators: true, new: true }
        )
        .then((dbThoughtData) => {
            if (!dbThoughtData) {
                return res.status(404).json({ message: 'No thought associated with this Id!'})
            }
            res.json(dbThoughtData)
        })
        .catch((err) => {
            console.log(err);
            res.status(500).json(err);
          });
    }
}


 module.exports = thoughtController
