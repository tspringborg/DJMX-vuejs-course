//https://stackoverflow.com/a/51150829

module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/ts/dmjx/visit-space/'
    : '/'
}