//functionality for post, get, delete (maybe update too)

const {Goal} = require('./Models/Goal');

const GoalController = {
  //create the goal
  postGoal(req, res){
    Goal.create({ 
      'item': req.body.goal
    })
      .then(data => res.status(200).json(data))
      .catch(err => res.status(400).send(err));
  },
  //get the goal from the database
  getGoal(req, res) {
    Goal.find({})
      .then(data => {
        if(data){
          res.status(200).json(data);
        }
        else
          res.status(400).send('goal not found');
      })
      .catch(err => res.status(400).send(err));
    }, 
      // Delete a goal from the database and the goal will be sent in the request parameter
  deleteGoal(req, res, next) {
    Goal.deleteOne( { '_id': req.params.id }) //locate the goal with the specific id and in response delete that item/id
      .then(data => {
        res.locals.deleteThis = data.deletedCount;
        return next();
      })
      .catch(err => next(err));
  },
}



module.expotrs = GoalController
