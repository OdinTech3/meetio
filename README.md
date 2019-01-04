<p align="center"><img src="public/meetio.png" width="480"/></p>

**Meetio** is the most powerful theme for Sublime Text 3 with Lighter, Darker & Palenight variations only for 3179+ version.

## Installation

**Package Control:**
 - Open `Command Palette` using menu item `Tools → Command Palette` or `(Ctrl or ⌘) + ⇧ + P`
 - Choose `Package Control: Install Package`
 - Type `Meetio` and press `Enter`
 - Restart Sublime Text
    - **macOS** : menu item `Sublime Text → Quit Sublime Text`
    - **Windows**: menu item `File → Exit`
    - **Linux** : menu item `File → Exit`

4. Ready to use 🎉

**Manually:**
 - Download latest release and unzip. it into your Packages folder
 - Go to `Sublime Text → Preferences → Browse Packages`
 - Move folder to inside
 - Start using...

To activate this theme, adding these lines to your user settings (**Preferences > Settings - User**):

```json
  "color_scheme": "Packages/Meetio/schemes/Meetio-Lighter.tmTheme",
  "theme": "Meetio.sublime-theme",
```

### Schemes variations

```json
  "color_scheme": "Packages/Meetio/schemes/Meetio-Lighter.tmTheme",
  "color_scheme": "Packages/Meetio/schemes/Meetio-Darker.tmTheme",
  "color_scheme": "Packages/Meetio/schemes/Meetio-Palenight.tmTheme"
```

### Theme options

```json
  // Tabs
  "meetio_tabs_autowidth"     : true, // Enable auto width for tabs
  "meetio_tabs_large"         : true, // Set large tabs
  "meetio_tabs_selected_bold" : true, // Make the tab labels bolder only in selected

  // Sidebar
  "meetio_sidebar_font_big"   : true, // Set large font in sidebar
  "meetio_sidebar_large"      : true, // Set large sidebar
  "meetio_arrow_folders"      : true, // Replace folder icons with arrows

  // Panels
  "meetio_titlebar"           : true, // Enable title bar (OS X 10.10+)
  "meetio_input_search_icon"  : true  // Show icon search in inputs
```

### Recommended settings for a better experience:

```json
  "always_show_minimap_viewport" : true,
  "bold_folder_labels"           : true,
  "line_padding_bottom"          : 7,
  "line_padding_top"             : 7,
  "overlay_scroll_bars"          : "enabled",
  "highlight_modified_tabs"      : "enabled"
```
