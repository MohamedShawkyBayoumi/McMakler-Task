This project was bootstrapped with React, React Hooks, React-router-dom, axios, NodeJS

## Installing Dependencies

In the project root directory

### `yarn install`

In the project client directory

### `yarn install`

## Available Scripts To Run The Projects

In the project root directory, if you want to run both projects server and client at the same time, you can run (Recommended to make integration with Backend server works):

### `npm run dev`

In the project root directory, if you want to run just the server, you can run:

### `npm run server`

In the project root directory, if you want to run just the client, you can run:

### `npm run client`


## The Frontend

* The page shows loading while fetching the data from the api.<br />

* The page shows an error message if the request failed to load applicants.<br />

* Users can search for an applicant by first name, last name, or email address and updates query params as follows `/page/?search=fred (and this will be a shareable url)`.<br />

* Applicant card shows `bid` if applicant has bid.<br />

* Colors on applicants cards are random, and letters are (first name + last name) initials.<br />

* `Bids` and `Status` filters are not working functional, but it's just implemented in the UI.<br />

* Applicant cards on mobile is scrollable horizontally and the UI fully responsive in different devices.<br />

## The Backend

### API Route

`http://localhost:5000`

### API Endpoints

**`GET`** `/appointments`
To see all avilable Appointments (Hard Coded not connecting with database)<br />

**`GET`** `/properties?search=${search}`
To see all avilable Properties (Hard Coded not connecting with database) and there is an optional search query to filter the result<br />


Thanks McMakler.