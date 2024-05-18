import mongoose from 'mongoose';

const connectMongoDb = async () => {
  try {
    await mongoose.connect(process.env.ATLAS_URI)
      .catch(error => console.log(error));
  } catch (error) {
    console.log(error);
  }
}

export default connectMongoDb