import React from 'react';
import AppHeader from './AppHeader';

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
