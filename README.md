## Graphql-Mongodb-Stack

This is a sample project that illustrates how you can connect graphql to a mongodb for a flexible api endpoint.

Resources:
 - Apollo graphql: https://www.apollographql.com/docs/apollo-server/getting-started/
 - Mongodb: https://docs.mongodb.com/manual/introduction/
 - Docker: https://docs.docker.com/compose/

## Getting Started!

If this is your first time using this repo make sure to run the following command to install the packages for graphql:
```sh
$ cd graphql
$ npm install
```
Start graphql apollo server:
```sh
$ cd graphql
$ npm run start
```
Start mongodb:
``` 
Docker-compose up -d --build
```

Now you are up and running! 

## MongoDB Shell Basics:

To start:
``` Docker-compose up -d --build ```

### To connect to mongo:

ssh into your mongo container:
```
docker container exec -it mongodb bash
```

login into mongo shell:
```
mongo --username root --password rootpassword
```

### Create or switch to a new database:

We will create a database called "foundation"

``` 
use foundation
```

- Mongo doesn't require a database to exist to switch over to. If it doesn't exist it will create the one you are switching to.


To see all databases:
``` 
show dbs
```
If a database doesn't contain any collections (tables) then the db you created won't show until you create your first collection

### Creating collection:
In mongo db collections are techincally what you call tables a database and essentially work the same way.

Manually creating a collection:
```
db.createCollection("Test")
```
- Reference: https://docs.mongodb.com/manual/reference/method/db.createCollection/ - for more options


However, you don't need to manually create a new collection every time. A collection will also be created upon your first creation of a Document explained next.

### Creating documents:
reference: https://docs.mongodb.com/manual/tutorial/insert-documents/

Once you a create a collection (Table), you can then create whats a called documents which goes inside the collection. Documents are essentially records in a table or rows in a table. They can be unstructured or structured. 

creating one simple document:

``` 
db.users.insertOne({name: "Bob"})
```
This will automatically create a collection (table) and one document (record) in it with a field (columns) called "name" and value in the field of "Bob"

To check if successfully created, run: 

```
db.users.find()
```

Creating more that one document at once:

``` 
db.users.insertMany([{ name: "Tom"}, {name: "Bill", age: 29}, {name: "Gina", age: 25, gender: "Female"}]) 
```

To check if successfully created, run: 

```
db.users.find()
```

You will notice that the collection can have different documents with different fields. The documents (records) don't all have to have the same fields or data structure.

### Reading documents:
reference: https://docs.mongodb.com/manual/tutorial/query-documents/

I have already showed you above how to get all the documents:
```
db.users.find()
```

A side note. If you want your output to be formatted nicely. Append .pretty() to the end. For example:
```
db.users.find().pretty()
```

To get documents by filter:
``` 
db.users.find({name:"Bob"}).pretty()
```
This will return all results where the name is "Bob"

To get a single document by filter:
``` 
db.users.findOne({name:"Bob"}).pretty()
```

### Updating documents:
reference: https://docs.mongodb.com/manual/tutorial/update-documents/

Updating all documents:
``` 
db.users.updateMany(filter, data, options)
```

example 
```
db.users.updateMany({name: "Bob"}, {$set: {name: "Bob the builder", gender: "Male", age: 97}}) 
```

Updating one document:
```
db.users.updateOne(filter, data, options)
```

### Deleting documents:
reference: https://docs.mongodb.com/manual/tutorial/remove-documents/

deleting one documents:
```
db.users.deleteOne(filter, options)
```

example 
``` 
db.users.deleteOne({name: "Tom"})
```

deleting all documents by a filter:
```
db.users.deleteMany(filter, options)
```

deleting all documents in a collection:
WARNING, DANGER, HACKER ATTACK YOU ABOUT TO WIPE YOUR COLLECTIONS (TABLE)
``` 
db.users.deleteMany({})
```








