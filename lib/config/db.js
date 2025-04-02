import mongoose from 'mongoose'

const ConnectDb = async () => {
    await mongoose.connect('mongodb+srv://Donkennie:<db_password>@redorite.jtkof.mongodb.net/full-bg')
}