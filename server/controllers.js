const axios = require('axios');

// Controller function to fetch user information from GitHub
const getUserInformation = async (req, res) => {
  try {
    const { username } = req.params;

    // Fetch user information from GitHub API
    const userResponse = await axios.get(`https://api.github.com/users/${username}`);
    const user = userResponse.data;

    // Fetch one repository for the user
    const reposResponse = await axios.get(`https://api.github.com/users/${username}/repos?per_page=1`);
    const repository = reposResponse.data[0];

    // Construct the response object
    const response = {
      name: user.name,
      followers: user.followers,
      repository: {
        full_name: repository.full_name,
        private: repository.private,
      },
    };

    res.json(response);
  } catch (error) {
    console.error('Error:', error.message);
    res.status(500).json({ error: 'An error occurred' });
  }
};

module.exports = {
  getUserInformation,
};