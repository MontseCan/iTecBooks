const es = {
  app: {
    title: 'ITECBOOKS',
  },

  entities: {
    loan: {
      validation:{
        returnDateRequired: `Return Date is required`,
        bookOutOfStock: `Sorry, this book is out of stock`,
      },
    },

  book: {
    validation:{
      bookOutOfStock: `The number of copies is less than the current copies loaned`,
    },
  },
},

  auth: {
    userDisabled: 'Su cuenta está deshabilitada',
    userNotFound: `Lo sentimos no reconocemos sus credenciales`,
    wrongPassword: `Lo sentimos no reconocemos sus credenciales`,
    weakPassword: 'Esta contraseña es demasiado débil',
    emailAlreadyInUse: 'El correo electrónico ya está en uso',
    invalidEmail: 'Por favor proporcione un correo electrónico válido',
    passwordReset: {
      invalidToken:
        'El enlace de restablecimiento de contraseña no es válido o ha caducado',
      error: `Correo electrónico no reconocido`,
    },
    emailAddressVerificationEmail: {
      invalidToken:
        'El enlace de verificación de correo electrónico no es válido o ha caducado',
      error: `Correo electrónico no reconocido`,
    },
  },

  iam: {
    errors: {
      userAlreadyExists:
        'El usuario con este correo ya existe',
      userNotFound: 'Usuario no encontrado',
      disablingHimself: `No puedes inhabilitarte a ti mismo`,
      revokingOwnPermission: `No puedes revocar tu propio permiso de bibliotecario`,
    },
  },

  importer: {
    errors: {
      invalidFileEmpty: 'El archivo está vacío',
      invalidFileExcel:
        'Solo se permiten archivos excel (.xlsx) ',
      invalidFileUpload:
        'Asegurece que este ocupando la misma versión de la plantilla.',
      importHashRequired: 'Se requeire importar el hash',
      importHashExistent: 'Los datos se han importado',
    },
  },

  errors: {
    forbidden: {
      message: 'Prohibido',
    },
    validation: {
      message: 'Se produjo un error',
    },
  },

  emails: {
    invitation: {
      subject: `Te han invitado a {0}`,
      body: `
        <p>Hola,</p>
        <p>le han invitado a {0}.</p>
        <p>Sigue este enlace para registrarte.</p>
        <p><a href="{1}">{1}</a></p>
        <p>Gracias,</p>
        <p>su {0} Equipo </p>
      `,
    },
    emailAddressVerification: {
      subject: `Verifique su correo electrónico {0}`,
      body: `
        <p>Hola,</p>
        <p>Siga este enlace para verificar su correo electrónico.</p>
        <p><a href='{0}'>{0}</a></p>
        <p>If si no solicito verificar esta dirección, puede ignorar este mensaje.</p>
        <p>Gracias,</p>
        <p>su {1} Equipo </p>
      `,
    },
    passwordReset: {
      subject: `Restablece tu contraseña para {0}`,
      body: `
        <p>Hola,</p>
        <p>siga este enlace para restablecer su  {0} contraeña para su {1} cuenta .</p>
        <p><a href='{2}'>{2}</a></p>
        <p>Si No solicitó restablecer su contraseña, puede ignorar este correo electrónico.</p>
        <p>Gracias,</p>
        <p>su {0} equipo</p>
      `,
    },
  },
};


module.exports = es;
