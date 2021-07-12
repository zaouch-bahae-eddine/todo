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
        const [rows, allTodoFields]  = await promiseConnection.query('SELECT * FROM `'+ format.table +'` WHERE `'+ format.fields['id'] +'` = ?', [id]);
        const result = formatDataRows(rows, format);
        return result[0];
    } catch (e) {
        console.log('format');
        console.log(format);
        console.log(`Erruer findById ${e}`);
    }
}

const add = async (data, format) => {
    let query = `INSERT INTO \`${format.table}\` `;
    let columns = '';
    let values = '';
    Object.keys(format.fields).forEach(key => {
        if(data[key] !== undefined && key !== 'id'){
            columns += `\`${format.fields[key]}\`, `;
            values += `'${data[key]}', `;
        }
    });
    columns = columns.slice(0, -2);
    values = values.slice(0, -2);
    query += `(${columns}) VALUES (${values});`;
    const [rows, allTodoFields]  = await promiseConnection.query(query);
    return await findById(rows.insertId, format);
}

const setById = async (data, format) => {
    let query = `UPDATE \`${format.table}\` SET `;
    Object.keys(format.fields).forEach(key => {
        if(data[key] != undefined && key !== 'id'){
            query += `\`${format.fields[key]}\` = '${data[key]}', `
        }
    });
    query = query.slice(0, -2);
    query += ` WHERE \`id\` = ${data.id};`
    console.log(query);
    const [rows, allTodoFields]  = await promiseConnection.query(query);
    return await findById(data.id, format);
}

const deleteById = async (id, format) => {
    const query = `DELETE FROM \`${format.table}\` WHERE \`${format.fields.id}\` = ${id}`;
    const deletedObject = await findById(id, format);
    const [rows, allTodoFields]  = await promiseConnection.query(query);
    return deletedObject;
}
module.exports.findAll = findAll;
module.exports.findById = findById;
module.exports.add = add;       
module.exports.setById = setById;
module.exports.deleteById = deleteById;