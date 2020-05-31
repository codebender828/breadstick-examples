<template>
  <c-box role="alert" v-bind="$props" border-left="5px solid" m="1" border-color="green.500" bg="green.400" color="white" :w="['300px', '300px', '350px']" p="4">
    <c-heading v-if="$slots.title" as="h3" font-size="sm">
      <slot name="title" />
    </c-heading>
    <c-box font-size="sm">
      <c-text>
        <slot />
      </c-text>
    </c-box>
  </c-box>
</template>

<script>
import { CBox, CHeading, CText } from '@chakra-ui/vue'

export default {
  extends: CBox,
  name: 'VueNotification',
  components: {
    CBox,
    CHeading,
    CText
  }
}
</script>
