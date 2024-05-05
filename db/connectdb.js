import mongoose from "mongoose";

const connectdb = async(db_url)=>{
    try {
       const db_options = {
            dbname: 'restApi1'
        }
        await mongoose.connect(db_url, db_options);
        console.log('Connected to db')
    } catch (error) {
        console.log(error)
    }
}
export default connectdb;