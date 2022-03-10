const tasks = require("../task/index");

module.exports.getAllTasks = async (req, res, ) => {
  Task.find().then((result) => {
    res.send({ data: result });
  });
};

module.exports.createNewTask = (req, res) => {
  const task = new Task(req.body);
  task.save().then((result) => {
      Task.find().then((result) => {
        res.send({ data: result });
      });
    })
    .catch((err) => console.log(err));
};

module.exports.changeTaskInfo = (req, res) => {
  Task.updateOne({ _id: req.body._id }, req.body).then((resul) => {
    Task.find({ _id: req.body._id }).then((result) => {
      Task.find().then((result) => {
        res.send({ data: result });
      });
    });
  });
};

module.exports.deleteTask = (req, res) => {
  console.log(req.query);
  if (req.query.id) {
    Task.deleteOne({ _id: req.query.id }).then((result) => {
      Task.find().then((result) => {
        res.send({ data: result });
      });
  });
  } else {
    console.log('_id is not defined');
  }

}

module.exports.deleteAll = (req, res) =>{
  Task.deleteMany({}).then(() => {
    res.send({});
  })
}
