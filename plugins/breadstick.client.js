import { defaultTheme } from '@chakra-ui/vue'
import chakraIcons from '@chakra-ui/vue/src/lib/internal-icons'
import Breadstick from 'breadstick'

/**
 * Basic theme provider component to provide Chakra theme to breadstick.
 * Not needed in your app if you don't use Chakra UI
 */
const ThemeProvider = {
  provide() {
    return {
      $chakraTheme: () => defaultTheme,
      $chakraColorMode: () => 'light',
      $chakraIcons: chakraIcons
    }
  },
  render() {
    return this.$slots.default
  }
}

// 1. Create a new breadstick instance
export const breadstick = new Breadstick()

// 2. Import your custom Notification components.
//    You can use them to render your notifications message.
import VercelNotification from '@/components/VercelNotification.vue'
import VueNotification from '@/components/VueNotification.vue'
import EqualUiNotification from '@/components/EqualUINotification.vue'

const notificationTypeMap = {
  'vercel': VercelNotification,
  'vue-notification': VueNotification,
  'equal-ui': EqualUiNotification,
}

export default (_context, inject) => {

  // 3. Next let's create a function to handle the rendering
  //    of your notification. You can pass the `notify`
  //    arguments as props to your `MyNotification` component.
  const notify = (message, options) => {
    if (!message || message === '') {
      console.warn('[notification]: The notification expects a message before rendering the Toast component.')
      return
    }

    const NotificationComponent = options
      ? notificationTypeMap[options.notification] || VercelNotification
      : VercelNotification

    if (!options) {

      //  Breadstick exports a `notify` method that
      //  you can use to invoke a notification
      return breadstick.notify(({ h, onClose }) => {
        return h(ThemeProvider, [h(NotificationComponent, {
          nativeOn: {
            click: onClose
          }
        }, [message])])
      })
    }

    return breadstick.notify(({ h, onClose }) => {
      return h(ThemeProvider, [h(NotificationComponent, {
        ... options.type && { class: [options.type] },
        nativeOn: {
          click: onClose
        }
      }, [
        options.title && h('span', {
          slot: 'title',
        }, options.title),
        message
      ])])
    }, {
      ...options.position && { position: options.position },
      ...options.duration && { duration: options.duration }
    })
  }

  inject('notify', notify)
  inject('breadstick', breadstick)
}
