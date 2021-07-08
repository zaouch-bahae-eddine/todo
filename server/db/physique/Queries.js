const connection = require('../Connexion');
const promiseConnection = connection.promise();
const formatDataRows = require('../../db/model/FormatDataRows');

const findAll = async (format) => {
    try{
        const [rows, allTodoFields]  = await promiseConnection.query('SELECT * FROM `'+ format.table +'`');
        return formatDataRows(rows, format);
    } catch(e) {
        console.log(`Erruer findAll ${e}`);
    }
}

const findById = async (id, format) => {
    try {
        const [rows, allTodoFields]  = await promiseConnection.query('SELECT * FROM `'+ format.table +'` WHERE `'+ format.fields.id +'` = ?', [id]);
        console.log(formatDataRows(rows));
        return formatDataRows(rows)[0];
    } catch (e) {
        console.log('format');
        console.log(format);
        console.log(`Erruer findById ${e}`);
    }
}
module.exports.findAll = findAll;
module.exports.findById = findById;