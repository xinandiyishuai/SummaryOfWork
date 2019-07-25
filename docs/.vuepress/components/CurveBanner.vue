<template>
  <div class="curve-con">

  </div>
</template>

<script>
  import curvejs from '../lib/node_modules/curvejs/index.js'
  import util from '../util/util.js'
  import Word from '../lib/curve/word.js'
  const { Stage, motion } = curvejs
  const randomColor = util.randomColor
  let stage = null
  export default {
    computed: {
      data () {

      }
    },
    methods: {
      tick () {
        stage.update()
        window.requestAnimationFrame(this.tick)
      },
      main () {
        const words = ['Summary', 'Of', 'Work']
        const space = 100
        let instance = 0
        words.forEach(w => {
          w.split('').forEach(item => {
            const x = instance + 65
            // stage.add(new Word('a',{
            //     color: randomColor(),
            //     x,
            //     motion: motion.dance,
            //     data: {angle: 0, r:4 ,step:Math.PI / 40 }
            // }))
            instance = x
          })
          instance += space
        })
        stage.add(new Word('S', {
          color: randomColor(),
          x: -8,
          motion: motion.dance,
          data: { angle: 0, r: 5, step: Math.PI / 40 }
        }))
        stage.add(new Word('u', {
          color: randomColor(),
          x: 78,
          y: 5,
          motion: motion.dance,
          data: { angle: 188, r: 4, step: Math.PI / 40 }
        }))
        stage.add(new Word('m', {
          color: randomColor(),
          x: 92 * 2,
          y: 5,
          motion: motion.dance,
          data: { angle: 0, r: 3, step: Math.PI / 40 }
        }))
        stage.add(new Word('m', {
          color: randomColor(),
          x: 92 * 3,
          y: 5,
          motion: motion.dance,
          data: { angle: 0, r: 5, step: Math.PI / 40 }
        }))
        stage.add(new Word('a', {
          color: randomColor(),
          x: 83 * 4,
          y: 5,
          motion: motion.dance,
          data: { angle: 0, r: 4, step: Math.PI / 40 }
        }))
        stage.add(new Word('r', {
          color: randomColor(),
          x: 83 * 5,
          y: 5,
          motion: motion.dance,
          data: { angle: 0, r: 4, step: Math.PI / 40 }
        }))
        stage.add(new Word('y', {
          color: randomColor(),
          x: 78 * 6,
          motion: motion.dance,
          data: { angle: 0, r: 4, step: Math.PI / 40 }
        }))
        stage.add(new Word('O', {
          color: randomColor(),
          x: 83 * 4,
          y: 160,
          motion: motion.dance,
          data: { angle: 0, r: 4, step: Math.PI / 40 }
        }))
        stage.add(new Word('f', {
          color: randomColor(),
          x: 82 * 5,
          y: 160,
          motion: motion.dance,
          data: { angle: 0, r: 4, step: Math.PI / 40 }
        }))
        stage.add(new Word('W', {
          color: randomColor(),
          x: 64 * 6,
          y: 340,
          motion: motion.dance,
          data: { angle: 0, r: 4, step: Math.PI / 40 }
        }))
        stage.add(new Word('o', {
          color: randomColor(),
          x: 76 * 7,
          y: 340,
          motion: motion.dance,
          data: { angle: 0, r: 4, step: Math.PI / 40 }
        }))
        stage.add(new Word('r', {
          color: randomColor(),
          x: 78 * 8,
          y: 368,
          motion: motion.dance,
          data: { angle: 0, r: 4, step: Math.PI / 40 }
        }))
        stage.add(new Word('k', {
          color: randomColor(),
          x: 76 * 9,
          y: 340,
          motion: motion.dance,
          data: { angle: 0, r: 4, step: Math.PI / 40 }
        }))
        this.tick()
      }
    },
    mounted () {
      stage = new Stage(800, 520, '.curve-con')
      this.main()
    }
  };
</script>

<style lang="stylus">
  .curve-con {
    margin: 0 auto;
    width: 50vw;
    height: 52vh;
  }
</style>
