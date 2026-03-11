export default {
  plugins: {
    "postcss-pxtorem": {
      rootValue: 16, // 1rem = 16px
      propList: ["*"], // конвертировать все свойства
      selectorBlackList: [], // можно исключать классы
      replace: true,
      mediaQuery: false,
      minPixelValue: 0
    }
  }
}