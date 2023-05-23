const axios = require('axios');

/**
 * Fetches user information from GitHub.
 *
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @returns {Object} The user information.
 * @throws {Error} If an error occurs during the API request.
 */
const getUserInformation = async (req, res) => {
  try {
    const { username } = req.params;

    // Fetch user information from GitHub API
    const userResponse = await axios.get(`https://api.github.com/users/${username}`);
    const user = userResponse.data;

    // Construct the response object
    const response = {
      name: user.name,
      username: user.login,
      followers: user.followers,
      following: user.following,
    };

    res.json(response);
  } catch (error) {
    console.error('Error:', error.message);
    if (error.response && error.response.status === 404) {
      res.status(404).json({ message: 'Not Found' });
    } else if (error.response && error.response.status === 403) {
      const resetTime = new Date(parseInt(error.response.headers['x-ratelimit-reset']) * 1000);
      res.status(429).json({ error: 'Rate limit exceeded', resetTime });
    } else {
      res.status(500).json({ error: 'An error occurred' });
    }
  }
};


/**
 * Fetches a user's repository from GitHub.
 *
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @returns {Object} The repository information.
 * @throws {Error} If an error occurs during the API request.
 */
const getUserRepo = async (req, res) => {
  try {
    const { username } = req.params;

    // Fetch one repository for the user
    const reposResponse = await axios.get(`https://api.github.com/users/${username}/repos?per_page=1`);
    const repository = reposResponse.data[0];

    // Construct the response object
    const response = {
        username: repository.owner.login,
        repository_name: repository.full_name,
        private: repository.private,
    };

    res.json(response);
  } catch (error) {
    if (error.response && error.response.status === 404) {
      res.status(404).json({ message: 'Not Found' });
    } else if (error.response && error.response.status === 403) {
      const resetTime = new Date(parseInt(error.response.headers['x-ratelimit-reset']) * 1000);
      res.status(429).json({ error: 'Rate limit exceeded', resetTime });
    } else {
      res.status(500).json({ error: 'An error occurred' });
    }
  }
};

module.exports = {
  getUserInformation,
  getUserRepo
};