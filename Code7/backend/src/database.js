import mongoose from 'mongoose';

class Database {
    constructor() {
        this.mongo();
    }

    mongo() {
        this.mongoConnection = mongoose.connect(
            'mongodb://localhost:27017/code7',
            { useNewUrlParser: true, useFindAndModify: false,
             useUnifiedTopology: true }
        )
    }
}

export default new Database();