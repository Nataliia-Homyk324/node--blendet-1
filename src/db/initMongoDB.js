import mongoose from 'mongoose';

import { env } from '../utils/env.js';

export const initMongoDB = async () => {
  try {
    // const user = env('MONGODB_USER');
    // const pwd = env('MONGODB_PASSWORD');
    // const url = env('MONGODB_URL');
    // const db = env('MONGODB_DB');

    const host = env('DB_HOST');

    await mongoose.connect(host);

    console.log('Mongo connection successfully established!');
  } catch (e) {
    console.log('Error while setting up mongo connection', e);
    throw e;
  }
};
