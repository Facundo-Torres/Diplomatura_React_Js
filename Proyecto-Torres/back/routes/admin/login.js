var usuariosModel = requie('./../../models/usuariosModel');


router.post('/', async (req, res, next) => {
  try {
    var usuario = req.body.usuario;
    var password = req.body.password;

    var data = await
      usuariosModel.getUserByUsernameAndPassword(usuario, password);
    if (data != undefined) {
      req.session.id.usuario = data.id;
      req.session.nombre = data.usuario;
      res.redirect('/admin/novedades');
    } else {
      res.render('admin/login', {
        layout: 'admin/layout',
        error: true
      });
    }
    } catch (error) {
      console.log(error);
    }
  }
);
