module.exports = function(config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine'],
    files: [
      'DateTime.js',
      'test/spec/*.js'
    ],
    browsers: ['Chrome'],
    singleRun: true,
    preprocessors: { '*.js': ['coverage'] },
    reporters: ['progress', 'coverage']
  });
};