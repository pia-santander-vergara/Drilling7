const { Router } = require("express");
const {
  createUser,
  findUserById,
  findAll,
  updateUserById,
  deleteUserById,
} = require("../controllers/user.controller.js");
const {
  createBootcamp,
  findById,
  findAllB,
  addUserB,
} = require("../controllers/bootcamp.controller.js");

const router = Router();

router.post("/usuarios", createUser);
router.get("/usuarios/:id", findUserById);
router.get("/usuarios/", findAll);
router.put("/usuarios/:id", updateUserById);
router.delete("/usuarios/:id", deleteUserById);

router.post("/bootcamps", createBootcamp);
router.post("/bootcamps/adduser", addUserB);
router.get("/bootcamps/:id", findById);
router.get("/bootcamp/", findAllB);

module.exports = router;
