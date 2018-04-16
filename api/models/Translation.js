/**
 * Translation.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

    attributes: {
        id: {
            type: 'number',
            columnType: 'int',
            autoIncrement: true,
        },
        createdDate: {
            type: 'string',
            columnType: 'varchar(24)',
            maxLength: 24,
        },
        updatedDate: {
            type: 'string',
            columnType: 'varchar(24)',
            maxLength: 24,
        },
        lang: {
            type: 'string',
            columnType: 'varchar(255)',
            required: true,
            maxLength: 255,
        },
        territory: {
            type: 'string',
            columnType: 'varchar(255)',
            allowNull: true,
            maxLength: 255,
        },
        namespace: {
            type: 'string',
            columnType: 'varchar(255)',
            allowNull: true,
            maxLength: 255,
        },
        key: {
            type: 'string',
            columnType: 'longtext',
            required: true,
        },
        content: {
            type: 'string',
            columnType: 'longtext',
        },
        editorData: {
            type: 'json',
            columnType: 'json',
            defaultsTo: {},
        },
        data: {
            type: 'json',
            columnType: 'json',
            defaultsTo: {},
        },
    },

};

