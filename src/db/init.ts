import mongoose from 'mongoose';

export const connect = async () => {
    await mongoose.connect('mongodb+srv://stoguri16:fle6W26Z4unrZ9Fp@cluster0.p8dza.mongodb.net/testing?retryWrites=true&w=majority&appName=Cluster0');
};

export const disconnect = async () => {
    await mongoose.connection.close();
};
