// module.exports = (req, res, next) =>{// não podemos esquecer o 'next' dentro do middleware
//     if (req.body.cliente) {
//         req.body.cliente = req.body.cliente.replace('Garcia', 'Não use Garcia')
//     console.log();
//     console.log(`vi que voce postou ${req.body.cliente}`);
//     console.log();
// }
// next();
// };

exports.middlewareGlobal = (req, res, next) =>{// não podemos esquecer o 'next' dentro do middleware

next();
};

exports.outroMiddleware = (req, res, next) =>{// não podemos esquecer o 'next' dentro do middleware
console.log('sou seu outro middleware');
next();
};

