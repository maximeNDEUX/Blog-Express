module.exports = (fn) => (req, res, next) => {
    console.log("appel de asyncHandler.js");
    Promise.resolve(fn(req, res, next)).catch(next);
};
