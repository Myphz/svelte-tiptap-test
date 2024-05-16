<svelte:options accessors={true} />

<script lang="ts">
  import Input from "./Input.svelte";
  import Dialog from "./Dialog.svelte";
  import { dialogControls } from "$lib/utils/dialog";
  import Button from "./Button.svelte";
  import { createEventDispatcher } from "svelte";

  let dialog: Dialog | null = null;
  export let controls = dialogControls(dialog);
  $: controls = dialogControls(dialog);

  const dispatch = createEventDispatcher<{ "new-link": { link: string } }>();

  function onSubmit(e: SubmitEvent) {
    e.preventDefault();

    const { link } = Object.fromEntries(new FormData(e.currentTarget as HTMLFormElement));
    dispatch("new-link", { link } as { link: string });
  }
</script>

<Dialog bind:this={dialog} title="Image Source" class="h-fit w-[40vw]">
  <form class="flex flex-col gap-8 px-8 py-4" on:submit={onSubmit}>
    <Input
      type="url"
      name="link"
      label="Image Link"
      placeholder="https://google.com"
      class="w-full rounded-none border-x-0 border-t-0 px-0 py-0 text-xs"
    />

    <Button as="button" variant="primary" class="w-fit text-background" submit>Link Image</Button>
  </form>
</Dialog>
