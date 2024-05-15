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
	import ChevronRight from '~icons/mdi/chevron-right'
	import { Accordion } from 'bits-ui'
	import { slide } from 'svelte/transition'

	import LightThemeImage from '$lib/assets/light_theme.png?enhanced'
	import DarkThemeImage from '$lib/assets/dark_theme.png?enhanced'

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
			image: LightThemeImage,
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
			image: DarkThemeImage,
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

	const questions = [
		{
			question: 'What happened to the monthly plan?',
			answer: `When we first launched APKMirror PREMIUM, we started off with a monthly and annual plan. It quickly became apparent that a lower-priced monthly plan was causing a number of issues:
Fraudsters are attracted to ways to test stolen credit cards with small $ amounts. Each credit card dispute costs us $15, no matter if we are able to win the dispute or not.
With low plan amounts, such as $1.99, we immediately lost about 25% of it to Stripe fees, which are 2.9% + 30¢ per successful transaction, plus 2¢ per each screened transaction for Radar for Fraud Teams.
With these in mind, we hope you can understand our reasoning for replacing the monthly plan with a quarterly plan and adjusting pricing.`
		},
		{
			question: 'Is my payment safe?',
			answer:
				'APKMirror PREMIUM is powered by Memberful, a Patreon company. Patreon and Memberful utilize the highest standards of safety and manage payments through Google Pay, Apple Pay, and Stripe. Visa, Mastercard, American Express, Discover, and JCB cards are supported. We never see the full details of your payment, like credit card numbers, so your payment information is safe and secure.'
		},
		{
			question: "Why can't I log in?",
			answer:
				'Check your browser’s security settings. Our membership software won’t work if you’ve disabled 3rd-party cookies. Either change your settings or use another browser.'
		},
		{
			question: 'Can I update my email address, payment method, or other personal information?',
			answer: 'Yes. Log in to your account to make these changes.'
		},
		{
			question: 'Can I upgrade/downgrade my plan or adjust the price?',
			answer: `Yes! If you sign up with a quarterly plan and decide to switch to yearly or vice versa, you can upgrade or downgrade using the Subscriptions menu item of your account. A pro-rated discount or charge will apply.
Similarly, if you decide to adjust the contribution amount, you can do so from the same area, as long as the new amount is higher than the plan’s minimum.`
		},
		{
			question: 'How do I reset my password?',
			answer: `Passwords are not required for your membership account. Instead, visit our sign in form, enter your email address and click Send sign in link. We’ll send you an email with a link that you can click to sign in. The link can only be used once and expires after 24 hours.
If you prefer to create a password, you can do so after you sign up for a membership. If you ever need to reset your password, click this link, enter your email address, and then click send me reset instructions. To ensure the reset process is secure:

Password reset links automatically expire after 48 hours.
Password reset links can only be used once. If you click the link, and reset your password, the link becomes invalid.
If the link becomes invalid, delete the old reset email and start with a fresh password reset.`
		},
		{
			question: 'Can I gift a subscription?',
			answer: `Yes. It’s easy to gift a subscription. Click one of these links: Quarterly | Annual.
You will be prompted to enter the gift recipient’s name and email address, the delivery date, a personalized message, and your payment information. The gift recipient will receive an email with a link to activate their gift. If a physical address is required, the gift recipient will have the opportunity to enter it when they activate the gift.

Keep in mind that you’re purchasing a one-time gift for the selected term (e.g. quarter or year). The gift recipient will be responsible for adding a payment method before the next renewal period if they’d like to continue with the subscription.`
		},
		{
			question: 'Does APKMirror Premium apply to APKMirror Installer?',
			answer:
				'At the moment, the APKMirror Installer ad-free subscription is separate from APKMirror PREMIUM website membership and is handled by Google Play billing. We may consider combining the two in the future, but because subscriptions are handled via two separate systems (Google Play vs Memberful), it’s not a trivial feature to support.'
		},
		{
			question: 'How do I cancel my subscription?',
			answer: 'Log in to your account and toggle auto-renew off from the Subscriptions menu item.'
		},
		{
			question: 'I have another question not covered in this FAQ.',
			answer:
				'If you have another question concerning APKMirror PREMIUM, feel free to get in touch using the contact form.'
		}
	]

	let currentPlan: 'quarterly' | 'yearly' = 'yearly'
