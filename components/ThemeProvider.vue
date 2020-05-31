<script>
import { defaultTheme } from '@chakra-ui/vue'

export default {
  name: 'ThemeProvider',
  provide() {
    return {
      $chakraTheme: () => defaultTheme
    }
  },
  render() {
    return this.$slots.default
  }
}
</script>
