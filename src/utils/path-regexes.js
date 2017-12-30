/**
 * Regular expression to match a '/projects' or '/projects/:projectId' path
 *
 * @property PROJECTS_PATH_REGEX
 * @type {RegExp}
 * @final
 */
export const PROJECTS_PATH_REGEX = /^\/projects\/?([a-f0-9-]+)?\/?$/;

/**
 * Regular expression to match the path '/projects/create'
 *
 * @property PROJECTS_CREATE_PATH_REGEX
 * @type {RegExp}
 * @final
 */
export const PROJECTS_CREATE_PATH_REGEX = /^\/projects\/create\/?$/;

/**
 * Regular expression to match a '/projects/:projectId/boards' or
 * '/projects/:projectId/boards/:boardId' path
 *
 * @property BOARDS_PATH_REGEX
 * @type {RegExp}
 * @final
 */
export const BOARDS_PATH_REGEX = /^\/projects\/?([a-f0-9-]+)(\/boards\/?)?([a-f0-9-]+)?\/?$/;

/**
 * Regular expression to match a '/projects/:boardId/boards/create' path
 *
 * @property BOARDS_CREATE_PATH_REGEX
 * @type {RegExp}
 * @final
 */
export const BOARDS_CREATE_PATH_REGEX = /^\/projects\/([a-f0-9-]+)\/boards\/create\/?$/;
