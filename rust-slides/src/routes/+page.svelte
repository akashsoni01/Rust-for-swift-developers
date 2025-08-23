<script>
	import { onMount } from 'svelte';
	import Slides from './Slides.svelte';
	// import Slide from '$lib/Slide.svelte';

	let current = 0;

	const slides = [
		{
			title: 'Functional Programming in Rust',
			content: 'An introduction to FP concepts with Rust'
		},
		{
			title: 'Ownership',
			code: `let x = 5;
let y = x; // move
println!("{}", x); // error`
		},
		{
			title: 'Algebraic Data Types',
			code: `enum List<T> {
    Nil,
    Cons(T, Box<List<T>>),
}`
		},
		{
			title: 'Traits',
			code: `use std::ops::Add;

impl Add for Complex {
    type Output = Complex;
    fn add(self, other: Complex) -> Complex {
        Complex { re: self.re + other.re, im: self.im + other.im }
    }
}`
		}
	];

	function next() {
		if (current < slides.length - 1) current++;
	}
	function prev() {
		if (current > 0) current--;
	}

	onMount(() => {
		window.addEventListener('keydown', (e) => {
			if (e.key === 'ArrowRight') next();
			if (e.key === 'ArrowLeft') prev();
		});
	});
</script>

<main class="w-full h-screen bg-gray-900 text-white">
	<Slides title={slides[current].title} code={slides[current].code}>
		{slides[current].content}
	</Slides>

	<div class="absolute bottom-4 left-0 right-0 flex justify-center gap-4">
		<button on:click={prev} class="px-4 py-2 bg-gray-700 rounded">Prev</button>
		<button on:click={next} class="px-4 py-2 bg-gray-700 rounded">Next</button>
	</div>
</main>
