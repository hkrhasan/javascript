let company = {
  // the same object, compressed for brevity
  sales: [
    {
      name: "John",
      salary: 1000,
    },
    {
      name: "Alice",
      salary: 1600,
    },
  ],
  development: {
    sites: [
      {
        name: "Peter",
        salary: 2000,
      },
      {
        name: "Alex",
        salary: 1800,
      },
    ],
    internals: [
      {
        name: "Jack",
        salary: 1300,
      },
    ],
  },
  hr: [
    {
      name: "Kapil",
      salary: 1000,
    },
    {
      name: "Nitin",
      salary: 1600,
    },
  ],
  purchase: [
    {
      name: "Rehnuma",
      salary: 1000,
    },
    {
      name: "Sneha",
      salary: 1600,
    },
    {
      name: "Yusra",
      salary: 1600,
    },
  ],
  admin: [
    {
      name: "Amit",
      salary: 1000,
    },
    {
      name: "Nitin",
      salary: 1600,
    },
    {
      name: "Abhay",
      salary: 1600,
    },
  ],
};

const getTotalSalaryAndEmployeeList = (company) => {
  let condition = Array.isArray(company); // false
  let totalSalary = 0; // 0
  let employeeList = []; // []

  // skip,
  if (condition) {
    for (let emp of company) {
      totalSalary += emp.salary;
      employeeList.push(emp.name);
    }

    return { totalSalary, employeeList };
  }

  const keys = Object.keys(company);
  console.log(keys);

  for (let sub of keys) {
    const data = getTotalSalaryAndEmployeeList(company[sub]); //

    totalSalary += data.totalSalary;
    employeeList = [...employeeList, ...data.employeeList];
  }

  return { totalSalary, employeeList };
};

// const { totalSalary, employeeList } = getTotalSalaryAndEmployeeList(company);

// console.log(totalSalary);
// console.log(employeeList);

const createMatrix = (row, col, inDiag = "*") => {
  let matrix = [];

  for (let i = 1; i <= row; i++) {
    let matrixRow = [];
    for (let j = 1; j <= col; j++) {
      if (i === j || col - j == i - 1) {
        matrixRow.push(inDiag);
      } else {
        matrixRow.push((i - 1) * col + j);
      }
    }

    matrix.push(matrixRow);
  }

  return matrix;
};

console.log(createMatrix(10, 10));
