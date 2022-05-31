module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended"
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "@typescript-eslint"
    ],
    "ignorePatterns": ["dist","images","node_modules",
    "outPut","spec","README",".eslintrc.js",
     "migrations","docker-compose.yml","README.md","REQUIREMENTS.md"],
    "rules": {
    }
}
