const dropdownPrefix = [
  { key: 0, text: "Title ", value: "" },
  { key: 1, text: "Dr.", value: "Dr. " },
  { key: 2, text: "Mr.", value: "Mr. " },
  { key: 3, text: "Mrs.", value: "Mrs. " },
  { key: 4, text: "Miss.", value: "Miss. " },
];
const dropdownAboutus = [
  { key: 0, text: "Select ", value: "" },
  { key: 1, text: "Whatsapp", value: "Whatsapp" },
  { key: 2, text: "Facebook", value: "Facebook" },
  { key: 3, text: "Website", value: "Website" },
  { key: 4, text: "Word of Mouth", value: "Word of Mouth" },
];
const dropdownHClass = [
  { key: 0, text: "Select the highest class", value: "" },
  { key: 1, text: "Class 11 to 12", value: "Class 11 to 12" },
  { key: 2, text: "Class 8 to 10", value: "Class 8 to 10" },
  { key: 3, text: "Class 5 to 7", value: "Class 5 to 7" },
  { key: 4, text: "Class 1 to 4", value: "Class 1 to 4" },
];
const dropdownClass = [
  { key: 0, text: "Select the class", value: "" },
  { key: 1, text: "Class 8", value: "8" },
  { key: 2, text: "Class 9", value: "9" },
  { key: 3, text: "Class 10", value: "10" },
  { key: 4, text: "Class 11", value: "11" },
  { key: 5, text: "Class 12", value: "12" },
];

const checkboxSubjects = {
  "": [],
  "Class 11 to 12": [
    { key: 1, text: "Physics", value: "Physics" },
    { key: 2, text: "Chemistry", value: "Chemistry" },
    { key: 3, text: "Mathematics", value: "Mathematics" },
    { key: 4, text: "Biology", value: "Biology" },
    { key: 5, text: "Commerce", value: "Commerce" },
    { key: 6, text: "Other Subjects", value: "OtherSubject" },
  ],
  "Class 8 to 10": [
    { key: 1, text: "Mathematics", value: "Mathematics" },
    { key: 2, text: "Science", value: "Science" },
    { key: 3, text: "Language", value: "Language" },
  ],
  "Class 5 to 7": [
    { key: 1, text: "Mathematics", value: "Mathematics" },
    { key: 2, text: "Science", value: "Science" },
    { key: 3, text: "Language", value: "Language" },
  ],
  "Class 1 to 4": [
    { key: 1, text: "Mathematics", value: "Mathematics" },
    { key: 2, text: "Science", value: "Science" },
    { key: 3, text: "Language", value: "Language" },
  ],
};

const studentFacility = [
  { key: 1, text: "Free demo lecture", value: "Free demo lecture" },
  { key: 2, text: "Dobut clearing session", value: "Dobut clearing session" },
  {
    key: 3,
    text: "Personalized learning for competative examinations",
    value: "Personalized learning for competative examinations",
  },
];

const checkboxExams = {
  "": [],
  8: [
    { key: 1, text: "Foundation ", value: "Foundation" },
    { key: 2, text: "Olympiad", value: "Olympiad" },
    { key: 3, text: "Other Examinations", value: "OtherExams" }
  ],
  9: [
    { key: 1, text: "Foundation ", value: "Foundation" },
    { key: 2, text: "Olympiad", value: "Olympiad" },
    { key: 3, text: "Other Examinations", value: "OtherExams" }
  ],
  10: [
    { key: 1, text: "Foundation ", value: "Foundation" },
    { key: 2, text: "Olympiad", value: "Olympiad" },
    { key: 3, text: "Other Examinations", value: "OtherExams" }
  ],
  11: [
    { key: 1, text: "IIT-JEE", value: "IIT-JEE" },
    { key: 2, text: "NEET", value: "NEET" },
    { key: 3, text: "Olympiad", value: "Olympiad" },
    { key: 4, text: "Other Examinations", value: "OtherExams" }
  ],
  12: [
    { key: 1, text: "IIT-JEE", value: "IIT-JEE" },
    { key: 2, text: "NEET", value: "NEET" },
    { key: 3, text: "Olympiad", value: "Olympiad" },
    { key: 4, text: "Other Examinations", value: "OtherExams" }
  ],
};

const checkboxExamsList = [
      { key: 1, text: "IIT-JEE", value: "IIT-JEE" },
      { key: 2, text: "NEET", value: "NEET" },
      { key: 3, text: "Foundation ", value: "Foundation" },
      { key: 4, text: "Olympiad", value: "Olympiad" },
      { key: 5, text: "Other Examinations", value: "OtherExams" }
];
const studsubjectList = {
  "": [],
  8: [
    { key: 1, text: "Mathematics", value: "Mathematics" },
    { key: 2, text: "Science", value: "Science" },
    { key: 3, text: "Language", value: "Language" },
  ],
  9: [
    { key: 1, text: "Mathematics", value: "Mathematics" },
    { key: 2, text: "Science", value: "Science" },
    { key: 3, text: "Language", value: "Language" },
  ],
  10: [
    { key: 1, text: "Mathematics", value: "Mathematics" },
    { key: 2, text: "Science", value: "Science" },
    { key: 3, text: "Language", value: "Language" },
  ],
  11: [
    { key: 1, text: "Physics", value: "Physics" },
    { key: 2, text: "Chemistry", value: "Chemistry" },
    { key: 3, text: "Mathematics", value: "Mathematics" },
    { key: 4, text: "Biology", value: "Biology" },
  ],
  12: [
    { key: 1, text: "Physics", value: "Physics" },
    { key: 2, text: "Chemistry", value: "Chemistry" },
    { key: 3, text: "Mathematics", value: "Mathematics" },
    { key: 4, text: "Biology", value: "Biology" },
  ],
};
const radioYN1 = [
  { key: 1, text: "Yes", value: "LaptopYes" },
  { key: 2, text: "No", value: "LaptopNo" },
];
const radioYN2 = [
  { key: 1, text: "Yes", value: "BroadbandYes" },
  { key: 2, text: "No", value: "BroadbandNo" },
];

export {
  dropdownPrefix,
  dropdownAboutus,
  dropdownHClass,
  dropdownClass,
  studentFacility,
  studsubjectList,
  checkboxSubjects,
  checkboxExams,
  radioYN1,
  radioYN2,
  checkboxExamsList,
};
