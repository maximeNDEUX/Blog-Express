class ApiError extends Error {
    constructor(statusCode, message) {
        super(message);
        this.statusCode = statusCode;
        this.status = `${statusCode}`.startsWith("4") ? "fail" : "error";
        Error.captureStackTrace(this, this.constructor);
    }
}

// Erreur 404
class NotFoundError extends ApiError {
    constructor(message = "Resource not found") {
        super(404, message);
    }
}

// Erreur 400
class ValidationError extends ApiError {
    constructor(message = "Validation failed") {
        super(400, message);
    }
}

module.exports = { ApiError, NotFoundError, ValidationError };
