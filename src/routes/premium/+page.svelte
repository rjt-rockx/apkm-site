<script lang="ts">
	import { twMerge } from 'tailwind-merge'
	import ArrowRight from '~icons/mdi/arrow-right'
	import AdvertisementsOff from '~icons/mdi/advertisements-off'
	import CursorDefaultClick from '~icons/mdi/cursor-default-click'
	import Handshake from '~icons/mdi/handshake'
	import Sunglasses from '~icons/mdi/sunglasses'
	import Android from '~icons/simple-icons/android'
	import Download from '~icons/mdi/download'
	import Upload from '~icons/mdi/upload'
	import Harddisk from '~icons/mdi/harddisk'
	import SwapHorizontal from '~icons/mdi/swap-horizontal'
	import Save from '~icons/mdi/content-save'
	import PackageDown from '~icons/mdi/package-down'
	import MicroSD from '~icons/mdi/micro-sd'
	import Database from '~icons/mdi/database'
	import Lock from '~icons/mdi/lock'

	const plans = [
		{
			id: 'yearly',
			price: 30,
			duration: 'year',
			description: 'billed every year'
		},
		{
			id: 'quarterly',
			price: 10,
			duration: 'quarter',
			description: 'billed every 3 months'
		}
	] as const

	const perks = [
		{
			icon: AdvertisementsOff,
			title: 'Ad-free experience',
			description:
				'Use APKMirror without any ads, ensuring a clean, distraction-free experience as you download your APKs.',
			image: 'https://downloadr2.apkmirror.com/wp-content/uploads/2023/02/xJ8lqP11-1024x764.png',
			alignment: 'left'
		},
		{
			icon: CursorDefaultClick,
			title: 'Save clicks',
			description: 'Skip intermediary pages and download APKs quicker than ever before.'
		},
		{
			icon: Handshake,
			title: 'Support APKMirror',
			description: 'Help us keep the lights on as we transfer petabytes of APKs over the internet.'
		},
		{
			icon: Sunglasses,
			title: 'Dark theme',
			description: 'Explore APKMirror in the dark for a more comfortable browsing experience.',
			image: 'https://downloadr2.apkmirror.com/wp-content/uploads/2023/02/wWec78O1-1024x757.png',
			alignment: 'right'
		}
	]

	const stats = [
		{
			icon: Android,
			title: 'Total APKs hosted',
			value: '2,147,483,647'
		},
		{
			icon: Download,
			title: 'Downloads per day',
			value: '16,384'
		},
		{
			icon: Upload,
			title: 'APKs uploaded each month',
			value: '4096'
		},
		{
			icon: Harddisk,
			title: 'Storage used',
			value: '204.8 TB'
		},
		{
			icon: SwapHorizontal,
			title: 'Monthly bandwidth',
			value: '25.6 PB'
		},
		{
			icon: Save,
			title: 'Average APK size',
			value: '81.92 MB'
		}
	]

	const features = [
		{
			icon: MicroSD,
			title: 'Support for SD cards and USB OTG devices',
			description:
				'Install APKs directly from your SD card or USB OTG device without needing to transfer them to your internal storage first.',
			wide: true
		},
		{
			icon: Database,
			title: 'OBB file support',
			description:
				'OBB data files are now included in APK bundles, ensuring that installing games and apps works as intended.',
			wide: false
		},
		{
			icon: PackageDown,
			title: 'APK Bundle support',
			description:
				'The APKMirror installer supports split apk bundles in the form of a .apkm file, automatically extracting and installing the right APKs for your device.',
			wide: false
		},
		{
			icon: Lock,
			title: 'Independent cryptographic signature verification',
			description:
				'APKMirror verifies cryptographic signatures against Google Play Store independently, ensuring the safety and integrity of the APKs you download.',
			wide: true
		}
	]

	let currentPlan: 'quarterly' | 'yearly' = 'yearly'
</script>

