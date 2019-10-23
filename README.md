<p align="center"><img src="https://rawgit.com/mauricius/drag-resize-forvue/v1/docs/resources/logo.png" alt="logo"></p>
<h1 align="center">DragResizeForvue 2</h1>

[![Latest Version on NPM](https://img.shields.io/npm/v/drag-resize-forvue.svg?style=flat-square)](https://npmjs.com/package/drag-resize-forvue)
[![Software License](https://img.shields.io/badge/license-MIT-brightgreen.svg?style=flat-square)](LICENSE.md)
[![npm](https://img.shields.io/npm/dt/drag-resize-forvue.svg?style=flat-square)](https://www.npmjs.com/package/drag-resize-forvue)

> Vue2 Component for draggable and resizable elements.

If you are looking for the version 1 of the component, it is available on the [v1 branch](https://github.com/mauricius/drag-resize-forvue/tree/v1).

## Table of Contents

* [Features](#features)
* [Live Playground](#live-playground)
* [Install and basic usage](#install-and-basic-usage)
  * [Props](#props)
  * [Events](#events)
  * [Styling](#styling)
* [Contributing](#contributing)
* [License](#license)

### Features

* No dependencies
* Use draggable, resizable or both
* Define handles for resizing
* Restrict size and movement to parent element or custom selector
* Snap element to custom grid
* Restrict drag to vertical or horizontal axis
* Maintain aspect ratio
* Touch enabled
* Use your own classes
* Provide your own markup for handles

### Live Playground

For examples of the component go to the [live playground](https://mauricius.github.io/drag-resize-forvue/)

Alternatively you can run the playground on your own computer:

* Clone this repository
* `npm install`
* `npm run storybook`
* Visit [http://localhost:9001/](http://localhost:9001/)

---

## Install and basic usage

```bash
$ npm install --save drag-resize-forvue
```


Register the component

```js
import Vue from 'vue'
import DragResizeForvue from 'drag-resize-forvue'

// optionally import default styles
import 'drag-resize-forvue/dist/DragResizeForvue.css'

Vue.component('drag-resize-forvue', DragResizeForvue)
```

You may now use the component in your markup

```vue
<template>
  <div style="height: 500px; width: 500px; border: 1px solid red; position: relative;">
    <drag-resize-forvue :w="100" :h="100" @dragging="onDrag" @resizing="onResize" :parent="true">
      <p>Hello! I'm a flexible component. You can drag me around and you can resize me.<br>
      X: {{ x }} / Y: {{ y }} - Width: {{ width }} / Height: {{ height }}</p>
    </drag-resize-forvue>
  </div>
</template>

<script>
import DragResizeForvue from 'drag-resize-forvue'

export default {
  data: function () {
    return {
      width: 0,
      height: 0,
      x: 0,
      y: 0
    }
  },
  methods: {
    onResize: function (x, y, width, height) {
      this.x = x
      this.y = y
      this.width = width
      this.height = height
    },
    onDrag: function (x, y) {
      this.x = x
      this.y = y
    }
  }
}
</script>
```

### Props

#### className
Type: `String`<br>
Required: `false`<br>
Default: `vdr`

Used to set the custom `class` of a draggable-resizable component.

```html
<drag-resize-forvue class-name="my-class">
```

#### classNameDraggable
Type: `String`<br>
Required: `false`<br>
Default: `draggable`

Used to set the custom `class` of a draggable-resizable component when `draggable` is enable.

```html
<drag-resize-forvue class-name-draggable="my-draggable-class">
```

#### classNameResizable
Type: `String`<br>
Required: `false`<br>
Default: `resizable`

Used to set the custom `class` of a draggable-resizable component when `resizable` is enable.

```html
<drag-resize-forvue class-name-resizable="my-resizable-class">
```

#### classNameDragging
Type: `String`<br>
Required: `false`<br>
Default: `dragging`

Used to set the custom `class` of a draggable-resizable component when is dragging.

```html
<drag-resize-forvue class-name-dragging="my-dragging-class">
```

#### classNameResizing
Type: `String`<br>
Required: `false`<br>
Default: `resizing`

Used to set the custom `class` of a draggable-resizable component when is resizing.

```html
<drag-resize-forvue class-name-resizing="my-resizing-class">
```

#### classNameActive
Type: `String`<br>
Required: `false`<br>
Default: `active`

Used to set the custom `class` of a draggable-resizable component when is active.

```html
<drag-resize-forvue class-name-active="my-active-class">
```

#### classNameHandle
Type: `String`<br>
Required: `false`<br>
Default: `handle`

Used to set the custom common `class` of each handle element. This way you can style each handle individually using the selector `<your class>-<handle code>`, where `handle code` identifies one of the handles provided by the `handle` prop.

So for example, this component:

```html
<drag-resize-forvue class-name-handle="my-handle-class"></drag-resize-forvue>
```

renders the following:

```html
<div ...>
  <div class="my-handle-class my-handle-class-tl"></div>
  <div class="my-handle-class my-handle-class-tm"></div>
  <div class="my-handle-class my-handle-class-tr"></div>
  [...]
</div>
```

#### disableUserSelect
Type: `Boolean`<br>
Required: `false`<br>
Default: `true`

By default, the component adds the style declaration `'user-select:none'` to itself to prevent text selection during drag. You can disable this behaviour by setting this prop to `false`.

```html
<drag-resize-forvue :disable-user-select="false">
```

#### enableNativeDrag
Type: `Boolean`<br>
Required: `false`<br>
Default: `false`

By default, the browser's native drag and drop funcionality (usually used for images and some other elements) is disabled, as it may conflict with the one provided by the component. If you need, for whatever reason, to have this functionality back you can set this prop to `true`.

```html
<drag-resize-forvue :enable-native-drag="true">
```

#### active
Type: `Boolean`<br>
Required: `false`<br>
Default: `false`

Determines if the component should be active or not. The prop reacts to changes and also can be used with the `sync`[modifier](https://vuejs.org/v2/guide/components.html#sync-Modifier) to keep the state in sync with the parent. You can use along with the `preventDeactivation` prop in order to fully control the active behavior from outside the component.

```html
<drag-resize-forvue :active="true">
```

#### preventDeactivation
Type: `Boolean`<br>
Required: `false`<br>
Default: `false`

Determines if the component should be deactivated when the user clicks/taps outside it.

```html
<drag-resize-forvue :prevent-deactivation="true">
```

#### draggable
Type: `Boolean`<br>
Required: `false`<br>
Default: `true`

Defines it the component should be draggable or not.

```html
<drag-resize-forvue :draggable="false">
```

#### resizable
Type: `Boolean`<br>
Required: `false`<br>
Default: `true`

Defines it the component should be resizable or not.

```html
<drag-resize-forvue :resizable="false">
```

#### w
Type: `Number`<br>
Required: `false`<br>
Default: `200`

Define the initial width of the element.

```html
<drag-resize-forvue :w="200">
```

#### h
Type: `Number`<br>
Required: `false`<br>
Default: `200`

Define the initial height of the element.

```html
<drag-resize-forvue :h="200">
```

#### minWidth
Type: `Number`<br>
Required: `false`<br>
Default: `50`

Define the minimal width of the element.

```html
<drag-resize-forvue :min-width="50">
```

#### minHeight
Type: `Number`<br>
Required: `false`<br>
Default: `50`

Define the minimal height of the element.

```html
<drag-resize-forvue :min-height="50">
```

#### maxWidth
Type: `Number`<br>
Required: `false`<br>
Default: `null`

Define the maximum width of the element.

```html
<drag-resize-forvue :max-width="400">
```

#### maxHeight
Type: `Number`<br>
Required: `false`<br>
Default: `null`

Define the maximum height of the element.

```html
<drag-resize-forvue :max-height="50">
```

#### x
Type: `Number`<br>
Required: `false`<br>
Default: `0`

Define the initial x position of the element.

```html
<drag-resize-forvue :x="0">
```

#### y
Type: `Number`<br>
Required: `false`<br>
Default: `0`

Define the initial y position of the element.

```html
<drag-resize-forvue :y="0">
```

#### z
Type: `Number|String`<br>
Required: `false`<br>
Default: `auto`

Define the zIndex of the element.

```html
<drag-resize-forvue :z="999">
```

#### handles
Type: `Array`<br>
Required: `false`<br>
Default: `['tl', 'tm', 'tr', 'mr', 'br', 'bm', 'bl', 'ml']`

Define the array of handles to restrict the element resizing:
* `tl` - Top left
* `tm` - Top middle
* `tr` - Top right
* `mr` - Middle right
* `br` - Bottom right
* `bm` - Bottom middle
* `bl` - Bottom left
* `ml` - Middle left

```html
<drag-resize-forvue :handles="['tm','bm','ml','mr']">
```

#### axis
Type: `String`<br>
Required: `false`<br>
Default: `both`

Define the axis on which the element is draggable. Available values are `x`, `y` or `both`.

```html
<drag-resize-forvue axis="x">
```

#### grid
Type: `Array`<br>
Required: `false`<br>
Default: `[1,1]`

Define the grid on which the element is snapped.

```html
<drag-resize-forvue :grid="[1,1]">
```

#### parent
Type: `Boolean | String`<br>
Required: `false`<br>
Default: `false`

Restricts the movement and the dimensions of the component to the parent (if `true` is provided), or to an element identified by a valid CSS selector.

```html
<drag-resize-forvue :parent="true">
```

```html
<drag-resize-forvue :parent=".selector">
```

#### dragHandle
Type: `String`<br>
Required: `false`

Defines the selector that should be used to drag the component.

```html
<drag-resize-forvue drag-handle=".drag">
```

#### dragCancel
Type: `String`<br>
Required: `false`

Defines a selector that should be used to prevent drag initialization.

```html
<drag-resize-forvue drag-cancel=".drag">
```

#### lockAspectRatio
Type: `Boolean`<br>
Required: `false`<br>
Default: `false`

The `lockAspectRatio` property is used to lock aspect ratio. This property doesn't play well with `grid`, so make sure to use only one at a time.

```html
<drag-resize-forvue :lock-aspect-ratio="true">
```

#### onDragStart
Type: `Function`<br>
Required: `false`<br>
Default: `null`

Called when dragging starts (element is clicked or touched). If `false` is returned by any handler, the action will cancel. You can use this function to prevent bubbling of events.

```html
<drag-resize-forvue :onDragStart="onDragStartCallback">
```

```js
function onDragStartCallback(ev){
   ...
   // return false; — for cancel
}
```


#### onResizeStart
Type: `Function`<br>
Required: `false`<br>
Default: `null`

Called when resizing starts (handle is clicked or touched). If `false` is returned by any handler, the action will cancel.

```html
<drag-resize-forvue :onResizeStart="onResizeStartCallback">
```

```js

function onResizeStartCallback(handle, ev){
   ...
   // return false; — for cancel
}
```
---

### Events

#### activated

Parameters: `-`

Called whenever the component gets clicked, in order to show handles.

```html
<drag-resize-forvue @activated="onActivated">
```

#### deactivated

Parameters: `-`

Called whenever the user clicks anywhere outside the component, in order to deactivate it.

```html
<drag-resize-forvue @deactivated="onDeactivated">
```

#### resizing

Parameters:
* `left` the X position of the element
* `top` the Y position of the element
* `width` the width of the element
* `height` the height of the element

Called whenever the component gets resized.

```html
<drag-resize-forvue @resizing="onResizing">
```

#### resizestop

Parameters:
* `left` the X position of the element
* `top` the Y position of the element
* `width` the width of the element
* `height` the height of the element

Called whenever the component stops getting resized.

```html
<drag-resize-forvue @resizestop="onResizstop">
```

#### dragging

Parameters:
* `left` the X position of the element
* `top` the Y position of the element

Called whenever the component gets dragged.

```html
<drag-resize-forvue @dragging="onDragging">
```

#### dragstop

Parameters:
* `left` the X position of the element
* `top` the Y position of the element

Called whenever the component stops getting dragged.

```html
<drag-resize-forvue @dragstop="onDragstop">
```

---

### Styling

You can style the component using appropriate class names passed as props to the component. Moreover you can replace the default styles for the handles, provided in the source file `drag-resize-forvue.css`, but you should take care to define position and size for them. The default classes for handles are `handle` and `handle-tl`, `handle-br` and so on.

The component also provides [named slots](https://vuejs.org/v2/guide/components-slots.html#Named-Slots) for each handle, so you can use your markup inside each one.

## Thanks

Thanks to @kirillmurashov for his work on [vue-drag-resize](https://github.com/kirillmurashov/vue-drag-resize) component.

## Security

If you discover any security related issues, please email maurizio.bonani@gmail.com instead of using the issue tracker.

## Contributing

Any contribution to the code or any part of the documentation and any idea and/or suggestion are very welcome.

``` bash
# serve with hot reload at localhost:8080
npm run serve

# distribution build
npm run build

# build the storybook docs into gh-pages
npm run gh-pages:build

# run unit tests
npm run unit

# run storybook at localhost:9001
npm run storybook
```

## License

The MIT License (MIT). Please see [License File](LICENSE) for more information.
