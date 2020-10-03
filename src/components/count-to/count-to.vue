<template>
  <div>
    <span :id="eleId"></span>
  </div>
</template>

<script>
import CountUp from 'countup'
export default {
  name: 'CountTo',
  computed: {
    eleId () {
      return `new_count_up_${this._uid}`
    }
  },
  data () {
    return {
      counter: {}
    }
  },
  props: {
    startVal: {
      type: Number,
      default: 0
    },
    endVal: {
      type: Number,
      required: true,
      default: 99999
    },
    decimal: {
      type: Number,
      default: 0
    },
    duration: {
      type: Number,
      default: 1
    },
    useEasing: {
      type: Boolean,
      default: false
    },
    useGrouping: {
      type: Boolean,
      default: true
    }
  },
  methods: {
    getCount () {
      return this.$refs.number.innerText
    },
    emitEndEvent () {
      setTimeout(() => {
        this.$nextTick(() => {
          this.$emit('on-animation-end', Number(this.getCount()))
        })
      }, this.duration * 1000 + 5)
    }
  },
  // 监听器
  watch: {
    endVal (newVal, oldVal) {
      this.counter.update(newVal)
      this.emitEndEvent()
    }
  },
  mounted () {
    // mounted方法 -> 生命周期当实例初始化完成，DOM元素都已经挂载上了。但是还不确定全部元素已经渲染完成
    // $nextTick? -> 当页面所有元素渲染完成 后，会调用 $nextTick方法
    this.$nextTick(() => {
      // new countup
      // 传入渲染组件ID，但是id是要唯一的，如果多个页面引用同一组件，ID会重复
      // 解决？ -> 每引用一次生成 一个唯一ID  -> eleId
      this.counter = new CountUp(this.eleId, this.startVal, this.endVal, this.decimal, this.duration, {
        useEasing: this.useEasing,
        useGrouping: this.useGrouping,
        separator: ',',
        decimal: '.'
      })
      setTimeout(() => {
        this.counter.start()
      }, 200)
    })
  }
}
</script>
