module.export = {
    datastores: {
        default: {
            adapter: 'sails-mysql',
            url: 'mysql://root:next-cloud@localhost:3306/notesprojets',
        }
    },
    models: {
        migrate: 'safe'
    }
}