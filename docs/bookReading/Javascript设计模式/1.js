// import _ from 'lodash'
// 一个目标可能有一系列observer
class Dep {
  //订阅器  ==>  收集订阅者
  constructor() {
    this.target = null
    this.subs = [] //收集watcher数组
  }
  setTarget(data) {
    this.target = data
  }
  addSub(sub) {
    //添加watcher的方法 -----  DEP的方法
    this.subs.push(sub)
  }
  removeSub(sub) {
    //移除wtcher，暂时没什么用
    const i = this.subs.indexOf(sub)
    if (i !== -1) this.subs.splice(i, 1)
  }
  depend() {
    //传入订阅器，然后添加订阅者
    if (this.target) this.target.addDep(this)
  }
  notify() {
    //通知订阅者更新
    this.subs.forEach((sub) => {
      sub.update()
    })
  }
}

class Observer {
  constructor(data) {
    this.init(data)
  }
  init(data) {
    Object.keys(data).forEach((key) => {
      //对象的所有key的劫持
      this.defineReactive(data, key, data[key])
    })
  }
  defineReactive(data, key, val) {
    this.observe(val) // 对值也劫持
    const that = this //	对劫持的key操作，传入observe中value，是一个对象将递归劫持value
    Object.defineProperty(data, key, {
      enumerabel: true, //可枚举
      configurabel: true, //可修改
      get() {
        DEP.depend() //添加到订阅器
        return val
      },
      set(newVal) {
        if (newVal === val) return
        val = newVal
        that.observe(val) //对新值做劫持
        DEP.notify() //通知更新
      }
    })
  }
  observe(value) {
    if (!value || typeof value !== 'object') return
    return new Observer(value) //只对object进行劫持
  }
}

class Watcher {
  //监听数据，根据属于或方法，执行回调函数
  constructor(data, key, cb) {
    this.data = data //总的data
    this.key = key //表达式(data的属性)，或者一个function
    this.cb = cb //数据更新后执行的回调函数
    this.initGetter(key) // 解析表达式，得到一个getter方法
    this.initGet = this.get() //初始化一次，set 全局DEP的target，target不为null，可在订阅器中添加订阅者(watcher)，之后target置空，避免每次获data的值的之后递归添加订阅者
    this.value = typeof this.initGet === 'object' ? deepCopy(this.initGet) : this.initGet //当前订阅者的值（是否需要深拷贝），新旧值对比来源，
  }
  initGetter(exp) {
    //getter方法，获取data上key的值
    const t = Object.prototype.toString.call(exp)
    switch (t) {
      case '[object Function]':
        this.getter = exp
        break
      default:
        this.getter = this.parseGetter(exp)
        break //判断是否是data的key的key
    }
  }
  addDep(dep) {
    // 通过订阅器去添加当前订阅器
    dep.addSub(this)
  }
  get() {
    DEP.setTarget(this) //改变DEP.target
    let value = undefined
    if (this.getter) {
      value = this.getter.call(this.data, this.data) //去获取data上的值，走了一遍数据劫持，这是DEP.target不为空，就能添加订阅者了
    }
    DEP.setTarget(null) //置空DEP.target避免重复添加
    return value
  }
  run() {
    //获取新旧值对比是否有更新，更新后通知this.cb执行
    const oldVal =
      typeof this.value === 'object' ? deepCopy(this.value) : this.value //基本类型与引用类型
    let value = this.getter.call(this.data, this.data),
      isSameFlag
    if (typeof value === 'object') {
      isSameFlag = Object.keys(value).every((key) => {
        return value[key] === oldVal[key]
      })
    } else {
      isSameFlag = value === oldVal
    }
    if (!isSameFlag) {
      this.value = typeof value === 'object' ? deepCopy(value) : value //通知更新，重赋值当前watcher的value，下次更新时会用到
      this.cb.call(this.data, value, oldVal) //回调函数执行，且this指向data
    }
  }
  update() {
    //数据更新 == 》 DEP里调用
    this.run()
  }
  parseGetter(exp) {
    var exps = exp.split('.')
    return function(obj) {
      for (var i = 0, len = exps.length; i < len; i++) {
        if (!obj) return
        obj = obj[exps[i]]
      }
      return obj
    }
  }
}
function deepCopy(obj) {
  //深拷贝一下
  var result = Array.isArray(obj) ? [] : {}
  for (var key in obj) {
    if (obj.hasOwnProperty(key)) {
      if (typeof obj[key] === 'object') {
        result[key] = deepCopy(obj[key])
      } else {
        result[key] = obj[key]
      }
    }
  }
  return result
}
//创建一个全局订阅器实例
const DEP = new Dep()


const obj = {
  a: 1,
  b: 2
}
new Observer(obj)
new Watcher(obj,'a', (val,oldVal) => {
  console.log(oldVal,'=>',val)
})
