<script lang="ts">
	import { twMerge } from 'tailwind-merge'

	let className: string = ''
	export let element: string = 'div'
	export { className as class }
</script>

<svelte:element
	this={element}
	class={twMerge('flex flex-col items-center gap-4 rounded bg-white p-6 shadow', className)}>
	<slot></slot>
</svelte:element>