</script>

<article class="flex h-fit w-full flex-col gap-4 p-4">
	<section class="flex flex-col items-center gap-4 rounded bg-orange-500 p-8 text-white shadow">
		<h1 class="text-center text-3xl font-black">APKMirror Premium</h1>
		<p class="w-full text-balance text-center text-base font-semibold text-opacity-80 md:w-auto">
			Support APKMirror, get an ad-free experience and save clicks with our premium plan.
			<br />
			Pay yearly for 30% off. Cancel anytime.
		</p>
		<div class="flex flex-col items-center gap-4 md:flex-row">
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
		<h2 class="text-balance text-center font-bold uppercase tracking-wider text-gray-500">
			Premium Perks
		</h2>
	</div>
	<section class="grid grid-cols-1 gap-4 md:auto-rows-fr md:grid-cols-2 lg:grid-cols-3">
		{#each perks as perk}
			<div
				class={twMerge(
					'grid grid-cols-1 items-start justify-between gap-6 rounded bg-white p-6 shadow',
					perk.image && 'md:col-span-2 md:grid-cols-2'
				)}>
				{#if perk.image}
					<enhanced:img
						src={perk.image}
						alt={perk.title}
						class={twMerge(
							'aspect-video w-full rounded object-cover',
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
						<h3 class="font-semibold text-gray-900">{perk.title}</h3>
						<p class="text-gray-900 text-opacity-80">{perk.description}</p>
					</div>
				</div>
			</div>
		{/each}
	</section>
	<div class="mt-2 flex w-full flex-row items-center justify-center px-4">
		<h2 class="text-center font-bold uppercase tracking-wider text-gray-500">Statistics</h2>
	</div>
	<section class="grid grid-cols-1 gap-4 md:auto-rows-fr md:grid-cols-2 lg:grid-cols-3">
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
		<h2 class="text-balance text-center font-bold uppercase tracking-wider text-gray-500">
			Your contributions made these possible
		</h2>
	</div>
	<section class="grid grid-cols-1 gap-4 md:auto-rows-fr md:grid-cols-2 lg:grid-cols-3">
		{#each features as feature}
			<div
				class={twMerge(
					'flex flex-col items-center gap-2 rounded bg-white p-6 shadow',
					feature.wide && 'md:col-span-2'
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
	<div class="mt-2 flex w-full flex-row items-center justify-center px-4">
		<h2 class="text-balance text-center font-bold uppercase tracking-wider text-gray-500">
			Frequently Asked Questions
		</h2>
	</div>
	<section class="flex w-full flex-col items-start gap-4">
		<Accordion.Root
			multiple
			class="flex h-fit w-full flex-col items-start gap-0 divide-y divide-gray-200 rounded bg-white shadow transition-all">
			{#each questions as question, index}
				<Accordion.Item value={`${index}`} class="flex h-fit w-full flex-col">
					<Accordion.Header class="h-fit w-full">
						<Accordion.Trigger class="group flex w-full flex-row items-center gap-2 p-6">
							<ChevronRight
								class="size-6 shrink-0 text-orange-500 transition-transform group-data-[state=open]:rotate-90" />
							<p class="grow text-left font-semibold text-gray-900">{question.question}</p>
						</Accordion.Trigger>
					</Accordion.Header>
					<Accordion.Content
						transition={(node) => slide(node, { duration: 150 })}
						class="px-6 pb-6">
						<p class="text-gray-900 text-opacity-80">{question.answer}</p>
					</Accordion.Content>
				</Accordion.Item>
			{/each}
		</Accordion.Root>
	</section>
</article>
