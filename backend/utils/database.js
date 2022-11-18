const mongoose = require('mongoose')

module.exports = async function database() {
    try {
        mongoose.connection.on('open', () => {
            console.log('Database connected')
        })
        //connect to the database 
        await mongoose.connect('mongodb+srv://oma189:oma189@cluster0.tu8sjpg.mongodb.net/test', {dbName : 'omaBlog'});
    } catch (err) {
        console.log(err)
    }
}