# Technical Task

The Technical Task is a simple GitHub user information application. It allows users to retrieve information about GitHub users, including their basic profile information and repositories.

## Introduction

This application is a web-based tool that leverages the GitHub API to fetch and display user information. With this application, users can enter a GitHub username and retrieve various details about the user, such as their name, username, number of followers, and number of repositories.

The application consists of a server-side component and a client-side component. The server is responsible for handling API requests and interacting with the GitHub API, while the client provides the user interface for interacting with the application.

## Features

- Retrieve basic user information: Users can enter a GitHub username and fetch basic information such as name, username, followers count, and following count.
- Fetch user repository: Users can also retrieve information about a user's latest repository, including the repository name and privacy status.
- Navigation: The client-side application includes a top navigation bar that allows users to switch between different views, such as Home, Following, and Repositories.

## Technologies Used

The project is built using the following technologies:

- Node.js: Used for the server-side implementation.
- Express.js: A web application framework for Node.js, used to handle routing and API requests.
- Vue.js: A JavaScript framework for building user interfaces, used for the client-side application.
- Axios: A promise-based HTTP client library used to make API requests.
- Docker: Used to containerize the application for easy deployment and scalability.

## Installation and Setup

To run the GitHub User Information application locally, follow these steps:

1. Clone the repository: `git clone https://github.com/adrian011494/technical-task`
2. Install dependencies:
    ```sh
    npm install
    ```
3. Start the app:
- With your local enviroment `npm start`
- With docker:
    ```shell
    docker build -t github-user-info .
    ```
    ```shell
    docker run -p 8000:8000 -p 8080:8080 github-user-info
    ```
4. Access the application: Open your web browser and go to `http://localhost:8000`.

Note: Make sure you have Node.js and npm (Node Package Manager) installed on your system.

## Usage

Once the application is up and running, you can use it to retrieve GitHub user information:

1. Enter a GitHub username in the provided input field.
2. Click the "Search" button to fetch the user's information.
3. The user's basic information, including their name, username, followers count, and following count, will be displayed.
4. You can also navigate to the "Repos" view to fetch information about the user's latest repository.

Feel free to explore different functionalities of the application and experiment with different GitHub usernames to retrieve their information.

## Project Structure

### Folders: 
- `client` Client side code with Vue.
- `server` Server side code with Express 

### Test

```sh
npm test
```
