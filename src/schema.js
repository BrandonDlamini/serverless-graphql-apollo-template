const schema = `

"""
TYPE
"""

type Roomate {
    roomieId: String!
    name: String!
    email: String!
    phoneNumber: String!
    Description: String!
    area: String!
}


"""
QUERY
"""
type Query {
    hello: String!,
    getAllRoomies,
    getRoomieByArea
}



type Mutation

`;

export { schema };
