import mongoose, { ConnectOptions } from 'mongoose';

const MONGODB_URL = process.env.MONGODB_URL;

let cached = (global as any).mongoose || { conn: null, promise: null };

export const conectToMongoose = async () => {
   console.log('Connecting to MongoDB...');

   if (cached.conn) {
      console.log('Using cached connection to MongoDB');
      return cached.conn;
   }

   if (!MONGODB_URL) {
      throw new Error('MONGODB_URL is missing');
   }

   console.log('Creating new connection to MongoDB');
   cached.promise = cached.promise || mongoose.connect(MONGODB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
      poolSize: parseInt(process.env.POOL_SIZE!),
   } as ConnectOptions)
      .then((res) => {
         console.log(
            'Connected to Distribution API Database - Initial Connection'
         );
      })
      .catch((err) => {
         console.log(
            `Initial Distribution API Database connection error occured -`,
            err
         );
      });

   cached.conn = await cached.promise;

   console.log('Connected to MongoDB');
   return cached.conn;
};