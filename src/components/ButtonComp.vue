<template>
  <Button :class="className">
    <span>{{ title }}</span>
  </Button>
</template>

<script setup>
  const props = defineProps(['className', 'title'])
</script>