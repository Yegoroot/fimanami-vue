<template>
	<div class="wrapper">
		<parallax class="page-header header-filter" :style="headerStyle">
			<div class="md-layout">
				<div class="md-layout-item">
					<div class="image-wrapper">
						<div class="brand">
							<h1>Vue Material Kit</h1>
							<h3>A Badass Vue.js UI Kit made with Material Design.</h3>
						</div>
					</div>
				</div>
			</div>
		</parallax>
		<div class="main main-raised">
			<div class="section section-basic">
				<div class="container">
					<div class="title">
						<h2>Basic Elements</h2>
					</div>
					<basic-elements></basic-elements>
				</div>
			</div>
			<div class="section section-navbars">
				<div class="container">
					<small-navigation></small-navigation>
				</div>
				<navigation></navigation>
			</div>
			<div class="section section-tabs">
				<div class="container">
					<tabs></tabs>
				</div>
			</div>
			<div class="section section-white">
				<div class="container">
					<nav-pills></nav-pills>
				</div>
			</div>
			<div class="section section-notifications">
				<div class="container">
					<div class="title">
						<h3>Notifications</h3>
					</div>
				</div>
				<notifications></notifications>
			</div>
			<div class="section">
				<div class="container">
					<typography-images></typography-images>
				</div>
			</div>
			<!-- <div class="section section-javascript">
				<div class="container">
					<javascript-components></javascript-components>
				</div>
			</div> -->
			<div class="section">
				<div class="container text-center">
					<div class="md-layout">
						<div class="md-layout-item md-size-66 md-xsmall-size-100 ml-auto mr-auto text-center">
							<h2>Completed with examples</h2>
							<h4>
								The kit comes with three pre-built pages to help you get started faster. You can change the text and
								images and you're good to go. More importantly, looking at them will give you a picture of what you can
								built with this powerful kit.
							</h4>
						</div>
					</div>
				</div>
			</div>
			<div class="section section-signup page-header" :style="signupImage">
				<div class="container">
					<div class="md-layout">
						<div
							class="md-layout-item md-size-33 md-medium-size-40 md-small-size-50 md-xsmall-size-70 mx-auto text-center"
						>
							<login-card header-color="green">
								<h4 slot="title" class="card-title">Login</h4>
								<md-button slot="buttons" href="javascript:void(0)" class="md-just-icon md-simple md-white">
									<i class="fab fa-facebook-square"></i>
								</md-button>
								<md-button slot="buttons" href="javascript:void(0)" class="md-just-icon md-simple md-white">
									<i class="fab fa-twitter"></i>
								</md-button>
								<md-button slot="buttons" href="javascript:void(0)" class="md-just-icon md-simple md-white">
									<i class="fab fa-google-plus-g"></i>
								</md-button>
								<p slot="description" class="description">Or Be Classical</p>
								<md-field class="md-form-group" slot="inputs">
									<md-icon>face</md-icon>
									<label>First Name...</label>
									<md-input v-model="firstname"></md-input>
								</md-field>
								<md-field class="md-form-group" slot="inputs">
									<md-icon>email</md-icon>
									<label>Email...</label>
									<md-input v-model="email" type="email"></md-input>
								</md-field>
								<md-field class="md-form-group" slot="inputs">
									<md-icon>lock_outline</md-icon>
									<label>Password...</label>
									<md-input v-model="password"></md-input>
								</md-field>
								<md-button slot="footer" class="md-simple md-success md-lg">
									Get Started
								</md-button>
							</login-card>
						</div>
					</div>
				</div>
			</div>
			<div class="md-layout">
				<div class="md-layout-item text-center">
					<router-link :to="{ name: 'login' }">
						<md-button class="md-simple md-success md-lg">View Login Page</md-button>
					</router-link>
				</div>
			</div>
			<div class="section section-examples">
				<div class="container-fluid text-center">
					<div class="md-layout">
						<div class="md-layout-item">
							<router-link :to="{ name: 'landing' }">
								<img :src="landing" alt="Rounded Image" class="img-raised rounded img-fluid" />
								<md-button class="md-simple md-success md-lg">View Landing Page</md-button>
							</router-link>
						</div>
						<div class="md-layout-item">
							<router-link :to="{ name: 'profile' }">
								<img :src="profile" alt="Rounded Image" class="img-raised rounded img-fluid" />
								<md-button class="md-simple md-success md-lg">View Profile Page</md-button>
							</router-link>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import BasicElements from './components/BasicElementsSection'
import Navigation from './components/NavigationSection'
import SmallNavigation from './components/SmallNavigationSection'
import Tabs from './components/TabsSection'
import NavPills from './components/NavPillsSection'
import Notifications from './components/NotificationsSection'
import TypographyImages from './components/TypographyImagesSection'
// import JavascriptComponents from './components/JavascriptComponentsSection'
import { LoginCard } from '@/components'

export default {
	components: {
		BasicElements,
		Navigation,
		SmallNavigation,
		Tabs,
		NavPills,
		Notifications,
		TypographyImages,
		// JavascriptComponents,
		LoginCard
	},
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
		},
		landing: {
			type: String,
			default: require('@/assets/img/landing.jpg')
		},
		profile: {
			type: String,
			default: require('@/assets/img/profile.jpg')
		}
	},
	data() {
		return {
			firstname: null,
			email: null,
			password: null
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
<style lang="scss">
.section-download {
	.md-button + .md-button {
		margin-left: 5px;
	}
}

@media all and (min-width: 991px) {
	.btn-container {
		display: flex;
	}
}
</style>
