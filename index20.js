// 1) необходимо написать сервер, который будет работать на порту 8090
// 2) при отправке гет запроса с таким урлом http://localhost:8090/user
//     необходимо вернуть одного юзера { userName: 'Boria', id: 1, email: 'boria23@gmail.com'}
// 3) при отправке гет запроса с таким урлом http://localhost:8090/users?id=1, где id может быть одно из чисел которое соответствует
// одному из id с массива users. В случае если такого юзера не существует то вернуть текст "User with following id does not exist"
//     имея
// const users = [
//     { userName: 'Boria', id: 1, email: 'boria23@gmail.com'},
//     { userName: 'Vasia', id: 2, email: 'boria23@gmail.com'},
//     { userName: 'Misha', id: 3, email: 'boria23@gmail.com'},
//     { userName: 'Misha', id: 4, email: 'boria23@gmail.com'},
//     { userName: 'Misha', id: 5, email: 'boria23@gmail.com'},
// ];

// fetch('http://localhost:8090/user', {headers: {}}).then(data => data.json()).then(result => console.log(result));
// fetch('http://localhost:8090/users?id=1', {headers: {}}).then(data => data.json()).then(result => console.log(result));
const http = require('http');
const url = require('url');
const arrUsers = [
    { userName: 'Boria', id: 1, email: 'boria23@gmail.com'},
    { userName: 'Vasia', id: 2, email: 'vasia23@gmail.com'},
    { userName: 'Stepa', id: 3, email: 'stepa23@gmail.com'},
    { userName: 'Misha', id: 4, email: 'misha23@gmail.com'},
    { userName: 'Anton', id: 5, email: 'anton23@gmail.com'},
];

http.createServer((req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    const uri = url.parse(req.url, true);
    const query = uri.query;
    const pathName = uri.pathname;
    if (pathName === '/user') {
        res.end(JSON.stringify({ userName: 'Boria', id: 1, email: 'boria23@gmail.com'}));
    } else if (pathName === '/users') {
        const result = arrUsers.find((element) => element.id === Number(query.id));
        if (!result) {
             res.end(JSON.stringify('User with following id does not exist'));
        }
         res.end(JSON.stringify(result));
    } else {
          res.end(JSON.stringify('No such address'));
    }
}).listen(8090, () => console.log('Server is running on port 8090'));
