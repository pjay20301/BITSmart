const mongoose = require('mongoose')

let gfs;

const connectDB = async () => {
    try {
        const con = await mongoose.connect(process.env.URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        //useFindAndModify: false,
        //useCreateIndex: true,
        })
        // const connect = mongoose.createConnection(process.env.URI, {
        //     useNewUrlParser: true,
        //     useUnifiedTopology: true,
        // })

        // connect.once('open', () => {
        //     // initialize stream
        //     gfs = new mongoose.mongo.GridFSBucket(connect.db, {
        //         bucketName: 'uploads',
        //     })
        // })
        console.log(`MongoDB connected : ${con.connection.host}`)
    } catch (err) {
        console.log(err)
        process.exit(1)
    }
}
module.exports = {connectDB, gfs: gfs}
