<script lang="ts">
  let className = "";
  export { className as class };
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  xmlns:xlink="http://www.w3.org/1999/xlink"
  viewBox="0 0 100 100"
  preserveAspectRatio="xMidYMid"
  class={className}
>
  <circle
    cx="50"
    cy="50"
    r="32"
    stroke-width="8"
    stroke="currentColor"
    stroke-dasharray="50.26548245743669 50.26548245743669"
    fill="none"
    stroke-linecap="round"
  >
    <animateTransform
      attributeName="transform"
      type="rotate"
      repeatCount="indefinite"
      dur="1s"
      keyTimes="0;1"
      values="0 50 50;360 50 50"
    />
  </circle>
</svg>
