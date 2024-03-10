import mongoose from 'mongoose'

const MONGODB_URL = process.env.MONGODB_URL;

let cachd =(global as any).mongoose || { conn: null, promise: null }

export const conectToMongoose = async() => {
   if(cachd.conn) return cachd.conn;

   if(!MONGODB_URL) throw new Error('MONGODB_URL is missing')

   cachd.promise = cachd.promise || mongoose.connect(MONGODB_URL, {
      dbName: 'evently',
      bufferCommands: false
   })

   
}