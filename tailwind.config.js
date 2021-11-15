module.exports = {
  purge: ["./public/**/*.html", "./src/**/*.{js,jsx,ts,tsx,vue}"],
  plugins: [],
  corePlugins: {
    fontFamily: false,
  },
  extend: {
    translate: ["group-hover"],
  },
  env: {
    API_KEY: "Your Api Key",
  },
};
