export type Question = {
  id: string;
  original: string;
  correctAnswer: string;
  classroomId: string;
}

export type Classroom = {
  id: string;
  name: string;
  lastUpdated: string;
}

export type Profile = {
  id: string;
  name: string;
  answers: [Answer!]!
}

export type ClassroomStatistics = {
  questions: Int!
  correctAnswers: Int!
  incorrectAnswers: Int!
}

export type Answer = {
  id: string;
  questionId: string;
  value: string;
  isCorrect: Boolean!
  date: string;
}

export type QuestionGroup = {
  id: string;
  name: string;
}

export type Query = {
  questions: [Question]
  answers: [Answer]
  classrooms: [Classroom]
}

export type Mutation = {
  addQuestion(original: string, classroomId: string): Question
  updateQuestion(id: string, value: String): Question
  addAnswer(questionId: string, value: string): MutationResponse
  addClassroom(name: string): Classroom
}

export type MutationResponse = {
  success: Boolean!
  data: Boolean
  error: String
}