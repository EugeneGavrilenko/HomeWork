// 1) Заимлементить сервер на порту 3000
// 2) Сервер должен реагировать на POST запрос /user , принимая такое body { school: 'Hillel', course: 'javascript pro'},
// и необходимо добавить поле teacher: 'Sergei' к этому обьекту и вернуть его
// 3)Устанавливаем монго!

const http = require('http');
const url = require('url');

http.createServer((req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', '*');
    const uri = url.parse(req.url, true);
    const pathname = uri.pathname;
    if (pathname === '/user') {
        let body = [];
        req.on('data', (chunk) => {
            body.push(chunk);
        }).on('end', () => {
            body = String(body);
            const bodyParse = JSON.parse(body);
            bodyParse.teacher = 'Sergei';
            res.end(JSON.stringify(bodyParse));
        })
    } else {
        res.end('Something gone wrong');
    }
}).listen(3000, () => console.log('Server is running on port 3000'));

// POST запрос
// fetch('http://localhost:3000/user', {
//     method: 'POST',
//     body: JSON.stringify({ school: 'Hillel', course: 'javascript pro'})
// }).then(data => data.json()).then(result => console.log(result));


