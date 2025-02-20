import { WelcomeMessage } from '#components'
import { mountSuspended } from '@nuxt/test-utils/runtime'
import { describe, expect, it } from 'vitest'

describe('welcomeMessage', () => {
  it('renders the welcome message correctly', async () => {
    const wrapper = await mountSuspended(WelcomeMessage)
    expect(wrapper.find('h1').text()).toBe('Welcome to the BGP Game!')
    expect(wrapper.find('p').text()).toBe('Nuxt project is running.')
  })
})
