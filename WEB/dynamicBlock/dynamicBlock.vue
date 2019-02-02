<!--
 * @Description: file content
 * @Author: Ntfs
 * @Date: 2019-01-23 16:57:30
 * @LastEditors: Ntfs
 * @LastEditTime: 2019-01-30 11:20:31
 -->

<template>
  <div
    ref="dragWrap"
    :style="{'height': `${warpHeight}px`, 'width': `${warpWidth}px`, 'display': `${block}` }"
    :class="`dragWrap ${propClass} ${active ? 'active' : ''}`">
    <div
      class="dragContent">
      <slot
        name="dragContent" />
    </div>
    <div
      ref="rightBottom"
      :class="`dragIcon rightBottom ${active ? '' : 'hide'}`" />
  </div>
</template>

<script>

import Drag from './dragable'

function findNode (el, target) {
  let tmp = el
  while (tmp) {
    if (tmp === target) {
      return true
    } else {
      tmp = tmp.parentElement
    }
  }
  return false
}

export default {
  name: 'DynamicBlock',
  components: {},
  props: {
    height: {
      type: Number,
      default: 400
    },
    width: {
      type: Number,
      default: 640
    },
    propClass: {
      type: String,
      default: ''
    },
    cancelEle: {
      type: String,
      default: 'body'
    },
    block: {
      type: String,
      default: 'inline-block'
    }
  },
  data () {
    return {
      timer: null,
      active: false,
      warpWidth: this.width,
      warpHeight: this.height
    }
  },
  mounted () {
    this.canDrag = new Drag()
    let Ele
    try {
      Ele = document.querySelector(this.cancelEle)
    } catch (error) {
      throw new Error('please give a right dom element!')
    }
    if (!Ele) {
      throw new Error('cancelEle must be a dom element!')
    }
    Ele.addEventListener('click', (event) => {
      if (event.target === this.$refs.dragWrap || event.target === this.$refs.dragContent) {
        this.active = true
        this.$emit('active')
      } else if (findNode(event.target, this.$refs.dragWrap) === true) {
        this.active = true
        this.$emit('active')
      } else if (findNode(event.target, this.$refs.dragWrap) === false) {
        this.active = false
      } else if (event.target !== this.$refs.rightBottom) {
        this.active = true
      } else {
        this.active = false
      }
    })

    this.canDrag.init({
      el: this.$refs.rightBottom,
      toMove: (ev, position) => {
        ev.stopPropagation()
        this.warpWidth = position.X + 14
        this.warpHeight = position.Y + 14
        // this.debounce(500)
      },
      toUp: () => {
        this.$emit('getResult', {
          width: this.warpWidth,
          height: this.warpHeight
        })
      }
    })
  },
  methods: {
    debounce (wait) {
      var context = this
      var args = arguments
      if (this.timer) {
        clearTimeout(this.timer)
        this.timer = null
      }
      this.timer = setTimeout(() => {
        this.$emit('move', {
          width: this.warpWidth,
          height: this.warpHeight
        })
      }, wait)
    }
  }
}
</script>

<style lang="scss" scoped>
  .dragWrap {
    display: inline-block;
    position: relative;
    border: 1px solid transparent;
    padding: 1px;
    overflow: hidden;
    vertical-align: top;
    .dragIcon {
      z-index: 11;
      cursor: move !important;
      display: inline-block;
      height: 12px;
      width: 12px;
      position: absolute;
      &.rightBottom {
        cursor: nw-resize;
        bottom: 0;
        right: 0;
        border-bottom: 2px solid #0FACF3;
        border-right: 2px solid #0FACF3;
      }
      &.hide {
        display: none;
      }
    }
    .dragContent {
      width: 100%;
      height: 100%;
      position: relative;
    }
    &.active {
      border: 1px solid #0FACF3;
    }
  }
</style>
