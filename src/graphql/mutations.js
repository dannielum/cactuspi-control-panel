/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createTask = /* GraphQL */ `
  mutation CreateTask(
    $input: CreateTaskInput!
    $condition: ModelTaskConditionInput
  ) {
    createTask(input: $input, condition: $condition) {
      id
      title
      description
      status
      createdAt
      updatedAt
    }
  }
`;
export const updateTask = /* GraphQL */ `
  mutation UpdateTask(
    $input: UpdateTaskInput!
    $condition: ModelTaskConditionInput
  ) {
    updateTask(input: $input, condition: $condition) {
      id
      title
      description
      status
      createdAt
      updatedAt
    }
  }
`;
export const deleteTask = /* GraphQL */ `
  mutation DeleteTask(
    $input: DeleteTaskInput!
    $condition: ModelTaskConditionInput
  ) {
    deleteTask(input: $input, condition: $condition) {
      id
      title
      description
      status
      createdAt
      updatedAt
    }
  }
`;
export const createPrivateMessage = /* GraphQL */ `
  mutation CreatePrivateMessage(
    $input: CreatePrivateMessageInput!
    $condition: ModelPrivateMessageConditionInput
  ) {
    createPrivateMessage(input: $input, condition: $condition) {
      id
      plugin
      content
      createdAt
      updatedAt
      owner
    }
  }
`;
export const updatePrivateMessage = /* GraphQL */ `
  mutation UpdatePrivateMessage(
    $input: UpdatePrivateMessageInput!
    $condition: ModelPrivateMessageConditionInput
  ) {
    updatePrivateMessage(input: $input, condition: $condition) {
      id
      plugin
      content
      createdAt
      updatedAt
      owner
    }
  }
`;
export const deletePrivateMessage = /* GraphQL */ `
  mutation DeletePrivateMessage(
    $input: DeletePrivateMessageInput!
    $condition: ModelPrivateMessageConditionInput
  ) {
    deletePrivateMessage(input: $input, condition: $condition) {
      id
      plugin
      content
      createdAt
      updatedAt
      owner
    }
  }
`;
