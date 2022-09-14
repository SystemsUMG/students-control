const squel = require('squel');
const dbConnection = require('../../config/db-connection');

module.exports = app => {
    const connection = dbConnection();

    let query = squel.select()
        .from('students')
        .field('id')
        .field('name')
        .field('last_name')
        .field('age')
        .field('grade')
        .field('status');

    let insert = squel.insert().into('students')

    app.get('/', (request, res) => {
        connection.query(query.toString(), function (error, result) {
            if (error) {
                throw error;
            }
            
            res.render('students/students', {
                students: result
            });
        });
    });

    app.post('/students', (request, result) => {
        const { name, last_name, age, grade, status } = request.body

        insert.setFields({
            name,
            last_name,
            age,
            grade,
            status
        })

        connection.query(insert.toString(), function (error, res) {
            if (error) {
                throw error;
            }
            
            result.redirect('/');
        })
    });
}