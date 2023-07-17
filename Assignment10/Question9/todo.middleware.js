const todoMiddleware = (req, res, next) => {
  const { task } = req.body;
  if (!task) {
    res.status(400).json({
      success: false,
      messsage: "Task is requied",
    });
  } else {
    next();
  }
};

module.exports = { todoMiddleware };
