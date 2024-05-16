<script lang="ts">
  import { twMerge } from "tailwind-merge";
  import Spinner from "$lib/Spinner.svelte";

  export let as: "button" | "a" = "button";
  export let href = "";
  export let variant: "primary" | "secondary";
  export let submit = false;
  export let loading = false;
  let className = "";

  const VARIANTS: Record<typeof variant, string> = {
    primary: "bg-primary text-background",
    secondary: "border border-primary text-primary"
  };

  export { className as class };
</script>

<!-- svelte-ignore a11y-no-static-element-interactions -->
<svelte:element
  this={as}
  {href}
  on:click
  {...submit && { type: "submit" }}
  disabled={loading}
  class={twMerge(
    "rounded-3xl px-6 py-2 !text-small disabled:cursor-not-allowed disabled:opacity-50",
    VARIANTS[variant],
    className
  )}
>
  <slot />
  {#if loading}
    <Spinner class="aspect-square h-[1.5em]" />
  {/if}
</svelte:element>
