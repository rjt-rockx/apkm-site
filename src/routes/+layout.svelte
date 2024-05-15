<script>
	import '../app.css'
	import '@fontsource-variable/roboto-flex'
	import '@fontsource-variable/roboto-mono'
	import ChevronRight from '~icons/mdi/chevron-right'
</script>

<div class="relative flex h-full w-full flex-col gap-0 overflow-y-auto overflow-x-hidden">
	<header class="sticky top-0 z-20 h-fit w-full bg-orange-500">
		<nav
			class="mx-auto flex w-full max-w-screen-xl flex-row items-center justify-between gap-4 p-4">
			<a href="/" class="text-lg font-bold text-white">APKMirror</a>
			<input
				type="search"
				name="search"
				id="search"
				placeholder="Search"
				class="rounded bg-white/25 px-4 py-2 text-base text-orange-50 placeholder:text-orange-50" />
		</nav>
	</header>
	<div class="z-10 h-fit w-full bg-white shadow">
		<nav
			class="mx-auto flex w-full max-w-screen-xl flex-row items-center justify-start gap-2 p-4 text-orange-500">
			<a href="/" class="text-lg font-normal">Home</a>
			<ChevronRight class="opacity-50" />
			<a href="/premium" class="text-lg font-normal">Premium</a>
		</nav>
	</div>
	<main class="grow">
		<div class="mx-auto max-w-screen-xl">
			<slot></slot>
		</div>
	</main>
	<div id="background" inert></div>
</div>

<style>
	#background {
		position: fixed;
		width: 100%;
		height: 100%;
		overflow: hidden;
		z-index: -100;
	}

	#background::before {
		content: '';
		overflow: hidden;
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-color: theme('colors.gray.100');
		background-image: url('$lib/assets/iconshapes.svg');
		background-repeat: repeat;
		background-size: 48px;
		transform: rotate(-15deg) scale(3);
		z-index: -101;
	}

	#background::after {
		content: '';
		overflow: hidden;
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-image: linear-gradient(
			to right,
			transparent 0%,
			10%,
			theme('colors.gray.100') 50%,
			90%,
			transparent 100%
		);
		z-index: -99;
	}
</style>
