// See the Electron documentation for details on how to use preload scripts:
// https://www.electronjs.org/docs/latest/tutorial/process-model#preload-scripts

const { contextBridge } = require('electron')
const fs = require('fs')

var keyboard_layouts = JSON.parse(fs.readFileSync('./assets/keyboard-layouts.json'))

contextBridge.exposeInMainWorld('keyboard_layouts', keyboard_layouts)