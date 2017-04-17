exports.PORT = process.env.PORT || 3000;
exports.ENVIRONMENT  = process.env.ENVIRONMENT || "prod";

exports.REQUEST_PATH = {
    dev: "dev",
    test: "test",
    prod: "prod"
}[exports.ENVIRONMENT]