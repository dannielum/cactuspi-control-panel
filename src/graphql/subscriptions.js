/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateTask = /* GraphQL */ `
  subscription OnCreateTask {
    onCreateTask {
      id
      title
      description
      status
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateTask = /* GraphQL */ `
  subscription OnUpdateTask {
    onUpdateTask {
      id
      title
      description
      status
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteTask = /* GraphQL */ `
  subscription OnDeleteTask {
    onDeleteTask {
      id
      title
      description
      status
      createdAt
      updatedAt
    }
  }
`;
export const onCreatePrivateMessage = /* GraphQL */ `
  subscription OnCreatePrivateMessage($owner: String!) {
    onCreatePrivateMessage(owner: $owner) {
      id
      plugin
      content
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onUpdatePrivateMessage = /* GraphQL */ `
  subscription OnUpdatePrivateMessage($owner: String!) {
    onUpdatePrivateMessage(owner: $owner) {
      id
      plugin
      content
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onDeletePrivateMessage = /* GraphQL */ `
  subscription OnDeletePrivateMessage($owner: String!) {
    onDeletePrivateMessage(owner: $owner) {
      id
      plugin
      content
      createdAt
      updatedAt
      owner
    }
  }
`;
