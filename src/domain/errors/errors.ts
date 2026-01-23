export class Errors {

    public static readonly INVALID_PASSWORD = "La contraseña es inválida."
    public static readonly INVALID_EMAIL = "El email es inválido."
    public static readonly INVALID_NAME = "El nombre es inválido."
    public static readonly INVALID_LASTNAME = "El apellido es inválido."
    public static readonly INVALID_IMAGE = "El tamaño de la imágen debe ser menor a 1MB."
    public static readonly INVALID_TYPE = "Solo se permiten archivos JPG y JPEG."
    public static readonly INVALID_SHORTDESCRIPTION = "La descripción corta es inválida."
    public static readonly INVALID_LONGDESCRIPTION = "La descripción larga es inválida."

    public static readonly INTERNAL_ERROR = "Error interno del servidor."
    public static readonly INVALID_CREDENTIALS = "Credenciales inválidas."
    public static readonly EMAIL_ALREADY_IN_USE = "El email ya está en uso."
    public static readonly USER_NOT_FOUND = "Usuario no encontrado."
    public static readonly UNAUTHORIZED = "No autorizado."
    public static readonly FORBIDDEN = "Prohibido."
    public static readonly RESOURCE_NOT_FOUND = "Recurso no encontrado."
    public static readonly BAD_REQUEST = "Solicitud inválida."

    public static readonly FULLNAME_ALREADY_EXISTS = "El nombre de usuario ya existe"
    public static readonly EMAIL_ALREADY_EXISTS = "El email ya existe"
    public static readonly MISSING_REQUIRED_FIELDS = "El campo debe ser completado"
    public static readonly INVALID_FIELDS = "El campo es inválido"
    
    public static readonly LOGIN_ERROR_MESSAGE = "No se ha podido inicar sesión"
    public static readonly NO_SESSION_SAVED_ERROR = "No hay sesión guardada"
    public static readonly GET_SESSION_ERROR = "Error obteniendo sesión"
    public static readonly SAVE_SESSION_ERROR = "Error guardando sesión"
    public static readonly DELETE_SESSION_ERROR = "Error eliminando sesión"

    public static readonly UNKNOWN_ERROR = "Error desconocido"

}