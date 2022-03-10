const tasks = require("../task/index");

module.exports.getAllTasks = async (req, res) => {
  Task.find().then((result) => {
    res.send({ data: result });
  });
};

module.exports.createNewTask = (req, res) => {
  const task = new Task(req.body);
  task
    .save()
    .then((result) => {
      Task.find().then((result) => {
        res.send({ data: result });
      });
    })
    .catch((err) => res.status(500).send("404 tasks not created"));
};

module.exports.changeTaskInfo = (req, res) => {
  const body = req.body;
  const _id = body._id;
  Task.updateOne({ _id: _id }, body).then(() => {
    Task.find().then((result) => {
      res.send({ data: result });
    });
  });
};

module.exports.deleteTask = (req, res) => {
  if (req.query.id) {
    Task.deleteOne({ _id: req.query.id }).then(() => {
      Task.find().then((result) => {
        res.send({ data: result });
      });
    });
  } 
};

module.exports.deleteAll = (req, res) => {
  Task.deleteMany({}).then(() => {
    res.send({});
  });
};
