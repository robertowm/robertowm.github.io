module.exports = {
  isDev: process.env.ELEVENTY_RUN_MODE === "serve" || process.env.NODE_ENV === "development"
};
