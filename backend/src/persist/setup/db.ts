import mongoose = require("mongoose");
import { MONGO_DB } from '../../utils/constants';


export const initializeMongoConnection = () => {

    mongoose.connect(MONGO_DB, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false
    });
        
    mongoose.connection.on('connected', () => {
        console.log('Mongoose connection is opened to ' + MONGO_DB);
    }); 
    
    mongoose.connection.on('error', (err) => { 
        console.log('Mongoose default connection error: ' + err);
    }); 
    
    mongoose.connection.on('disconnected', () => { 
        console.log('Mongoose default connection disconnected'); 
    });
    
    process.on('SIGINT', function() {   
        mongoose.connection.close(function () { 
            console.log('App terminated - close mongodb connection'); 
            process.exit(0); 
        }); 
    }); 
}
