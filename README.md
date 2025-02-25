# GitHub Fork Viewer

This web page displays users who have forked the React repository and allows authenticated users to follow them.

## Demo

Hosted on GitHub Pages: https://giripranay.github.io/TLGC_PROJECT/

## Technologies Used

*   AngularJS
*   HTML
*   CSS
*   JavaScript

## Features

1.  **Fork List:** Displays all users who have forked the React repository.
2.  **Follow Functionality:**  Provides a "Follow" button for each user. Clicking the button allows you to follow that user (requires authentication).

## Description

This web page, hosted on GitHub Pages, serves two primary functions: displaying users who have forked the React repository and enabling users to follow them. The follow functionality requires authentication via a GitHub Personal Access Token.

## Authentication (Following Users)

To use the "Follow" feature, you need to generate a Personal Access Token (PAT) on GitHub and configure the application.

### Generating a Personal Access Token

1.  Go to your GitHub account settings: *Settings* → *Developer settings* → *Personal access tokens*.
2.  Click on "Generate new token".
3.  Give a descriptive name to your token (e.g., "Fork Viewer").
4.  Select the necessary scopes for the token.  **Crucially, you must select the "user" scope.**
5.  Click "Generate token".  **Important:** Copy the generated token immediately, as you won't be able to see it again.

### Configuring the Application

1.  Locate the `apiConfig` file (the location of this file in the repo should be specified in the README).
2.  Paste your generated Personal Access Token into the appropriate field within the `apiConfig` file.  (Provide an example of how the token should be added to the `apiConfig` file).

## Setup (Local Development)

1.  **Install NPM:** If you don't have it already, install Node.js and npm (Node Package Manager).
2.  **Install `http-server`:** This is a simple server for local development.

    ```bash
    npm install --global http-server
    ```

3.  **Clone the Repository:**

    ```bash
    git clone [https://github.com/giripranay/TLGC_PROJECT.git](https://github.com/giripranay/TLGC_PROJECT.git)
    ```

4.  **Start the Local Server:**

    1.  Navigate to the directory containing the `index.html` file.
    2.  Run the following command:

        ```bash
        http-server -p 8080
        ```

    3.  Open the following URL in your browser:

        ```
        127.0.01:8080
        ```

## Additional Notes

*   Provide clear instructions on the structure of the `apiConfig` file and where to place the token.  A code example would be very helpful.
*   Mention any specific AngularJS dependencies or versions required.
*   If there are any additional setup steps, please include them here.
