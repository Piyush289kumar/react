import Form from "../model/FormModels.js";
const init = async (req, res) => {
  res.json("Server API init");
};
const formController = async (req, res) => {
  res.json("Server API formController");

  const { firstName, lastName } = req.body;
  if (!firstName || !lastName) {
    res.status(400).json({ error: "Please fill in all fields" });
  }

  res.status(200).json({ firstName, lastName });

//   await Form.create({ firstName, lastName });

//   res.status(200).json({ error: "Form Filled" });
};
export { init, formController };
