<template>
  <div id="app">
    <div style="height: 500px; width: 500px; border: 1px solid red; position: relative;">
      <drag-resize-forvue :w="400" :h="400" :parent="true" :debug="false" :min-width="200" :min-height="200">
        <p>drag-resize-forvue</p>
      </drag-resize-forvue>
    </div>
  </div>
</template>

<script>
import DragResizeForvue from './components/drag-resize-forvue'
import './components/drag-resize-forvue.css'

export default {
  name: 'app',
  components: {
    DragResizeForvue
  }
}
</script>

<style>
  .vdr {
    border: 1px dashed black;
  }
</style>
