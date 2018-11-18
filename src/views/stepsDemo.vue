<template>
  <div>
    <Steps :current="current">
      <Step title="通用" @click.native="step_first" content="这里是该步骤的描述信息"></Step>
      <Step title="规则" @click.native="step_second" content="这里是该步骤的描述信息"></Step>
      <Step title="回调" @click.native="step_third" content="这里是该步骤的描述信息"></Step>
      <Step title="输出" @click.native="step_forth" content="这里是该步骤的描述信息"></Step>
      <Step title="预览" @click.native="step_fifth" content="这里是该步骤的描述信息"></Step>
    </Steps>
    <!--<div align="left" style="height: 100%">-->
      <!--<Button type="primary" @click="next">Next step</Button>-->
    <!--</div>-->
  </div>
</template>

<script>
export default {
  name: 'stepsDemo',
  data () {
    return {
      msg: '',
      current: 1
    }
  },
  methods: {
    next () {
      if (this.current === 4) {
        this.current = 0
      } else {
        this.current += 1
      }
    },
    step_first () {
      console.log('step_first')
      this.current = 0
    },
    step_second () {
      console.log('step_second')
      this.current = 1
    },
    step_third () {
      console.log('step_third')
      this.current = 2
    },
    step_forth () {
      console.log('step_forth')
      this.current = 3
    },
    step_fifth () {
      console.log('step_fifth')
      this.current = 4
    }
  }
}
</script>

<style scoped>
</style>
