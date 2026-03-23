const students = [
  {
    id: 1,
    name: "Rahul",
    subjects: [
      {
        name: "Math",
        exams: [
          { type: "mid", score: 40 },
          { type: "final", score: 45 }
        ]
      },
      {
        name: "English",
        exams: [
          { type: "mid", score: 30 },
          { type: "final", score: 40 }
        ]
      }
    ]
  },
  {
    id: 2,
    name: "Amit",
    subjects: [
      {
        name: "Math",
        exams: [
          { type: "mid", score: 20 },
          { type: "final", score: 30 }
        ]
      },
      {
        name: "English",
        exams: [
          { type: "mid", score: 45 },
          { type: "final", score: 50 }
        ]
      }
    ]
  }
];

for (let i = 0; i < students.length; i++) {
  console.log(students[i].id);
  console.log(students[i].name);
  for (let j = 0; j < students[i].subjects.length; j++){
  console.log(students[i].subjects[j].name);
    for (let k = 0; k < students[i].subjects[j].exams.length; k++) {
    console.log(students[i].subjects[j].exams[k].type);
    console.log(students[i].subjects[j].exams[k].score);

    }
  }


}
