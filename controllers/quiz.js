const db = require("../models");
const Quiz = db.quizzes;

// CREATE to add data in the quiz table
exports.create = async (req, res) => {
  try {
    const data = await Quiz.create(req.body);
    res.json({
      message: "quiz created succesfully",
      data: data,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
      data: null,
    });
  }
};

// GET ALL: displays or retrieves all quiz data according to the model from the database
exports.getAll = async (req, res) => {
  try {
    const quizzes = await Quiz.findAll();
    res.json({
      message: "quizzed retrivied succesfully",
      data: quizzes,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
      data: null,
    });
  }
};

// Update change the data according to the ID sent
exports.update = async (req, res) => {
  const id = req.params.id;
  try {
    const quiz = await Quiz.findByPk(id, { rejectOnEmpty: true });
    quiz.update(req.body, {
      where: { id },
    });
    res.json({
      message: "Quizzes updated succesfully",
      data: quiz,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message | "Some error occured while retrieving quiz",
      data: null,
    });
  }
};

// Delete the data according to the ID sent
exports.delete = async (req, res) => {
  const id = req.params.id;
  try {
    const quiz = await Quiz.findByPk(id, { rejectOnEmpty: true });

    quiz.destroy();

    res.json({
      message: "Quizzes deleted succesfully",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message | "Some error occured while retrieving quiz",
      data: null,
    });
  }
};

//  Retrieve data according to the ID sent
exports.findOne = async (req, res) => {
  const id = req.params.id;
  try {
    const quiz = await Quiz.findByPk(id, { rejectOnEmpty: true });
    res.json({
      message: `Quizzes retrieved succesfully with id = ${id}`,
      data: quiz,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message | "Some error occured while retrieving quiz",
      data: null,
    });
  }
};

//
exports.getByCategoryId = async (req, res) => {
  const id = req.params.id;
  try {
    const quizzes = await Quiz.findAll({
      where: {
        categoryId: id,
      },
    });
    res.json({
      message: `Quizzes retrieved succesfully with categoryId = ${id}`,
      data: quizzes,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
      data: null,
    });
  }
};

//
exports.getByLevelId = async (req, res) => {
  const id = req.params.id;
  try {
    const quizzes = await Quiz.findAll({
      where: {
        levelId: id,
      },
    });
    res.json({
      message: `Quizzes retrieved succesfully with levelId = ${id}`,
      data: quizzes,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
      data: null,
    });
  }
};
