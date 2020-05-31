<template>
  <c-box
    v-bind="mainStyles[colorMode]"
    w="100vw"
    :h="['auto', 'auto', '100vh']"
    align="center"
    flex-dir="column"
    bg="gray.50"
    position="relative"
  >
    <c-box p="6" bg="gray.100">
      <c-heading text-align="center" mb="4">🥖 Style your Vue Notifications with Breadstick</c-heading>
      <c-text text-align="center">
        How to build custom styled notifications with Vue.js and Breadstick
      </c-text>
      <c-alert :display="['block', 'block', 'inline-flex']" my="4" variant="left-accent">
        <c-flex align="center" :flex-dir="['column', 'column', 'row']">
          <c-alert-icon :mb="[1, 1, 0]" />
          <c-alert-title d="block">Tutorial blog coming this week.</c-alert-title>
        </c-flex>
        <c-alert-description>
          <c-link color="blue.800" mx="1" text-decoration="underline" href="https://twitter.com/codebender828">Follow me on Twitter</c-link> so as not to miss the blog post this week!
        </c-alert-description>
      </c-alert>
      <c-box>
        <c-button variant-color="orange" left-icon="triangle-up" as="a" target="_blank" href="https://github.com/codebender828/breadstick-examples" size="sm">View Source on github</c-button>
      </c-box>
      <c-text text-align="center" mt="2">Made with ❤️ by <c-link is-external href="https://twitter.com/@codebender828">Jonathan Bakebwa 🇺🇬</c-link></c-text>
    </c-box>

    <c-flex py="10" :px="[5, 5, 10]" :flex-dir="['column-reverse', 'column-reverse', 'row']" align="center">

      <!-- Examples -->
      <c-stack :w="['100%', '100%', '50%']" spacing="3">
        <c-box text-align="left">
          <c-text ml="3" font-weight="bold">1. Vercel Toast</c-text>
          <VercelNotification>
            Copied to clipboard!
          </VercelNotification>
        </c-box>
        <c-box text-align="left">
          <c-text ml="3" font-weight="bold">2. VueNotification Toast</c-text>
          <VueNotification>
            <template slot="title">
              Test success notification #4
            </template>
            {{ 'This is a notification text! Today is ' + new Date().toISOString() }}
          </VueNotification>
        </c-box>
        <c-box text-align="left">
          <c-text ml="3" font-weight="bold">3. Equal UI Toast</c-text>
          <EqualUiNotification>
            <template slot="title">
              Primary notification
            </template>
            <template>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, dolores.
            </template>
          </EqualUiNotification>
        </c-box>
      </c-stack>

      <!-- Click these buttons to render these toast components -->
      <c-stack spacing="4" :align="['center', 'center', 'start']" :mb="[10, 10, 0]">
        <c-button @click="showVercelToast" variant-color="blue">Show Vercel Toast</c-button>
        <c-button @click="showVueNotificationToast" variant-color="green">Show VueNotification Toast</c-button>
        <c-button @click="showEqualUiToast">Show Equal UI Toast</c-button>
      </c-stack>
    </c-flex>
  </c-box>
</template>

<script lang="js">
import {
  CBox,
  CButton,
  CHeading,
  CStack,
  CImage,
  CFlex,
  CText,
  CAlert,
  CAlertTitle,
  CAlertIcon,
  CAlertDescription,
  CLink
} from '@chakra-ui/vue'

import VercelNotification from '@/components/VercelNotification'
import VueNotification from '@/components/VueNotification'
import EqualUiNotification from '@/components/EqualUINotification.vue'

export default {
  name: 'App',
  inject: ['$chakraColorMode', '$toggleColorMode'],
  components: {
    CBox,
    CButton,
    CHeading,
    CStack,
    CImage,
    CFlex,
    CText,
    CAlert,
    CAlertIcon,
    CAlertTitle,
    CAlertDescription,
    CLink,
    VercelNotification,
    VueNotification,
    EqualUiNotification,
  },
  data () {
    return {
      showModal: false,
      mainStyles: {
        dark: {
          bg: 'gray.700',
          color: 'whiteAlpha.900'
        },
        light: {
          bg: 'white',
          color: 'gray.900'
        }
      }
    }
  },
  computed: {
    colorMode () {
      return this.$chakraColorMode()
    },
    theme () {
      return this.$chakraTheme()
    },
    toggleColorMode () {
      return this.$toggleColorMode
    }
  },
  methods: {
    /** Show Vercel style toast */
    showVercelToast() {
      this.$notify('Copied to clipboard!', {
        position: 'bottom-right',
      })
    },
    /** Show `vue-notification` style toast */
    showVueNotificationToast() {
      this.$notify('This is a notification text! Today is ' + new Date().toISOString(), {
        title: 'Test success notification #4',
        position: 'top-right',
        notification: 'vue-notification'
      })
    },
    /** Show `Equal UI` style toast */
    showEqualUiToast() {
      this.$notify('Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, dolores.', {
        title: 'Primary notification',
        position: 'bottom-left',
        notification: 'equal-ui'
      })
    }
  }
}
</script>
