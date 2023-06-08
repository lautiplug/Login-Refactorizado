import mongoose from 'mongoose';

const connectionString = 'poner el string de la conexion'

try {
  await mongoose.connect(connectionString);
  console.log('Conectado a la base de datos MongoDB');
} catch (error) {
  console.log(error);
}