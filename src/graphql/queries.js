/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getTask = /* GraphQL */ `
  query GetTask($id: ID!) {
    getTask(id: $id) {
      id
      title
      description
      status
      createdAt
      updatedAt
    }
  }
`;
export const listTasks = /* GraphQL */ `
  query ListTasks(
    $filter: ModelTaskFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTasks(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        description
        status
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getPrivateMessage = /* GraphQL */ `
  query GetPrivateMessage($id: ID!) {
    getPrivateMessage(id: $id) {
      id
      plugin
      content
      createdAt
      updatedAt
      owner
    }
  }
`;
export const listPrivateMessages = /* GraphQL */ `
  query ListPrivateMessages(
    $filter: ModelPrivateMessageFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPrivateMessages(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        plugin
        content
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
