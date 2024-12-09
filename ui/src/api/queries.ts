import { gql } from '@apollo/client';

export const GET_QUESTIONS = gql`
  query GetQuestions {
    questions {
      id
      original
      correctAnswer
      classroomId
    }
  }
`;

export const GET_CLASSROOMS = gql`
  query GetClassrooms {
    classrooms {
      id
      name
    }
  }
`;

export const GET_ANSWERS = gql`
  query GetAnswers {
    answers {
      id
      questionId
      value
      isCorrect
      date
    }
  }
`;

export const ADD_ANSWER = gql`
  mutation AddAnswer($questionId: ID!, $value: String!) {
    addAnswer(questionId: $questionId, value: $value) {
      success
    }
  }
`;

export const ADD_QUESTION = gql`
  mutation AddQuestion($original: String!, $classroomId: String!) {
    addQuestion(original: $original, classroomId: $classroomId) {
      id
      original
      correctAnswer
    }
  }
`;

export const UPDATE_QUESTION = gql`
  mutation UpdateQuestion($id: String!, $value: String!) {
    updateQuestion(id: $id, value: $value) {
      id
      original
      correctAnswer
    }
  }
`;

export const ADD_CLASSROOM = gql`
mutation AddClassroom($name: String!) {
  addClassroom(name: $name) {
      id
      name
      lastUpdated
  }
}
`;