<article class="flex h-fit w-full flex-col gap-4 p-4">
	<section class="flex flex-col items-center gap-4 rounded bg-orange-500 p-8 text-white shadow">
		<h1 class="text-3xl font-black">APKMirror Premium</h1>
		<p class="font-sem text-balance text-center text-base text-opacity-80">
			Support APKMirror, get an ad-free experience and save clicks with our premium plan.
			<br />
			Pay yearly for 30% off. Cancel anytime.
		</p>
		<div class="flex flex-row items-center gap-4">
			<button
				class="flex flex-row items-center gap-2 rounded-md bg-white px-4 py-2 font-semibold text-gray-900 active:translate-y-px">
				<span>Subscribe for ${plans.find((plan) => plan.id === currentPlan)?.price}</span>
				<ArrowRight class="size-5" />
			</button>
			<div class="flex flex-row items-center gap-0 rounded bg-orange-400 p-1">
				{#each plans as plan}
					<button
						on:click={() => {
							currentPlan = plan.id
						}}
						class={twMerge(
							'rounded px-3 py-1 text-white hover:bg-orange-50/25 active:bg-orange-50/75',
							currentPlan === plan.id && 'bg-white text-gray-900 hover:bg-white'
						)}>
						{plan.id}
					</button>
				{/each}
			</div>
		</div>
	</section>
	<div class="mt-2 flex w-full flex-row items-center justify-center px-4">
		<h2 class="font-bold uppercase tracking-wider text-gray-500">Premium Perks</h2>
	</div>
	<section class="grid auto-rows-fr grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
		{#each perks as perk}
			<div
				class={twMerge(
					'grid grid-cols-1 items-start justify-between gap-6 rounded bg-white p-6 shadow',
					perk.image && 'col-span-2 grid-cols-2'
				)}>
				{#if perk.image}
					<img
						src={perk.image}
						alt={perk.title}
						class={twMerge(
							'aspect-video w-full rounded',
							perk.alignment === 'right' && 'order-1'
						)} />
				{/if}
				<div class="flex flex-col items-start gap-4">
					{#if perk.icon}
						<div class="grid size-12 place-items-center rounded-full bg-orange-100 text-orange-600">
							<svelte:component this={perk.icon} class="size-6 text-orange-500" />
						</div>
					{/if}
					<div class="flex flex-col items-start gap-0">
						<h2 class="font-semibold text-gray-900">{perk.title}</h2>
						<p class="text-gray-900 text-opacity-80">{perk.description}</p>
					</div>
				</div>
			</div>
		{/each}
	</section>
	<div class="mt-2 flex w-full flex-row items-center justify-center px-4">
		<h2 class="font-bold uppercase tracking-wider text-gray-500">Statistics</h2>
	</div>
	<section class="grid auto-rows-fr grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
		{#each stats as stat}
			<div class="flex flex-col items-center gap-2 rounded bg-white p-6 shadow">
				<span class="inline-flex gap-2 text-3xl font-bold tracking-wide text-gray-900">
					<span>
						{stat.value}
					</span>
				</span>
				<p class="inline-flex items-center gap-2 text-gray-900 text-opacity-80">
					<svelte:component this={stat.icon} class="size-6 text-orange-500" />
					<span>
						{stat.title}
					</span>
				</p>
			</div>
		{/each}
	</section>
	<div class="mt-2 flex w-full flex-row items-center justify-center px-4">
		<h2 class="font-bold uppercase tracking-wider text-gray-500">
			Your contributions made these possible
		</h2>
	</div>
	<section class="grid auto-rows-fr grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
		{#each features as feature}
			<div
				class={twMerge(
					'flex flex-col items-center gap-2 rounded bg-white p-6 shadow',
					feature.wide && 'col-span-2'
				)}>
				<div class="flex flex-col items-start gap-4">
					{#if feature.icon}
						<div class="grid size-12 place-items-center rounded-full bg-orange-100 text-orange-600">
							<svelte:component this={feature.icon} class="size-6 text-orange-500" />
						</div>
					{/if}
					<div class="flex flex-col items-start gap-0">
						<h2 class="font-semibold text-gray-900">{feature.title}</h2>
						<p class="text-gray-900 text-opacity-80">{feature.description}</p>
					</div>
				</div>
			</div>
		{/each}
	</section>
</article>
