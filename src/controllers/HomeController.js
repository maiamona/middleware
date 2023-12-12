// exports.paginaInicial = (req, res, next) =>{
//     res.render('index');//não presisa da extensão 'ejs' ou index.ejs
//     console.log(`'paginaInicial' olha o que tem na req.session.nome ${req.session.nome}`);
// next();
// };

// exports.trataPost = (req, res, next) =>{
// // res.send('sou sua nova rota de Post');
// res.send(`seu nome completo é ${req.body.nome} ${req.body.sobrenome}`);
// };

exports.paginaInicial = (req, res) =>{
    res.render('index');//não presisa da extensão 'ejs' ou index.ejs
   return;
};

exports.trataPost = (req, res) =>{
// res.send('sou sua nova rota de Post');
res.send(`${req.body.cliente}`);
return;
};