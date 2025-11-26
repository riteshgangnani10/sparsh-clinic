import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    // Check if MONGODB_URI is set
    if (!process.env.MONGODB_URI) {
      console.error('❌ Error: MONGODB_URI is not defined in environment variables');
      console.error('   Please check your .env file in the backend directory');
      console.error('   Example: MONGODB_URI=mongodb://localhost:27017/sparsh-clinic');
      process.exit(1);
    }

    const conn = await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log(`✅ MongoDB Connected: ${conn.connection.host}`);
    console.log(`📊 Database: ${conn.connection.name}`);
  } catch (error) {
    console.error(`❌ MongoDB Connection Error: ${error.message}`);
    console.error('');
    console.error('💡 Troubleshooting:');
    console.error('   1. Check if MongoDB is running (if using local MongoDB)');
    console.error('   2. Verify MONGODB_URI in backend/.env file');
    console.error('   3. Check network connection (if using MongoDB Atlas)');
    console.error('   4. Verify MongoDB credentials are correct');
    process.exit(1);
  }
};

export default connectDB;

