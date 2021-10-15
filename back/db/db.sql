
CREATE DATABASE social
GO

USE social

CREATE TABLE users(
    id_user INT NOT NULL IDENTITY (1,1),
    [names] NVARCHAR(50) NOT NULL,
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
    node_js TINYINT NOT NULL,
    frontend  TINYINT NOT NULL,
    swagger  TINYINT NOT NULL,
    javascript  TINYINT NOT NULL,
    id_us_tec INT NOT NULL,
    PRIMARY KEY (id_tecnologies),
    FOREIGN KEY(id_us_tec) REFERENCES users(id_user)
)
GO

CREATE TABLE connect_friends(
    id_connect_friends INT NOT NULL IDENTITY (1,1),
    id_friend INT NOT NULL,
    id_user INT NOT NULL,
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

ALTER TABLE connect_friends ADD [status] BIT NOT NULL
GO

--SELECT id_friend, names FROM connect_friends where 1 = connect_friends.id_user

--UPDATE connect_friends SET [status]= '1' WHERE id_user= '1' AND  id_friend = '4'

--DELETE users WHERE id_user = 3

--DELETE connect_friends WHERE id_friend = 4

--SELECT * FROM connect_friends

--SELECT * FROM users