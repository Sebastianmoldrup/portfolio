<script>
	export let size = 35;
</script>

<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 96 96" height={size} width={size}>
	<mask
		id="a"
		width="94"
		height="94"
		x="1"
		y="1"
		maskUnits="userSpaceOnUse"
		style="mask-type:luminance"
	>
		<path
			fill="#ffffff"
			d="M48 95c25.9574 0 47-21.0426 47-47S73.9574 1 48 1 1 22.0426 1 48s21.0426 47 47 47Z"
		></path>
	</mask>
	<g mask="url(#a)">
		<path
			fill="#000000"
			d="M48 95c25.9574 0 47-21.0426 47-47S73.9574 1 48 1 1 22.0426 1 48s21.0426 47 47 47Z"
		></path>
		<path
			fill="url(#b)"
			d="M79.0766 83.2604 37.1077 29.2h-7.9075v37.5843h6.326V37.2336l38.5846 49.8521c1.7411-1.1651 3.3996-2.444 4.9658-3.8253Z"
		></path>
		<path fill="url(#c)" d="M67.3228 29.2h-6.2666v37.5999h6.2666V29.2Z"></path>
	</g>
	<defs>
		<linearGradient
			id="b"
			x1="2803.95"
			x2="4469.55"
			y1="3293.09"
			y2="5357.5"
			gradientUnits="userSpaceOnUse"
		>
			<stop stop-color="#fff"></stop>
			<stop offset="1" stop-color="#fff" stop-opacity="0"></stop>
		</linearGradient>
		<linearGradient
			id="c"
			x1="374.389"
			x2="363.893"
			y1="29.2"
			y2="2790.41"
			gradientUnits="userSpaceOnUse"
		>
			<stop stop-color="#fff"></stop>
			<stop offset="1" stop-color="#fff" stop-opacity="0"></stop>
		</linearGradient>
	</defs>
</svg>
