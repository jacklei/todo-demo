var path = require('path');

var Todo = require('./models/todo');

function getTodos(res) {
    Todo.find(function (err, todos) {
        if (err) {
            res.send(err);
        }
        res.json(todos);
    });
};

module.exports = function (app) {
    // get all todos
    app.get('/api/todos', function (req, res) {
        getTodos(res);
    });

    // create todo and send back all todos after creation
    app.post('/api/todos', function (req, res) {
        // create a todo, information comes from AJAX request from Angular
        Todo.create({
            text: req.body.text,
            done: false
        }, function (err, todo) {
            if (err)
                res.send(err);
            getTodos(res);
        });

    });

    // delete a todo
    app.delete('/api/todos/:todo_id', function (req, res) {
        Todo.remove({
            _id: req.params.todo_id
        }, function (err, todo) {
            if (err)
                res.send(err);
            getTodos(res);
        });
    });

    app.get('*', function (req, res) {
        res.sendFile('index.html', {
            root: path.resolve(__dirname, '../public')
        }); 
    });
};
