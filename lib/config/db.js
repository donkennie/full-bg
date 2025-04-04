import mongoose from 'mongoose'

export const ConnectDb = async () => {
    await mongoose.connect('mongodb+srv://Donkennie:RBhYavWIW2ubMWLu@redorite.jtkof.mongodb.net/fullbgDBdb?retryWrites=true&w=majority')
    console.log("Db Connected!")
}
