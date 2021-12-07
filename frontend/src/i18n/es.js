const es = {
  common: {
    or: 'o',
    cancel: 'Cancelar',
    reset: 'Reiniciar',
    save: 'Guardar',
    search: 'Buscar',
    edit: 'Editar',
    remove: 'Eliminar',
    new: 'Nuevo',
    export: 'Exportar a Excel',
    noDataToExport: 'No hay datos para exportar',
    import: 'Importar',
    discard: 'Descarte',
    yes: 'Si',
    no: 'No',
    pause: 'Pausa',
    areYouSure: '¿Estás seguro/a?',
    view: 'Vista',
    destroy: 'Eliminar',
    mustSelectARow: 'Debe seleccionar una fila',
    confirm: 'Confirmar',
  },
  
  app: {
    title: 'ITECBOOKS',
  },

  entities: {
    loan: {
      name: 'Préstamo',
      label: 'Préstamos',
      menu: 'Préstamos',
      exporterFileName: 'Préstamo_Exportación',
      list: {
        menu: 'Préstamos',
        title: 'Préstamos',
      },
      create: {
        success: 'Préstamo guardado con éxito',
      },
      update: {
        success: 'Préstamo guardado con éxito',
      },
      destroy: {
        success: 'Préstamo eliminado exitoso',
      },
      destroyAll: {
        success: 'Préstamo(s) eliminado exitosamente',
      },
      edit: {
        title: 'Editar préstamo',
      },
        fields: {
          id: 'Id',
          'book': 'Libro',
          'member': 'Miembro',
          'issueDateRange': 'Fecha de emisión',
          'issueDate': 'Fecha de emisión',
          'dueDateRange': 'Fecha de vencimiento',
          'dueDate': 'Fecha de vencimiento',
          'returnDateRange': 'Fecha de devolución',
          'returnDate': 'Fecha de devolución',
          'status': 'Estado',
          createdAt: 'Creado en',
          updatedAt: 'Actualizado en',
          createdAtRange: 'Creado en',
        },
        enumerators: {
          'status': {
            'inProgress': 'En curso',
            'overdue': 'Atrasado',
            'closed': 'Cerrado',
          },
        },
        new: {
          title: 'Nuevo préstamo',
        },
        view: {
          title: 'Ver préstamo',
        },
        importer: {
          title: 'importar préstamo',
          fileName: 'plantilla_importacion_prestamo',
          hint:
            'Las columnas Archivos/Imágenes deben ser las URL de los archivos separadas por espacios.',
        },
        validation: {
          bookOutOfStock: 'Lo sentimos, este libro está agotado.',
        },
      },
  
      book: {
        name: 'libro',
        label: 'Libros',
        menu: 'Libros',
        exporterFileName: 'exportacion_libros',
        list: {
          menu: 'Libros',
          title: 'Libros',
        },
        create: {
          success: 'Libro guardado correctamente',
        },
        update: {
          success: 'Libro guardado correctamente',
        },
        destroy: {
          success: 'Libro eliminado correctamente',
        },
        destroyAll: {
          success: 'Libro(s) eliminado correctamente',
        },
        edit: {
          title: 'Editar Libro',
        },
        fields: {
          id: 'Id',
          'isbn': 'ISBN',
          'title': 'Título',
          'author': 'Autor',
          'numberOfCopiesRange': 'Número de copías',
          'numberOfCopies': 'Número de copías',
          'stockRange': 'Existencia',
          'stock': 'Existencia',
          'images': 'Imagenes',
          'status': 'Estado',
          createdAt: 'Creado en',
          updatedAt: 'Actualizado en',
          createdAtRange: 'Creado en',
        },
        enumerators: {
          'status': {
            'available': 'Disponible',
            'unavailable': 'No disponible',
          },
        },
        new: {
          title: 'Libro nuevo',
        },
        view: {
          title: 'Ver libro',
        },
        importer: {
          title: 'Importar libros',
          fileName: 'plantilla_importacion_libros',
          hint:
            'Las columnas Archivos/Imágenes deben ser las URL de los archivos separadas por espacios.',
        },
      },
    },
  
    auth: {
      profile: {
        title: 'Editar perfil',
        success: 'Perfil actualizado correctamente',
      },
      createAnAccount: 'Crear una cuenta',
      rememberMe: 'Recuerdame',
      forgotPassword: 'Olvide mi contraseña',
      signin: 'Iniciar sesión',
      signup: 'Registrarse',
      signout: 'Cerrar sesión',
      alreadyHaveAnAccount:
        '¿Ya tienes una cuenta? registrate.',
      signinWithAnotherAccount:
        'Iniciar sesión con otra cuenta',
      emailUnverified: {
        message: `Por favor confirme su correo electrónico <strong>{0}</strong> para confirmar.`,
        submit: `Reenviar verificacion de correo electronico`,
      },
      emptyPermissions: {
        message: `Aun no tiene permisos por favor espere que el administrador le otorge privilegios.`,
      },
      passwordResetEmail: {
        message: 'Enviar correo electronico de restablecimiento de contraseña',
        error: `Correo electronico no reconocido.`,
      },
      passwordReset: {
        message: 'Restablecer contraseña',
      },
      emailAddressVerificationEmail: {
        error: `Correo electronico no reconocido`,
      },
      verificationEmailSuccess: `El correo electronico de verificacion se envio correctamente`,
      passwordResetEmailSuccess: `El correo electronico de restablecimiento de contraseña se envio correctamente`,
      passwordResetSuccess: `La contraseña se cambio correctamente`,
      verifyEmail: {
        success: 'Correo electronico verificado correctamente',
        message:
          'Un momento, se esta verificando su correo electronico...',
      },
    },
  
    roles: {
      librarian: {
        label: 'Bibliotecario',
        description: 'Acceso de Bibliotecario',
      },
      member: {
        label: 'Miembro',
        description: 'Acceso de Miembro',
      },
    },
    iam: {
      title: 'Usuarios',
      menu: 'Usuarios',
      disable: 'Deshabilitar',
      disabled: 'Deshabilitado',
      enabled: 'Habilitado',
      enable: 'Habilitar',
      doEnableSuccess: 'Usuario habilitado correctamente',
      doDisableSuccess: 'Usuario deshabilitado correctamente',
      doDisableAllSuccess: 'Usuario(s) deshabilitado correctamente',
      doEnableAllSuccess: 'Usuario(S) deshabilitado correctamente',
      doAddSuccess: 'Usuarios guardado correctamente',
      doUpdateSuccess: 'Usuario guardado correctamente',
      viewBy: 'Ve por',
      users: {
        name: 'usuarios',
        label: 'Usuarios',
        exporterFileName: 'exportar_usuarios',
        doRemoveAllSelectedSuccess:
          'Permisos eliminados exitosos',
      },
      roles: {
        label: 'Roles',
        doRemoveAllSelectedSuccess:
          'Permisos eliminados con éxito',
      },
      edit: {
        title: 'Editar usuarios',
      },
      new: {
        title: 'Nuevos usuario(s)',
        emailsHint:
          'Separe varias direcciones de correo electrónico con el carácter de coma.',
      },
      view: {
        title: 'Ver usuario',
        activity: 'Actividad',
      },
      importer: {
        title: 'Importar usuarios',
        fileName: 'platilla_importacion_usuarios',
        hint:
          'Las columnas Archivos/Imágenes deben ser las URL de los archivos separadas por espacios.',
      },
      errors: {
        userAlreadyExists:
          'El usuario con este correo ya existe',
        userNotFound: 'Usuario no encontrado',
        disablingHimself: `No puedes inhabilitarte a ti mismo`,
        revokingOwnPermission: `No puedes revocar tu propio permiso de bibliotecario`,
      },
    },
  
    user: {
      fields: {
        id: 'Id',
        authenticationUid: 'Authentication Uid',
        avatars: 'Imagen',
        email: 'Correo electrónico',
        emails: 'Correos electrónicos',
        fullName: 'Nombre',
        firstName: 'Nombre',
        lastName: 'Apellido',
        status: 'Estado',
        disabled: 'Desactivado',
        phoneNumber: 'Número de teléfono',
        role: 'Rol',
        createdAt: 'Creado en',
        updatedAt: 'Actualizado en',
        roleUser: 'Rol/Usuario',
        roles: 'Roles',
        createdAtRange: 'Creado en ',
        password: 'Contraseña',
        rememberMe: 'Recuerdame',
      },
      enabled: 'Habilitado',
      disabled: 'Deshabilitado',
      validations: {
        // eslint-disable-next-line
        email: 'El correo electrónico ${value} no es valido',
      },
    },

    auditLog: {
      menu: 'Registro de auditoría',
      title: 'Registro de auditoría',
      exporterFileName: 'exportacion_registro_auditoria',
      entityNamesHint:
        'Separe varias entidades con el carácter coma.',
      fields: {
        id: 'Id',
        timestampRange: 'Periodo',
        entityName: 'Entidad',
        entityNames: 'Entidades',
        entityId: 'Id de indentidad',
        action: 'Acción ',
        values: 'Valores',
        timestamp: 'Fecha',
        createdByEmail: 'Correo electrónico de usuario',
      },
    },
    settings: {
      title: 'Configuración',
      menu: 'Configuración',
      save: {
        success:
          'Configuración guardada correctamente. La página se recargara en {0} segundo para que los cambios hagan efecto.',
      },
      fields: {
        theme: 'Tema',
        loanPeriodInDays: 'Periodo de préstamo (en días)',
      },
      colors: {
        default: 'Predeterminado',
        cyan: 'Cian',
        'geek-blue': 'Azul',
        gold: 'Oro',
        lime: 'Lima',
        magenta: 'Magenta',
        orange: 'Naranja',
        'polar-green': 'Verde',
        purple: 'Morado',
        red: 'Rojo',
        volcano: 'Volcano',
        yellow: 'Amarillo',
      },
    },
    home: {
      menu: 'Inicio',
    },
    
    errors: {
      backToHome: 'Volver a inicio',
      403: `Lo siento no tienes acceso a esta página`,
      404: 'Lo siento, la página que visitaste no existe',
      500: 'Lo sentimos, el servidor informa de un error',
      forbidden: {
        message: 'Prohibido',
      },
      validation: {
        message: 'Se produjo un eror',
      },
      defaultErrorMessage: 'Ups, ocurrió un error',
    },
    // See https://github.com/jquense/yup#using-a-custom-locale-dictionary
    /* eslint-disable */
    validation: {
      mixed: {
        default: '${path} no es valido',
        required: '${path} es obligatorio',
        oneOf:
          '${path} no debe ser uno de los siguientes valores: ${values}',
        notOneOf:
          '${path} no debe ser uno de los siguientes valores: ${values}',
        notType: ({ path, type, value, originalValue }) => {
          return `${path} debe ser ${type}`;
        },
      },
      string: {
        length:
          '${path} debe tener exactamente ${length} carácteres',
        min: '${path} debe tener al menos ${min} carácteres',
        max: '${path} debe tener como máximo ${max} carácteres',
        matches:
          '${path} debe coincidir con lo siguiente: "${regex}"',
        email: '${path} debe ser un correo elctrónico valido',
        url: '${path} debe ser una URL valida',
        trim: '${path} debe ser una cadena recortada',
        lowercase: '${path} debe ser una cadena minúscula',
        uppercase: '${path} debe ser una cadena mayúscula',
        selected: '${path} debe ser seleccionado',
      },
      number: {
        min:
          '${path} debe ser mayor igual que ${min}',
        max: '${path} debe ser menor igual que ${max}',
        lessThan: '${path} debe ser menor que ${less}',
        moreThan: '${path} debe ser mayor que ${more}',
        notEqual: '${path} debe ser igual a ${notEqual}',
        positive: '${path} debe ser una número positivo',
        negative: '${path} debe ser un número negativo',
        integer: '${path} debe ser un número entero',
        invalid: '${path} debe ser un número',
      },
      date: {
        min: '${path} debe ser posterior a ${min}',
        max: '${path} debe ser anterior a ${max}',
      },
      boolean: {},
      object: {
        noUnknown:
          '${path} no puede tener claves no especificadas en la forma del objeto',
      },
      array: {
        min: '${path} debe tener menos ${min} elementos',
        max:
          '${path} debe tener menos o igual que ${max} elementoss',
      },
    },
  /* eslint-disable */
  fileUploader: {
    upload: 'Subir',
    image: 'Debe subir una imagen',
    size: 'El archivo es demasiado grande. El archivo permitido es {0}',
    formats: `Formato no valido. Debe ser '{0}'.`,
  },
  importer: {
    line: 'Línea',
    status: 'Estado',
    pending: 'Pendiente',
    imported: 'Importado',
    error: 'Error',
    total: `{0} importado, {1} pendiente y {2} con error`,
    importedMessage: `Procesados {0} of {1}.`,
    noNavigateAwayMessage:
      'No navege fuera de esta página o la importación se detendrá.',
    completed: {
      success:
        'Importaci+on completa. Todas las filas se importaron correctamente.',
      someErrors:
        'Procesamiento completado, pero algunas filas no se pudieron importar.',
      allErrors: 'Error de importación, no hay filas validas.',
    },
    form: {
      downloadTemplate: 'Descargar plantilla',
      hint:
        'Haga clic o arrastre el archivo en esta área para continuar',
    },
    list: {
      discardConfirm:
        '¿Estás seguro? Los datos no importados se perderán.',
    },
    errors: {
      invalidFileEmpty: 'El archivo esta vacío',
      invalidFileExcel:
        'Solo se permiten archivos en excel (.xlsx)',
      invalidFileUpload:
        'Archivo invalido. Asegurece de que está utilizando la última versión de la plantilla.',
      importHashRequired: 'Se requiere importar el hash',
      importHashExistent: 'Los datos ya se importaron',
    },
  },

  autocomplete: {
    loading: 'Cargando...',
  },

  imagesViewer: {
    noImage: 'Sin imagen',
  },
}; 
  
export default es;
