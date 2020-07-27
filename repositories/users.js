// require statement for outside libraries
const fs = require('fs');
const crypto = require('crypto');
const util = require('util');

// require other files from this project
const Repository = require('./repository');

const scrypt = util.promisify(crypto.scrypt);

class UsersRepository extends Repository {
    // create an object with an email and password
    async create(attrs) {
        attrs.id = this.randomId();

        const salt = crypto.randomBytes(8).toString('hex');
        const buffer = await scrypt(attrs.password, salt, 64);

        const records = await this.getAll();
        const record = {
            ...attrs,
            password: `${buffer.toString('hex')}.${salt}`,
        };
        records.push(record);

        await this.writeAll(records);

        return record;
    }

    // compare passwords when logging in
    async comparePasswords(saved, supplied) {
        const [hashed, salt] = saved.split('.');
        const suppliedHashBuffer = await scrypt(supplied, salt, 64);

        return hashed === suppliedHashBuffer.toString('hex');
    }
}

module.exports = new UsersRepository('users.json');
