CREATE DATABASE social
GO

CREATE TABLE users(
    id_user INT NOT NULL IDENTITY (1,1),
    [names] NVARCHAR(50) NOT NULL,
    -- Fecha de nacimiento reemplaza a edad: esto para obtener la edad y evitar al usuario estar actulizando su edad 
    f_last_name NVARCHAR(50) NOT NULL,
    s_last_name NVARCHAR(50) NOT NULL,
    email NVARCHAR(50) NOT NULL,
    [password] NVARCHAR(20) NOT NULL,
    image_url NVARCHAR(20) NOT NULL,
    PRIMARY KEY (id_user)
)
GO

CREATE TABLE data_users(
    id_data_user INT NOT NULL IDENTITY (1,1),
    city NVARCHAR(100) NOT NULL,
    country NVARCHAR(100) NOT NULL,
    idiom NVARCHAR(100) NOT NULL,
    linkedin NVARCHAR(100) NULL,
    github NVARCHAR(100) NULL,
    studies NVARCHAR(100) NULL,
    hobbies NVARCHAR(500) NULL,
    id_us_da INT NOT NULL,
    PRIMARY KEY (id_data_user),
    FOREIGN KEY (id_us_da) REFERENCES users(id_user) 
)
GO

CREATE TABLE tecnologies(
    id_tecnologies INT NOT NULL IDENTITY (1,1),
    node_js TINYINT(6) NOT NULL,
    frontend  TINYINT(6) NOT NULL,
    swagger  TINYINT(6) NOT NULL,
    javascript  TINYINT(6) NOT NULL,
    id_us_tec INT NOT NULL,
    PRIMARY KEY (id_tecnologies),
    FOREIGN KEY(id_us_tec) REFERENCES users(id_user)
)
GO

CREATE TABLE knowledge(
    id_knowledge INT NOT NULL IDENTITY (1,1),
    data_base TINYINT(6) NOT NULL,
    apis TINYINT(6) NOT NULL,
    testings TINYINT(6) NOT NULL,
    [security] TINYINT(6) NOT NULL,
    seguridad  TINYINT(6) NOT NULL,
    object_theory TINYINT(6) NOT NULL,
    id_us_kn INT NOT NULL,
    PRIMARY KEY (id_knowledge),
    FOREIGN KEY(id_us_kn) REFERENCES users(id_user)
)
GO

CREATE TABLE soft_skills(
    id_soft INT NOT NULL IDENTITY (1,1),
    focused TINYINT(6) NOT NULL,
    team_work TINYINT(6) NOT NULL,
    engaged TINYINT(6) NOT NULL,
    comunication TINYINT(6) NOT NULL,
    learning_ability  TINYINT(6) NOT NULL,
    troubleshooting TINYINT(6) NOT NULL,
    id_us_soft INT NOT NULL,
    PRIMARY KEY (id_soft),
    FOREIGN KEY(id_us_soft) REFERENCES users(id_user)
)
GO

CREATE TABLE performance(
    id_performance INT NOT NULL IDENTITY (1,1),
    code_quality TINYINT(6) NOT NULL,
    delivery_speed TINYINT(6) NOT NULL,
    code_performance TINYINT(6) NOT NULL,
    id_us_per INT NOT NULL,
    PRIMARY KEY (id_performance),
    FOREIGN KEY(id_us_per) REFERENCES users(id_user)
)
GO

CREATE TABLE connect_friends(
    id_connect_friends INT NOT NULL IDENTITY (1,1),
    id_friend INT NOT NULL,
    id_user INT NOT NULL,
    ---[status]  podemos agreagr un status para saber en que estado esta la solicitud de amistad
    PRIMARY KEY (id_connect_friends),
    FOREIGN KEY(id_user) REFERENCES users(id_user)
)
GO

CREATE TABLE feed_back(
    id_feed_back INT NOT NULL IDENTITY (1,1),
    id_friend INT NOT NULL,
    id_user INT NOT NULL,
    comments NVARCHAR(500) NOT NULL,
    PRIMARY KEY (id_feed_back),
    FOREIGN KEY(id_user) REFERENCES users(id_user)
)
GO


ALTER TABLE users DROP COLUMN image_url
GO
ALTER TABLE users ADD  date_of_birth DATE NOT NULL
GO
ALTER TABLE users ALTER COLUMN PASSWORD NVARCHAR(255)
