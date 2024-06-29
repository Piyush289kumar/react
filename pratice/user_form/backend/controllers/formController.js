import Form from "../model/FormModels.js";
const init = async (req, res) => {
  res.json("Server API init");
};

const formController = async (req, res) => {
  // Log the initial response for debugging purposes
  console.log("Server API formController");

  const { firstName, lastName } = req.body;

  // Check for missing fields and return early if any are missing
  if (!firstName || !lastName) {
    return res.status(400).json({ error: "Please fill in all fields" });
  }

  await Form.create({ firstName, lastName });
  res.status(200).json({ success: "Form Data Inserted..." });
};

export { init, formController };
