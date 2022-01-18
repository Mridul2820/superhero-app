import mongoose from 'mongoose';

const { MONGO_URL } = process.env

const connection = {}

const dbConnect = async() => {
    const db = await mongoose.connect(MONGO_URL, {
        useNewUriParser: true,
        useUnifiedTopology: true
    })
    connection.isConnected = db.connections[0].readyState
}