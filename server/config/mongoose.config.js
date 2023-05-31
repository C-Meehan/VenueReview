const mongoose = require('mongoose')
const dbUsername = process.env.dbUsername
const dbPassword = process.env.dbPassword
const dbCluster = process.env.dbCluster

mongoose.connect(`mongodb+srv://${dbUsername}:${dbPassword}@${dbCluster}.mongodb.net/VenueReview?retryWrites=true&w=majority
`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

    .then(() => console.log('Established a connection to the database'))
    .catch(err => console.log('Something went wrong when connecting to the database', err))