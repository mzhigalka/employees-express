const { prisma } = require("../prisma/prisma-client");

/**
 *
 * @route GET /api/employees
 * @desc Get all employees
 * @access Private
 */
const getAllEmployees = async (req, res) => {
  try {
    const employees = await prisma.employee.findMany();

    res.status(200).json(employees);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to get employees" });
  }
};

/**
 *
 * @route POST /api/employees/add
 * @desc Added new employee
 * @access Private
 */
const addEmployee = async (req, res) => {
  try {
    const data = req.body;

    if (!data.firstName || !data.lastName || !data.address || !data.age)
      return res.status(400).json({ message: "Please fill required fields" });

    const employee = await prisma.employee.create({
      data: {
        ...data,
        userId: req.user.id,
      },
    });

    return res.status(201).json(employee);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to add employee" });
  }
};

module.exports = {
  getAllEmployees,
  addEmployee,
};
