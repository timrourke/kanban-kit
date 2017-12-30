/**
 * Regular expression to match a '/projects' or '/projects/:projectId' path
 *
 * @property PROJECTS_PATH_REGEX
 * @type {RegExp}
 * @final
 */
export const PROJECTS_PATH_REGEX = /^\/projects\/?([a-f0-9-]+)?\/?$/;

/**
 * Regular expression to match a '/projects/:projectId/boards' or
 * '/projects/:projectId/boards/:boardId' path
 *
 * @property BOARDS_PATH_REGEX
 * @type {RegExp}
 * @final
 */
export const BOARDS_PATH_REGEX = /^\/projects\/?([a-f0-9-]+)(\/boards\/?)?([a-f0-9-]+)?\/?$/;
