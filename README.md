# basicStartNodeMongo
A quick jumpstart to creating a node api with mongodb. 


1. Clone or download repository.
2. Inside a terminal navigate into the project directory and `npm install`.
3. Setup a mongo database with a collection called "items".
4. Add a few documents with a "title" field.
5. In item.js change the database connection to point to your mongo database.
6. Back in terminal start server with `noder server`.
    Or for less restarts install nodemon `npm install -g nodemon`,
    then use `nodemon` to start the server.
7. Open browser and go to http://localhost:3000/api/items to see items in json.
