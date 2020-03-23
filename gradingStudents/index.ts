function gradingStudents(grades: number[]): number[] {
  let newGrades = [];
  grades.forEach(i => {
    if (i < 38 || Math.ceil(i / 5) * 5 - i >= 3 || i === 0) {
      newGrades.push(i);
    } else if (Math.ceil(i / 5) * 5 - i < 3) {
      newGrades.push(Math.ceil(i / 5) * 5);
    }
  });
  return newGrades;
}

console.log(
  gradingStudents([
    23,
    80,
    96,
    18,
    73,
    78,
    60,
    60,
    15,
    45,
    15,
    10,
    5,
    46,
    87,
    33,
    60,
    14,
    71,
    65,
    2,
    5,
    97,
    0
  ])
);
