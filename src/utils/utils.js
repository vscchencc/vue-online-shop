export default function getData () {
  return new Promise((resolve, reject) => {
    resolve('ok')
  })
}

export function realPx (px) {
  const maxWidth = window.innerWidth > 500 ? 500 : window.innerWidth
  return px * (maxWidth / 375)
}
