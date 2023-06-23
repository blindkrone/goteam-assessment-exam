<template>
  <div class="modal">
    <slot />
  </div>
</template>

<script setup>
  import { useModalToggle } from '~/store/modal'
  const modalToggle = useModalToggle()
</script>