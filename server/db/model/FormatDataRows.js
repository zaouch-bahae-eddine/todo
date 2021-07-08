const formatDataRows = (dataRows, format) => {
    const response = [];
    const modelOject = {...format};
    dataRows.map(row => {
        Object.keys(format.fields).forEach((key) => {
            modelOject[key] = row[format.fields[key]];
        });
        response.push({...modelOject});
    })
    console.log(response);
    return response;
}
module.exports = formatDataRows;