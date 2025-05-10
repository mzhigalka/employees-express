const express = require("express");
const router = express.Router();
const { auth } = require("../middleware/auth");

const { getAllEmployees, addEmployee } = require("../controllers/employees");

// /api/employees
router.get("/", auth, getAllEmployees);

// /api/employees/:id
router.get("/:id", auth);

// /api/employees/add
router.post("/add", auth, addEmployee);

// /api/employees/remove/:id
router.post("/remove/:id", auth, (req, res) => {
  console.log("remove employee /:id");
});

// /api/employees/edit/:id
router.put("/edit/:id", auth, (req, res) => {
  console.log("edit employee /:id");
});

module.exports = router;
