import mongoose from 'mongoose'

const startDBConnection = () => mongoose.connect(process.env.MONGODB_URL || 'mongodb://mongodb:27017/pandora-insights').then(() => console.log('MongoDB connected'))

export { startDBConnection }
