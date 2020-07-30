const { mongoDriver } = require('../../../mongodb')

const createUser = async (_, args) => {
    // const newUser = {
    //     name: name,
    //     gender: gender,
    //     age: age,
    //     eats_chocolate: eats_chocolate,
    // };

    let returnResult = {}
    await mongoDriver()
    .collection('users')
    .insertOne(args)
    .then(result => {
        console.log(result)
        returnResult = {
            status: true,
            inserted_id: result.insertedId
        }
    })
    .catch(err => {
        console.log(err)
        returnResult = {
            status: false,
            error_message: err
        }
    });
   
    return returnResult;
}

module.exports = createUser
