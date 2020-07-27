// require statement for outside libraries
const fs = require('fs');
const crypto = require('crypto');

module.exports = class Repository {
    constructor(filename) {
        // if no filename is passed in then throw an error
        if (!filename) {
            throw new Error('Creating a repository requires a filename.');
        }

        this.filename = filename;
        // if a filename is passed in then try to write to the file and if it doesn't exist then create the file
        try {
            fs.accessSync(this.filename);
        } catch {
            fs.writeFileSync(this.filename, '[]');
        }
    }

    async create(attrs) {
        attrs.id = this.randomId();

        const records = await this.getAll();
        records.push(attrs);
        await this.writeAll(records);

        return attrs;
    }

    // open the file that matches the filename passed in
    async getAll() {
        return JSON.parse(
            await fs.promises.readFile(this.filename, {
                encoding: 'utf8',
            })
        );
    }

    // write to the json file
    async writeAll(records) {
        await fs.promises.writeFile(
            this.filename,
            JSON.stringify(records, null, 2)
        );
    }

    // create a random Id
    randomId() {
        return crypto.randomBytes(4).toString('hex');
    }

    // get a user by Id
    async getOne(id) {
        const records = await this.getAll();
        return records.find((record) => record.id === id);
    }

    // get a user by any key in the database
    async getOneBy(filters) {
        const records = await this.getAll();

        for (let record of records) {
            let found = true;

            for (let key in filters) {
                if (record[key] !== filters[key]) {
                    found = false;
                }
            }

            if (found) {
                return record;
            }
        }
    }

    // delete a user
    async delete(id) {
        const records = await this.getAll();
        const filteredRecords = records.filter((record) => record.id !== id);
        await this.writeAll(filteredRecords);
    }

    // update a user
    async update(id, attrs) {
        const records = await this.getAll();
        const record = records.find((record) => record.id === id);

        if (!record) {
            throw new Error(`Record with id ${id} not found.`);
        }

        Object.assign(record, attrs);
        await this.writeAll(records);
    }
};
