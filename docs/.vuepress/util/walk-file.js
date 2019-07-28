const fs = require('fs'),
   _ = require('lodash'),
  path = require('path')

const walkFile = (d, type, nDir = '', except = []) => {
  d = path.join(d, nDir)
  const list = []
  // 获得当前文件夹下的所有的文件夹和文件
  const [dirs, files] = _(fs.readdirSync(d)).partition(p => fs.statSync(path.join(d, p)).isDirectory())
  // 映射文件夹
  dirs.forEach(dir => {
    list.push(...walkFile(d, type, dir)) 
  })
  for (let i of except) {
    const index = files.indexOf(i)
    files.splice(index, 1)
  }
  if(files.length === 0) return list
  const o = {
    title: nDir,
    collapsable: nDir&&files.length>15 ? true: false,
    children: []
  }
  // 映射文件
  let hasReadme = false
  files.forEach(file => {
    if (path.extname(file) === type) {
      let filename = path.basename(file, type)
      filename === 'README' && (filename = '')
      let pathUrl = nDir ? `${nDir}/${filename}`: filename
      if(filename) o.children.push(pathUrl)
      else o.children.unshift(pathUrl)
    }
  })
  list.push(o)
  return list
}

module.exports = walkFile