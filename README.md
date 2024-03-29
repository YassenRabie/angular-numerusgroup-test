# Numerus Group Angular Task

Within this repository, you'll find a full-stack application crafted with Angular and Node.js, with focus on the client-side.

To simplify the client's structure, I chose a simple folder organization aligned with the application's needs, Therefore I decided to choose a [Pages, Components, Services] separation rather than adopting a feature-based approach, and this decision has demonstrated its effectiveness in the application.

## Live Demonstration

Experience a live demonstration of the application by following this link: [Demo](https://angular-numerusgroup-test.vercel.app/login "Demo")

Use one of the provided user accounts in the assignment to log in, or simply use "admin" as both the username and password.

**Please Note:** The API connected to the client side is hosted on a free server using Render, so the initial request might be slow due to the server startup.

## Local Installation Guide

###### Follow these steps to run the project locally:

After cloning the project, begin by running the server. Execute the following steps:
1. Navigate to the server folder using `cd server`
2. Install the required packages with `npm i`
3. Launch the server with `npm run start` (Note: If you prefer to start the server in dev mode, you must first install `nodemon` globally and then use the command `npm run dev`)

Once the server is running, proceed to the client folder to initiate the client app:
1. Navigate to the client folder using `cd client`
2. Install the required packages with `npm i`
3. Launch the application with the command `ng serve --open`

Note: The API URL and Recaptcha key are provided with the repository for simplified installation.
