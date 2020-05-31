<template>
  <c-box role="alert" bg="blue.400" m="3" color="white" :w="['300px', '300px', '350px']" py="4" px="6" text-align="left" rounded="md" shadow="lg" v-bind="$props">
    <slot />
  </c-box>
</template>

<script>
import { CBox } from '@chakra-ui/vue'

export default {
  extends: CBox,
  name: 'VercelNotification',
  components: {
    CBox
  }
}
</script>
