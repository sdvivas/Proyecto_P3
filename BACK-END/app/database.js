const mysql= require('mysql');

const mysqlConection=mysql.createConnection({
    host: 'bexotsqo1smcwibzrc2c-mysql.services.clever-cloud.com',
    user: 'u82pcl89espzoccg',
    password: 'mnbGjN1vY0F6YqtrpAPy',
    database: 'bexotsqo1smcwibzrc2c'
})

mysqlConection.connect(function (err){
    if(err){
        console.log(err);
        return
    }else{
        console.log('Db is connected')
    }
});

module.exports=mysqlConection