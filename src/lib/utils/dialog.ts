import type Dialog from "$lib/Dialog.svelte";

export function dialogControls(dialog: Dialog | null) {
  return {
    openDialog: () => dialog?.openDialog(),
    closeDialog: () => dialog?.closeDialog()
  };
}
