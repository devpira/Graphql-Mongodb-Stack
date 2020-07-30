const { users, createUser } = require('./user')

const resolvers = {
    Query: {
        users: users
    },
    Mutation: {
        createUser,
    }
};

module.exports = {
    resolvers
}
