# reddit-client

This repository contains a sample React/Redux application to display reddit posts.

## Getting started

To setup a development environment ensure you have git and node 10 installed.  Open a command line and navigate to where you want the code to be stored on your local system.  Clone this repo locally using this command:-
>`git clone git@github.com:richardhopton/reddit-client.git`

then navigate into the reddit-client folder and run this command (oh, and wait patiently)
>`npm install`

## Running

To run the application, from the cloned folder type:-
>`npm start`

and open a browser to [http://localhost:3000/](http://localhost:3000/)

## Testing

To run the Jest/Enzyme tests, from the cloned folder type:-
>`npm test`

## Code standards & structure

Prettier is used to format the source & test files, to run Prettier type:-
>`npm run pretty`

Code comments in source files should be kept to a minimum as code should be self explanitory. Code comments in tests are recommended.

All source files are in the src folder.  Redux actions & reducers (and associated tests) are stored in the actions & reducers sub folders respectively.  React components are stored in the components sub folder.
