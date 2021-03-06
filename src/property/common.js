import { mapActions } from 'vuex'
import rules from '../constants/rules'
export default {
  props: {
    data: {
      type: Object
    },
    title: String,
    index: [String, Number],
    rules: Object
  },
  computed: {
    label() {
      return this.data.title || this.title
    },
    prop() {
      return this.index
    },
    rules() {
      return this.data.rule ? rules[this.data.rule] : rules[this.index] ? rules[this.index] : []
    }
  },
  methods: {
    ...mapActions([
      'editModuleData'
    ])
  },
  watch: {
    'data': {
      deep: true,
      handler: function(newVal, oldVal) {
        if(!newVal) return

        this.editModuleData(newVal)
      }
    }
  }
}
