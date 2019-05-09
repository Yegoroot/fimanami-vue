<template>
	<footer class="footer" :class="{ [`footer-${type}`]: type }" :data-background-color="backgroundColor">
		<div class="container">
			<nav>
				<ul>
					<li>
						<a href="/">
							Fi ManamI
						</a>
					</li>
					<li>
						<a href="/">
							Контакты
						</a>
					</li>
				</ul>
			</nav>
			<div class="copyright">&copy; {{ year }}, создано с <md-icon>favorite</md-icon> одним из для лучшего web</div>
		</div>
	</footer>
</template>
<script>
export default {
	props: {
		backgroundColor: String,
		type: String
	},
	data() {
		return {
			year: new Date().getFullYear()
		}
	}
}
</script>
<style></style>
