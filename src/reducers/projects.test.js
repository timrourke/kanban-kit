import { createStore } from 'redux'

import {
  createProject,
  updateProject,
  deleteProject,
} from './../actions';

import projects from './projects';

it('should create a valid store', () => {
  const store = createStore(projects);

  expect(store.getState()).toMatchObject([]);
});

it('should create a project', () => {
  const store = createStore(projects);

  expect(store.getState()).toMatchObject([]);

  store.dispatch(createProject('A cool new project'));

  expect(store.getState()).toHaveLength(1);

  const newProject = store.getState()[0];
  
  expect(newProject.id).toBeDefined();
  expect(newProject.title).toBe('A cool new project');
  expect(newProject.createdAt).toBeInstanceOf(Date);
  expect(newProject.updatedAt).toBe(null);
  expect(newProject.deletedAt).toBe(null);
});

it('should update a project', () => {
  const store = createStore(
    projects,
    [{
      id: 'some-id',
      title: 'An existing project',
      createdAt: new Date(),
      updatedAt: null,
      deletedAt: null,
    }]
  );

  expect(store.getState()[0].id).toBe('some-id');

  store.dispatch(updateProject('some-id', 'A new title'));

  expect(store.getState()[0].title).toBe('A new title');
});

it('should delete a project', () => {
  const store = createStore(projects);

  expect(store.getState()).toMatchObject([]);

  store.dispatch(createProject('A cool new project'));

  const existingProjects = store.getState();

  expect(existingProjects).toHaveLength(1);

  store.dispatch(deleteProject(existingProjects[0].id));

  expect(store.getState()).toHaveLength(0);
});