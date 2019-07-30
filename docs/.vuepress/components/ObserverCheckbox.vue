<template>
  <div class="chebox-con">
    <input type='checkbox'
           name='checkbox0'></input>
           <label for="checkbox0">CheckBox 1</label>
    <button id='addNewObserver'>添加CheckBox</button>
    <!-- <v-btn class="mx-2" fab small color="error">
      <v-icon dark>add</v-icon>
    </v-btn> -->
    <div id='observersContainer'></div>
  </div>
</template>

<script>
  import '../lib/my_node_modules/vuetify/dist/vuetify.css'
  import Vuetify, {
  VBtn,
  VIcon
} from '../lib/my_node_modules/vuetify/lib'
  class Observer {
    constructor (obj) {
      this.target = obj
      Sub.AddObserver(this)
    }
    Update (context) {
      if (this.target) this.target.getUpdate(context)
    }
  }
  class ObserverList {
    constructor () {
      this.list = []
    }
    Add (obj) {
      if (this.IndexOf(obj) === -1) return this.list.push(obj)
    }
    Empty () {
      this.list = []
    }
    Count () {
      return this.list.length
    }
    Get (i) {
      if (i > -1 && i < this.list.length) {
        return this.list[i]
      }
    }
    Insert (obj, i) {
      if (this.IndexOf(obj) === -1) this.list.splice(i, 0, obj)
    }
    Remove (obj, i) {
      if (i) this.list.splice(i, 1)
      else {
        i = this.IndexOf(obj)
        this.list.splice(i, 1)
      }
    }
    IndexOf (obj) {
      return this.list.findIndex((item) => item == obj)
    }
  }
  class Subject {
    constructor () {
      this.observerList = new ObserverList()
    }
    AddObserver (observer) {
      this.observerList.Add(observer)
    }
    RemoveObserver (observer) {
      this.observerList.Remove(observer)
    }
    Notify (context) {
      const observersCount = this.observerList.Count()
      for (let i = 0;i < observersCount;i++) {
        this.observerList.Get(i).Update(context)
      }
    }
  }
  const Sub = new Subject()
  export default {
    components: {
      VBtn,
      VIcon
    },
    mounted () {
      let i = 1
      const controlCheckbox = document.querySelector('[name = checkbox0]'),
        addBtn = document.querySelector('#addNewObserver'),
        container = document.querySelector('#observersContainer')
      addBtn['onclick'] = function () {
        i++
        // 创建新的具体目标
        const check = document.createElement('input'),
        p = document.createElement('p'),
        label = `<label for="checkbox${i}">CheckBox ${i}</label>`
        check.type = 'checkbox'
        check.name = `checkbox${i}`
        // 创建新的观察者并添加到容器
        new Observer(check)
        // 观察者通知更新接口实现
        check.getUpdate = function (val) {
          this.checked = val
        }
        p.innerHTML = label
        p.prepend(check)
        container.appendChild(p)
      }
      // 通知观察者更新
      controlCheckbox['onclick'] = function () {
        Sub.Notify(this.checked)
      }
    },
  };
</script>

<style lang="stylus"></style>