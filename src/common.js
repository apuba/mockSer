
// 随机生成 n 个颜色数组
// count 总生成颜色数量

export const colorArray = count => {
  let color = []
  for (let n = 0; n < count; n++) {
    color.push(RandomColor())
  }
  return color
}

// 随机生成一个颜色
export const RandomColor = () => {
  return  '#'+Math.floor(Math.random()*0xffffff).toString(16);  
}
