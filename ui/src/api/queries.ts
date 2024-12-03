import { gql } from '@apollo/client';

export const GET_TRANSLATIONS = gql`
  query GetClassrooms {
    translations {
      id
      original
      translated
      classroomId
    }
  }
`;

export const GET_CLASSROOMS = gql`
  query GetClassrooms {
    translations {
      id
      name
    }
  }
`;

export const GET_ANSWERS = gql`
  query GetClassrooms {
    translations {
      id
      translationId
      value
      isCorrect
      date
    }
  }
`;

export const ADD_ANSWER = gql`
  mutation AddAnswer($translationId: ID!, $value: String!) {
    addAnswer(translationId: $translationId, value: $value) {
      success
    }
  }
`;

export const ADD_TRANSLATION = gql`
  mutation AddTranslation($original: String!, $classroomId: String!) {
    addTranslation(original: $original, classroomId: $classroomId) {
      id
      original
      translated
    }
  }
`;

export const UPDATE_TRANSLATION = gql`
  mutation UpdateTranslation($id: String!, $value: String!) {
    updateTranslation(id: $id, value: $value) {
      id
      original
      translated
    }
  }
`;

export const ADD_CLASSROOM = gql`
  mutation AddClassroom($name: String!) {
    addClassroom(name: $name) {
      id
      name
    }
  }
`;