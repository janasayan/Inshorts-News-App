import mongoose from 'mongoose';

const Connection = async () => {
    try{
    const URL = `mongodb://sayan:Sayan250@inshort-shard-00-00.pssw3.mongodb.net:27017,inshort-shard-00-01.pssw3.mongodb.net:27017,inshort-shard-00-02.pssw3.mongodb.net:27017/Inshort?ssl=true&replicaSet=atlas-oz6uoj-shard-0&authSource=admin&retryWrites=true&w=majority`;
    await mongoose.connect(URL, {useNewUrlParser: true})
    console.log("Database connected succesfully");
    } catch(err){
        console.log("Error while connecting to database", err);
    }
}

export default Connection;