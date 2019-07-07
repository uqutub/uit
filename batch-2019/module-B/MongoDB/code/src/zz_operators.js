// https://docs.mongodb.com/manual/reference/operator/query/and/

Model.find( { $and: [ { price: { $ne: 1.99 } }, { price: { $exists: true } } ] } )
// This query will select all documents in the inventory collection where:

// the price field value is not equal to 1.99 and
// the price field exists.


// This query can be also be constructed with an implicit AND operation 
// by combining the operator expressions for the price field. For example, this query can be written as:
Model.find( { price: { $ne: 1.99, $exists: true } } )





Model.find( {
    $and : [
        { $or : [ { price : 0.99 }, { price : 1.99 } ] },
        { $or : [ { sale : true }, { qty : { $lt : 20 } } ] }
    ]
} )

// This query will select all documents where: the price field value equals 0.99 or 1.99, and
// the sale field value is equal to true or the qty field value is less than 20.
// This query cannot be constructed using an implicit AND operation, because it uses the $or operator more than once.