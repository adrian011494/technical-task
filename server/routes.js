const express = require('express');
const router = express.Router();
const { getUserInformation, getUserRepo } = require('./controllers');

/**
 * Route to fetch user information from GitHub.
 *
 * @route GET /users/:username
 * @param {string} username.path.required - The GitHub username.
 * @returns {Object} 200 - The user information.
 * @returns {Object} 404 - Not Found.
 * @returns {Object} 429 - Rate limit exceeded.
 * @returns {Object} 500 - An error occurred.
 */
router.get('/users/:username', getUserInformation);

/**
 * Route to fetch a user's repository from GitHub.
 *
 * @route GET /users/:username/repo
 * @param {string} username.path.required - The GitHub username.
 * @returns {Object} 200 - The repository information.
 * @returns {Object} 404 - Not Found.
 * @returns {Object} 429 - Rate limit exceeded.
 * @returns {Object} 500 - An error occurred.
 */
router.get('/users/:username/repo', getUserRepo);

module.exports = router;
