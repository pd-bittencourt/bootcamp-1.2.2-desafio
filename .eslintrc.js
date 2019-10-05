module.exports = {
  extends: ["airbnb-base", "prettier"],
  plugins: ["prettier"],
  env: {
    es6: true,
    node: true
  },
  extends: ["airbnb-base"],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly"
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module"
  },
  rules: {
    "prettier/prettier": "error", // todos os erros do prettier retornar erro no eslint
    "class-methods-use-this": "off", // express tem métodos sem this
    "no-param-reassign": "off", // para o sequelize
    camelcase: "off", // n todas as variaveis definidas com camelcase
    "no-unused-vars": ["error", { argsIgnorePattern: "next" }]
  }
};
