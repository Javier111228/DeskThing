import { create } from 'zustand'
import { Settings } from '@shared/types'

interface SettingsStoreState {
  settings: Settings
  getSettings: () => Promise<Settings>
  requestSettings: () => Promise<Settings>
  getSetting: (key: keyof Settings) => Settings[keyof Settings]
  saveSettings: (settings: Settings) => void
  setSettings: (settings: Settings) => void
}

const useSettingsStore = create<SettingsStoreState>((set, get) => ({
  settings: {
    version: '0.0.0',
    callbackPort: -1,
    devicePort: -1,
    address: '-.-.-.-',
    autoStart: true,
    minimizeApp: true,
    globalADB: true,
    autoDetectADB: true,
    localIp: ['-.-.-.-'],
    appRepos: [
      'https://github.com/ItsRiprod/deskthing-apps',
      'https://github.com/ItsRiprod/DeskThing'
    ],
    clientRepos: [
      'https://github.com/ItsRiprod/deskthing-client',
      'https://github.com/ItsRiprod/DeskThing'
    ]
  },

  getSettings: async (): Promise<Settings> => {
    const state = get()
    if (state.settings.callbackPort === -1 || state.settings.devicePort === -1) {
      await get().requestSettings()
    }
    return state.settings
  },

  requestSettings: async (): Promise<Settings> => {
    const settings = await window.electron.getSettings()
    set(settings)
    return settings
  },

  getSetting: (key: keyof Settings): Settings[keyof Settings] => {
    return get().settings[key]
  },

  saveSettings: (settings: Settings): void => {
    set({ settings })
    console.log('Saving Settings:', settings)
    window.electron.saveSettings(settings)
  },

  setSettings: (settings: Settings): void => {
    console.log('Setting Settings:', settings)
    set({ settings })
  }
}))

export default useSettingsStore