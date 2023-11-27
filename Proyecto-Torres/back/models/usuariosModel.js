var pool = require('./bd');
var md5 = require('md5');

async function getUserByUsernameAndPaswword(user, password){
    try{
        var query ="select * from usuarios where usuario = ? and password = ? limit 1";
        var rows = await pool.query(query,[user, md5(password)]);
    } catch (error) {
        throw error;
    }
}

module.exports = { getUserByUsernameAndPaswword}