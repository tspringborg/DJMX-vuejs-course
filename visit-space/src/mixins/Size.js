import _ from 'lodash'

export default function size(props = null) {

    return {
        data() {
            return {
                size: {
                    width: 0,
                    height: 0,
                },
                debouncedResize: _.debounce(() => {
                    const bb = this.$el.getBoundingClientRect()
                    // console.log(this.$el, bb.width)
                    this.size = {
                        width: bb.width,
                        height: bb.height,
                    }
                }, 150, { leading: true }),
            }
        },
        mounted() {
            window.addEventListener('resize', this.debouncedResize)
            this.$nextTick(() => {
                this.debouncedResize()
            })
        },
        beforeDestroy() {
            window.removeEventListener('resize', this.debouncedResize)
        },
    }
}
