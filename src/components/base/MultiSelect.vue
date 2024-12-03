<script setup lang="ts">
import { Icon } from '@iconify/vue'
import MultiSelect from "primevue/multiselect"
import { computed, ref } from 'vue'
import { useI18n } from "vue-i18n"
import type { DropdownOption } from '@/types'

const { t } = useI18n()

const props = defineProps<{
  filter?: boolean
  allSelectedLabel?: string
  options: DropdownOption[]
}>()

const allItemsSelected = ref(true)

const dropdownLabel = computed(() => {
  if (allItemsSelected.value) {
    return props.allSelectedLabel
  }
  return undefined
})
</script>
<template>
  <MultiSelect
    @change="allItemsSelected = $event.value.length === options.length"
    :filter="filter?? false"
    :selected-items-label="dropdownLabel"
    :options="options"
    option-label="label"
    :pt="{
    filterContainer: {
      class: { 'ml-20': props.filter }
    }
  }">
    <template #headercheckboxicon>
      <Icon v-show="allItemsSelected" icon="prime:check" class="p-checkbox-icon h-5 w-5" data-pc-section="headercheckboxicon"/>
      <span :class="['ml-[7.5rem] absolute w-20 z-[1001]', allItemsSelected ? 'text-highlight' : 'text-black']">{{ t('select_all') }}</span>
    </template>
    <template v-for="(_, slot) in $slots" v-slot:[slot]="slotData">
      <slot :name="slot" v-bind="slotData"></slot>
    </template>
  </MultiSelect>
</template>

<style scoped lang="scss">
.text-highlight {
  color: var(--highlight-text-color);
}
</style>