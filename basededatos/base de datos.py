import sqlite3
#creacion de la base de datos
conexion =sqlite3.connect("CodePyMaker")

#crear cursor
cursor =conexion.cursor()

#crear tablas(query)
cursor.execute('''
    CREATE TABLE Usuarios(
    ID_Rol INTEGER PRIMARY KEY,
    nombre VARCHAR(50),
    CARRERA VARCHAR(50),
    CONTRASENA VARCHAR(15),
    NIVEL INTEGER)
    ''')
cursor.execute('''
    CREATE TABLE PROBLEMAS(
    ENUNCIADOS VARCHAR(60) PRIMARY KEY,
    EXPERIENCIA INTEGER,
    ID_ROL INTEGER)
    ''')
cursor.execute('''
    CREATE TABLE RESPUESTAS(
    SALIDAS VARCHAR(60) PRIMARY KEY
    SAL_DIAS VARCHAR (60))
    ''')
cursor.execute('''
    CREATE TABLE CONSEJOS (
    ENUNCIADOS VARCHAR(60) PRIMARY KEY,
    CONSEJOS VARCHAR(60))
    ''')
cursor.execute('''
    CREATE TABLE DIASNOGTICO (
    ENUNCIADOS_DIAS VARCHAR(70) PRIMARY KEY,
    COSEJOS_DIAS VARCHAR(65))
    ''')
cursor.execute('''
    CREATE TABLE APRENDIZAJE (
    ID_ROL INTEGER PRIMARY KEY,
    METODOS VARCHAR(100),
    HIPERVINCULOS VARCHAR(60),
    EDITORES_CODIGO VARCHAR(90),
    MATERIAL_DE LENGUAJES (VARCHAR(200))
    ''')
cursor.execute('''
    CREATE TABLE HIPERVINCULOS(
    CERTMEN_1 VARCHAR(200),
    CERTMEN_2 VARCHAR(200),
    CERTMEN_3 VARCHAR(200))
    ''')
cursor.execute('''
    CREATE TABLE EDITORES(
    EDITOR VARCHAR(200) PRIMARY KEY,
    DESCRIPCION VARCHAR(200),
    LINK_DESCARGA VARCHAR(200))
    ''')
cursor.execute('''
    CREATE TABLE CERTEMENES(
    CERTMEN_1 VARCHAR(200),
    CERTMEN_2 VARCHAR(200),
    CERTMEN_3 VARCHAR(200))
    ''')
#insertar datos
#cursor.execute("INSERT INTO Usuarios VALUES(2019736140, 'SEBASTIAN', 'INFORMATICA', 'HOLA',25)")
#conexion.commit()
#cerrar coneccion
conexion.close()
