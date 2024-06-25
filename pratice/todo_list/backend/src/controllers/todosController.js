const init = async (req, res) => {
  const data = [
    {
      id: 1,
      task: "Task One",
      isCompleted: false,
      isActive: true,
    },
    {
      id: 2,
      task: "Task Two",
      isCompleted: false,
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

export default init;

































