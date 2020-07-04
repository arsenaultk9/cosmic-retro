module.exports = {
    "roots": [
        "<rootDir>"
    ],
    "transform": {
        "^.+\\.tsx?$": "ts-jest",
        ".+\\.(css|styl|less|png|jpg|ttf|woff|woff2)$": "jest-transform-stub",
        ".+\\.(sass|scss)$": "jest-css-modules-transform",
    },
    "snapshotSerializers": ["enzyme-to-json/serializer"],
    "setupFilesAfterEnv": ["<rootDir>/SetupEnzyme.ts"],
    "moduleNameMapper": {
        ".+\\.(css|styl|less|png|jpg|ttf|woff|woff2)$": "jest-transform-stub",
        ".+\\.(less|sass)$": "jest-css-modules-transform",
    },
    "collectCoverage": false
}