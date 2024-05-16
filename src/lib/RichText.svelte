<script lang="ts">
  import { onMount, onDestroy } from "svelte";

  import { Editor } from "@tiptap/core";
  import StarterKit from "@tiptap/starter-kit";
  import UnderlineExtension from "@tiptap/extension-underline";
  import ImageExtension from "@tiptap/extension-image";
  import PlaceholderExtension from "@tiptap/extension-placeholder";
  import Link from "@tiptap/extension-link";

  import { Icon } from "@steeze-ui/svelte-icon";
  import {
    Bold,
    H1,
    H2,
    H3,
    H4,
    Italic,
    List,
    ListNumbers,
    PhotoPlus,
    Send,
    Strikethrough,
    Underline,
    Link as LinkIcon
  } from "@steeze-ui/tabler-icons";

  import ImageDialog from "./ImageDialog.svelte";
  import LinkDialog from "./LinkDialog.svelte";

  import Button from "./Button.svelte";

  export let loading = false;

  let element: HTMLDivElement;
  let editor: Editor;

  let imageDialog: ImageDialog;
  let linkDialog: LinkDialog;

  onMount(() => {
    editor = new Editor({
      element,
      extensions: [
        StarterKit,
        UnderlineExtension,
        ImageExtension,
        PlaceholderExtension.configure({
          placeholder: "Placeholder!"
        }),
        Link
      ],
      editorProps: {
        attributes: {
          class: "prose prose-xl m-5 focus:outline-none"
        }
      },

      onTransaction: () => {
        // force re-render so `editor.isActive` works as expected
        editor = editor;
      }
    });
  });

  onDestroy(() => {
    if (editor) {
      editor.destroy();
    }
  });

  function addImage(e: CustomEvent<{ link: string }>) {
    const { link } = e.detail;
    if (link)
      editor.commands.setImage({
        src: link
      });

    imageDialog.controls?.closeDialog();
  }

  function addLink(e: CustomEvent<{ link: string }>) {
    const { link } = e.detail;
    if (link) editor.commands.setLink({ href: link, target: "_blank" });
    else {
      editor.commands.unsetLink();
    }

    linkDialog.controls?.closeDialog();
  }

  export const renderToHTML = () => editor.getHTML();
</script>

{#if editor}
  <nav
    class="sticky top-0 z-10 flex items-center justify-between bg-background-secondary px-8 pb-4"
  >
    <div
      class="border-px flex w-fit items-center gap-2 rounded-3xl border border-divider px-4 py-2"
    >
      <button
        type="button"
        on:click={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
      >
        <Icon src={H1} size="1em" />
      </button>
      <button
        type="button"
        on:click={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
      >
        <Icon src={H2} size="1em" />
      </button>
      <button
        type="button"
        on:click={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
      >
        <Icon src={H3} size="1em" />
      </button>
      <button
        type="button"
        on:click={() => editor.chain().focus().toggleHeading({ level: 4 }).run()}
      >
        <Icon src={H4} size="1em" />
      </button>
      <div class="h-[1em] w-px bg-divider"></div>

      <button type="button" on:click={() => editor.chain().focus().toggleBold().run()}>
        <Icon src={Bold} size="1em" />
      </button>
      <button type="button" on:click={() => editor.chain().focus().toggleItalic().run()}>
        <Icon src={Italic} size="1em" />
      </button>
      <button type="button" on:click={() => editor.chain().focus().toggleUnderline().run()}>
        <Icon src={Underline} size="1em" />
      </button>
      <button type="button" on:click={() => editor.chain().focus().toggleStrike().run()}>
        <Icon src={Strikethrough} size="1em" />
      </button>

      <div class="h-[1em] w-px bg-divider"></div>

      <button type="button" on:click={() => editor.chain().focus().toggleBulletList().run()}>
        <Icon src={List} size="1em" />
      </button>
      <button type="button" on:click={() => editor.chain().focus().toggleOrderedList().run()}>
        <Icon src={ListNumbers} size="1em" />
      </button>

      <div class="h-[1em] w-px bg-divider"></div>
      <button type="button" on:click={linkDialog.controls?.openDialog}>
        <Icon src={LinkIcon} size="1em" />
      </button>

      <button type="button" on:click={imageDialog.controls?.openDialog}>
        <Icon src={PhotoPlus} size="1em" />
      </button>
    </div>

    <div>
      <Button as="button" variant="primary" class="flex items-center gap-4" submit {loading}>
        <Icon src={Send} size="1em" />
        <span>Send</span>
      </Button>
    </div>
  </nav>
{/if}

<div bind:this={element} />

<ImageDialog bind:this={imageDialog} on:new-link={addImage} />
<LinkDialog bind:this={linkDialog} on:new-link={addLink} />
