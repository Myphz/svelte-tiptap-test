<script lang="ts">
  import { Icon } from "@steeze-ui/svelte-icon";
  import { X } from "@steeze-ui/tabler-icons";
  import { twMerge } from "tailwind-merge";

  let dialog: HTMLDialogElement;
  let className = "";
  export let title: string;

  let open = false;

  export const openDialog = () => {
    open = true;
    dialog.show();
  };

  export const closeDialog = () => {
    open = false;
    dialog.classList.add("closing-dialog");

    setTimeout(() => {
      dialog.classList.remove("closing-dialog");
      dialog.close();
    }, 125);
  };
  export { className as class };
</script>

{#if open}
  <div class="fixed inset-0 z-40 bg-black bg-opacity-80"></div>
{/if}
<dialog bind:this={dialog} class="fixed inset-0 z-50 block rounded-3xl bg-background-secondary">
  <section
    class={twMerge("relative h-[80vh] w-[80vw] overflow-auto rounded-3xl text-text", className)}
  >
    <header class="sticky top-0 z-20 flex justify-between bg-background px-8 py-4">
      <span class="text-secondary">{title}</span>
      <button class="text-primary" on:click={closeDialog}><Icon src={X} size={"2rem"} /></button>
    </header>

    <slot />
  </section>
</dialog>

<style>
  dialog {
    visibility: hidden;
    opacity: 0;
    transition: all 0.125s ease-in-out;
  }
  dialog[open] {
    visibility: initial;
    opacity: 1;
  }

  :global(.closing-dialog)[open] {
    visibility: hidden;
    opacity: 0;
  }
</style>
