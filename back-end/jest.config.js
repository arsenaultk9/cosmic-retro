module.exports = {
    "roots": [
        "<rootDir>"
    ],
    transform: {
        "\\.ts$": ['ts-jest']
    },
    "collectCoverage": false,
    "testEnvironment": "node",
    "coveragePathIgnorePatterns": [
        "/node_modules/"
    ]
}