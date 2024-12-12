export interface Subject {
  name: string;
  credits: number;
  grade?: string;
}

export interface GradeValue {
  label: string;
  value: number;
}

export const GRADES: GradeValue[] = [
  { label: 'A', value: 10 },
  { label: 'A-', value: 9 },
  { label: 'B', value: 8 },
  { label: 'B-', value: 7 },
  { label: 'C', value: 6 },
  { label: 'C-', value: 5 },
  { label: 'D', value: 4 },
  { label: 'E', value: 3 },
];

export const subjectsCredits = {
  "Biology Laboratory (BIO F110)": 1,
  "General Biology (BIO F111)": 3,
  "Thermodynamics (BITS F111)": 3,
  "Technical Report Writing (BITS F112)": 2,
  "Chemistry Laboratory (CHEM F110)": 1,
  "Computer Programming (CS F111)": 4,
  "Mathematics I (MATH F111)": 3,
  "Workshop Practice (ME F112)": 2,
  "Physics Laboratory (PHY F110)": 1,
  "Engineering Graphics (BITS F110)": 2,
  "General Chemistry (CHEM F111)": 3,
  "Electrical Sciences (EEE F111)": 3,
  "Mathematics II (MATH F112)": 3,
  "Probability & Statistics (MATH F113)": 3,
  "Mech Oscillations & Wave (PHY F111)": 3,
  "Environmental Studies (BITS F225)": 3,
  "Data Structures & Algorithms (CS F211)": 4,
  "Database Systems (CS F212)": 4,
  "Microprocessors & Interfacing (CS F241)": 4,
  "Object Oriented Programming (CS F213)": 4,
  "Logic in Computer Science (CS F214)": 3,
  "Digital Design (CS F215)": 4,
  "Discrete Structures for Computer Science (CS F222)": 3,
  "Mathematics III (MATH F211)": 3
};