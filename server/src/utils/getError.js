export default async function getError(error) {
    if (error.statusCode) {
        return {
            message: error.message || 'unexpectedError',
            statusCode: error.statusCode,
        };
    }

    switch (error.name) {
        case 'ValidationError':
            return {
                message: Object.values(error.errors)[0]?.message || 'validationError',
                statusCode: 400,
            };
        case 'CastError':
            return {
                message: 'invalidDataFormat',
                statusCode: 400,
            };
        case 'MongoError':
            return {
                message: 'databaseError',
                statusCode: 500,
            };
        default:
            return {
                message: error.message || 'unexpectedError',
                statusCode: 500,
            };
    }
}
