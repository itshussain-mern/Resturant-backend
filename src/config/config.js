require('dotenv').config()

class Config {
    static PORT = process.env.PORT || 3000
    static NODE_ENV = process.env.NODE_ENV || "dev"
    static DATABASE_NAME = process.env.DATABASE_NAME
    static DATABASE_USER = process.env.DATABASE_USER
    static DATABASE_PASSWORD = process.env.DATABASE_PASSWORD
    static DATABASE_HOST = process.env.DATABASE_HOST
}

module.exports = Config