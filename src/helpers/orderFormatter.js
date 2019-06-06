export default function (order) {
  return `#${(`00${order}`).slice(-3)}`
}
