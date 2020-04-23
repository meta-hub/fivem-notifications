fx_version 'adamant'
games { 'gta5' }

ui_page 'src/nui/index.html'

client_scripts {
  'config.lua',
  'src/client/main.lua',
}

files {
  'src/nui/index.html',
  'src/nui/script.js',
  'src/nui/style.css'
}

export 'Notify'
export 'Reposition'