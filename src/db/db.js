import mongoose from 'mongoose';

const connectionString = 'mongodb+srv://lautitheplug-admin:CsEoE72L0iH0zVmP@lautiplug.3ka4qbc.mongodb.net/coderhouse?retryWrites=true&w=majority'

try {
  await mongoose.connect(connectionString);
  console.log('Conectado a la base de datos MongoDB');
} catch (error) {
  console.log(error);
}