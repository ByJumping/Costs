<template>
    <div :class="[$style.wrp]">
        <div @click="onClick(cur - 1)"><a href="#">-</a></div>
        <div
                v-for="i in amount" :key="i"
                :class="{
        [$style.active]: cur === i
      }"
                @click="onClick(i)"
        ><a class="links" href="#">{{ i }}</a></div>
        <div @click="onClick(cur + 1)"><a class="links" href="#">+</a></div>
    </div>
</template>

<script>
export default {
    props: {
        length: Number,
        n: Number,
        cur: Number
    },
    computed: {
        amount () {
            return Math.ceil(this.length / this.n)
        }
    },
    methods: {
        onClick (p) {
            if (p < 1 || p > this.amount) {
                return
            }
            this.$emit('paginate', p)
        }
    }
}
</script>

<style module lang="scss">
.wrp {
  display: flex;
  & > div {
    padding: 10px;
    &.active {
      background: #b9c9fe;
    }
  }
}
a {
  color: #039;
  text-decoration: none;
}
</style>
