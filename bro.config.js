const pkg = require("./package");

module.exports = {
  apiPath: "stubs/api",
  webpackConfig: {
    output: {
      publicPath: `/static/${pkg.name}/${process.env.VERSION || pkg.version}/`,
    },
  },
  /* use https://admin.bro-js.ru/ to create config, navigations and features */
  navigations: {
    "ecliptica.main": "/ecliptica",
    "ecliptica.info": "/ecliptica/info/:id",
    "ecliptica.calendar": "/ecliptica/calendar"
  },
  features: {
    "ecliptica": {
      // add your features here in the format [featureName]: { value: string }
    },
  },
  config: {
    "ecliptica.api": "/api",
    "ecliptica.backend": "http://localhost:8099/api/ecliptica",
  },
};
