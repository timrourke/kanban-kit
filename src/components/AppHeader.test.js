import React from 'react';
import AppHeader from './AppHeader';

describe('components/AppHeader', () => {
  [
    ['', null],
    ['/projects', ['/projects', undefined]],
    ['/projects/', ['/projects/', undefined]],
    ['/projects/a1-b2-c3', ['/projects/a1-b2-c3', 'a1-b2-c3']],
    ['/projects/a1-b2-c3/', ['/projects/a1-b2-c3/', 'a1-b2-c3']],
  ].forEach(([pathname, expected]) => {
    it('should parse a pathname for projects', () => {

      if (Array.isArray(expected)) {
        expect(AppHeader.pathMatchesProjects(pathname))
          .toEqual(expect.arrayContaining(expected));
      } else {
        expect(AppHeader.pathMatchesProjects(pathname))
          .toBe(expected);
      }
    });
  });

  [
    ['', null],
    ['/projects', null],
    ['/projects/a1-b2-c3/boards', ['/projects/a1-b2-c3/boards', 'a1-b2-c3', '/boards', undefined]],
    ['/projects/a1-b2-c3/boards/', ['/projects/a1-b2-c3/boards/', 'a1-b2-c3', '/boards/', undefined]],
    ['/projects/a1-b2-c3/boards/d4-e5-f6', ['/projects/a1-b2-c3/boards/d4-e5-f6', 'a1-b2-c3', '/boards/', 'd4-e5-f6']],
    ['/projects/a1-b2-c3/boards/d4-e5-f6/', ['/projects/a1-b2-c3/boards/d4-e5-f6/', 'a1-b2-c3', '/boards/', 'd4-e5-f6']],
  ].forEach(([pathname, expected]) => {
    it('should parse a pathname for boards', () => {

      if (Array.isArray(expected)) {
        expect(AppHeader.pathMatchesBoards(pathname))
          .toEqual(expect.arrayContaining(expected));
      } else {
        expect(AppHeader.pathMatchesBoards(pathname))
          .toBe(expected);
      }
    });
  });

  [
    ['', false],
    ['/projects/a1-b2-c3', false],
    ['/projects/create', true]
  ].forEach(([pathname, expected]) => {
    it('should parse a pathname for creating projects', () => {
      expect(AppHeader.pathMatchesProjectsCreate(pathname)).toBe(expected);
    });
  });

  [
    ['', null],
    ['/projects/a1-b2-c3/boards/d1-e2-f3', null],
    ['/projects/a1-b2-c3/boards/create', ['/projects/a1-b2-c3/boards/create', 'a1-b2-c3']]
  ].forEach(([pathname, expected]) => {
    if (Array.isArray(expected)) {
      expect(AppHeader.pathMatchesBoardsCreate(pathname))
        .toEqual(expect.arrayContaining(expected));
    } else {
      it('should parse a pathname for creating boards', () => {
        expect(AppHeader.pathMatchesBoardsCreate(pathname)).toBe(expected);
      });
    }
  });
});
