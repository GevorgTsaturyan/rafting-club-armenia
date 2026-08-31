<script setup lang="ts">
/** Visible breadcrumb trail. Structured-data BreadcrumbList is emitted
 *  separately by each page via useStructuredData so markup stays clean. */
defineProps<{ items: { label: string; to?: string }[] }>()
</script>

<template>
  <nav class="crumbs" aria-label="Breadcrumb">
    <ol>
      <li v-for="(item, i) in items" :key="i" class="crumbs__item">
        <NuxtLink v-if="item.to && i < items.length - 1" :to="item.to" class="crumbs__link">
          {{ item.label }}
        </NuxtLink>
        <span v-else aria-current="page" class="crumbs__current">{{ item.label }}</span>
        <UiAppIcon v-if="i < items.length - 1" name="chevron-right" :size="15" class="crumbs__sep" />
      </li>
    </ol>
  </nav>
</template>

<style scoped>
.crumbs ol { display: flex; flex-wrap: wrap; align-items: center; gap: 0.35rem; }
.crumbs__item { display: inline-flex; align-items: center; gap: 0.35rem; }
.crumbs__link { color: rgba(255, 255, 255, 0.8); font-size: 0.85rem; font-weight: 500; }
.crumbs__link:hover { color: #fff; }
.crumbs__current { color: #fff; font-size: 0.85rem; font-weight: 600; }
.crumbs__sep { color: rgba(255, 255, 255, 0.5); }
</style>
