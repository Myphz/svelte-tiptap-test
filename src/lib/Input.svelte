<script lang="ts">
  import { twMerge } from "tailwind-merge";

  export let label: string;
  export let type: string;
  export let placeholder = "";
  export let name = "";
  export let onInput = (_: string) => {};
  export let required = true;

  let className = "";
  export { className as class };
</script>

<label class="flex w-full flex-col">
  <span class="text-xs">{label}</span>
  <input
    {name}
    {type}
    on:input={(e) => onInput(e.currentTarget.value.toLowerCase())}
    {placeholder}
    {required}
    class={twMerge("rounded-xl border border-text-secondary p-2 text-small", className)}
  />
  <slot />
</label>
