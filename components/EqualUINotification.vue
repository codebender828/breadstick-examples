<template>
  <c-flex role="alert" v-bind="$props" :w="['300px', '300px', '350px']" min-h="20" m="3" rounded="4px" overflow="hidden" shadow="sm">
    <c-flex min-w="16" bg="blue.500" color="white" justify="center" align="center">
      <c-icon name="exclamation" />
    </c-flex>
    <c-flex bg="white" flex-dir="column" justify="center" font-size="sm" p="3">
      <c-heading v-if="$slots.title" as="h4" font-size="sm" mb="1" font-weight="bold">
        <slot name="title" />
      </c-heading>
      <c-text>
        <slot />
      </c-text>
    </c-flex>
  </c-flex>
</template>

<script>
import { CIcon, CFlex, CHeading, CText } from '@chakra-ui/vue'

export default {
  extends: CFlex,
  name: 'EqualUiNotification',
  components: {
    CHeading,
    CText,
    CFlex,
    CIcon
  }
}
</script>
