<template>
	<div class="wrapper">
		<parallax class="page-header header-filter" :style="headerStyle">
			<div class="md-layout">
				<div class="md-layout-item">
					<div class="image-wrapper">
						<div class="brand">
							<h1>Арабский Язык</h1>
							<h3>Заметки, запсиси, уроки, правила и исключения</h3>
						</div>
					</div>
				</div>
			</div>
		</parallax>
		<div class="main main-raised">
			<div class="section section-signup page-header" :style="signupImage">
				<div class="container">
					<div class="md-layout"></div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	components: {},
	name: 'index',
	bodyClass: 'index-page',
	props: {
		image: {
			type: String,
			default: require('@/assets/img/vue-mk-header.jpg')
		},
		signup: {
			type: String,
			default: require('@/assets/img/city.jpg')
		}
	},
	computed: {
		headerStyle() {
			return {
				backgroundImage: `url(${this.image})`
			}
		},
		signupImage() {
			return {
				backgroundImage: `url(${this.signup})`
			}
		}
	}
}
</script>
