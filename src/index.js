module.exports = function check(str, bracketsConfig) {
  const config = bracketsConfig.map((e) => e.join(''))

  for (let i = 0; i < config.length; i++) {

    if (str.includes(config[i])) {
      str = str.replace(config[i], '')

      i -= config.length
    }
  }

  if (str) return false

  return true
}
