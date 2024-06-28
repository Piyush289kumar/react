const init = async (req, res) => {
  const data = [
    {
      id: 10,
      task: "Task Ten",
      isCompleted: false,
      isActive: true,
    },
    {
      id: 2,
      task: "Task Two",
      isCompleted: true,
      isActive: true,
    },
    {
      id: 3,
      task: "Task Three",
      isCompleted: false,
      isActive: true,
    },
  ];

  return res.json(data);
};

// Create Todo

const createTodo = async (req, res) => {
  const { task } = req.body;
  res.json({
    task,
  });
};

export { init, createTodo };
