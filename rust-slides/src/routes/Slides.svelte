<script>
	export let title = '';
	export let code = '';
</script>

<section class="slide">
	<h1 class="text-4xl font-bold mb-6">{title}</h1>

	{#if code}
		<pre class="code"><code>{code}</code></pre>
	{/if}

	<slot />
</section>
