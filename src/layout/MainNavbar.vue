<template>
	<md-toolbar
		id="toolbar"
		md-elevation="0"
		class="md-transparent md-absolute"
		:class="extraNavClasses"
		:color-on-scroll="colorOnScroll"
	>
		<div class="md-toolbar-row md-collapse-lateral">
			<div class="md-toolbar-section-start">
				<router-link :to="{ name: 'index' }">
					<h3 class="md-title">في منامي</h3>
				</router-link>
			</div>
			<div class="md-toolbar-section-end">
				<md-button
					class="md-just-icon md-simple md-toolbar-toggle"
					:class="{ toggled: toggledClass }"
					@click="toggleNavbarMobile()"
				>
					<span class="icon-bar"></span>
					<span class="icon-bar"></span>
					<span class="icon-bar"></span>
				</md-button>

				<div class="md-collapse">
					<div class="md-collapse-wrapper">
						<mobile-menu nav-mobile-section-start="false">
							<!-- Here you can add your items from the section-start of your toolbar -->
						</mobile-menu>
						<md-list>
							<li class="md-list-item" style="padding-left: 20px">
								<router-link
									@click.native="closeNavbarMobile"
									:to="{ name: 'ui' }"
									class="md-list-item-router md-list-item-container md-button-clean"
								>
									<div class="md-list-item-content">
										<i class="material-icons">content_paste</i>
										<p>Ui Kit</p>
									</div>
								</router-link>
							</li>

							<li class="md-list-item" style="padding-left: 20px">
								<router-link
									@click="closeNavbarMobile"
									:to="{ name: 'article' }"
									class="md-list-item-router md-list-item-container md-button-clean"
								>
									<div class="md-list-item-content">
										<i class="material-icons" style="    padding-right: 8px;">list</i>
										Заметки
									</div>
								</router-link>
							</li>

							<!-- <md-list-item href="javascript:void(0)" @click="scrollToElement()">
								<i class="material-icons">cloud_download</i>
								<p>Download</p>
							</md-list-item> -->

							<li class="md-list-item">
								<a
									href="javascript:void(0)"
									class="md-list-item-router md-list-item-container md-button-clean dropdown"
								>
									<div class="md-list-item-content">
										<drop-down direction="down">
											<md-button
												@click="closeNavbarMobile"
												slot="title"
												class="md-button md-button-link md-white md-simple dropdown-toggle"
												data-toggle="dropdown"
											>
												<i class="material-icons">view_carousel</i>
												<p>Pages</p>
											</md-button>
											<ul class="dropdown-menu dropdown-with-icons">
												<li>
													<router-link :to="{ name: 'landing' }" @click="closeNavbarMobile">
														<i class="material-icons">view_day</i>
														<p>Landing Page</p>
													</router-link>
												</li>
												<li>
													<router-link :to="{ name: 'login' }">
														<i class="material-icons">fingerprint</i>
														<p>Login Page</p>
													</router-link>
												</li>
												<li>
													<router-link :to="{ name: 'profile' }">
														<i class="material-icons">account_circle</i>
														<p>Profile Page</p>
													</router-link>
												</li>
											</ul>
										</drop-down>
									</div>
								</a>
							</li>
							<!-- <li class="md-list-item" >
								<router-link :to="{ name: 'index' }" class="md-list-item-router md-list-item-container md-button-clean">
									<div class="md-list-item-content">
										<i class="material-icons">profile</i>
										Учить
									</div>
								</router-link>
							</li> -->
							<li class="md-list-item">
								<router-link :to="{ name: 'index' }" class="md-list-item-router md-list-item-container md-button-clean">
									<div class="md-list-item-content">
										<i class="material-icons" style="    padding-right: 8px;">person</i>
										Профиль
									</div>
								</router-link>
							</li>

							<li class="md-list-item" style="padding-left: 20px">
								<router-link :to="{ name: 'index' }" class="md-list-item-router md-list-item-container md-button-clean">
									<div class="md-list-item-content">
										<!-- <i class="material-icons">how_to_reg</i> -->
										<i class="material-icons">brightness_3</i>
										Вход
									</div>
								</router-link>
							</li>
							<li class="md-list-item" style="padding-left: 20px">
								<router-link :to="{ name: 'index' }" class="md-list-item-router md-list-item-container md-button-clean">
									<div class="md-list-item-content">
										<i class="material-icons">logout</i>
										выход
									</div>
								</router-link>
							</li>
						</md-list>
					</div>
				</div>
			</div>
		</div>
	</md-toolbar>
</template>

<script>
let resizeTimeout
function resizeThrottler(actualResizeHandler) {
	// ignore resize events as long as an actualResizeHandler execution is in the queue
	if (!resizeTimeout) {
		resizeTimeout = setTimeout(() => {
			resizeTimeout = null
			actualResizeHandler()

			// The actualResizeHandler will execute at a rate of 15fps
		}, 66)
	}
}

import MobileMenu from '@/layout/MobileMenu'
export default {
	components: {
		MobileMenu
	},
	props: {
		type: {
			type: String,
			default: 'white',
			validator(value) {
				return ['white', 'default', 'primary', 'danger', 'success', 'warning', 'info'].includes(value)
			}
		},
		colorOnScroll: {
			type: Number,
			default: 0
		}
	},
	data() {
		return {
			extraNavClasses: '',
			toggledClass: false
		}
	},
	computed: {
		// showDownload() {
		// 	const excludedRoutes = ['login', 'landing', 'profile']
		// 	return excludedRoutes.every(r => r !== this.$route.name)
		// }
	},
	methods: {
		bodyClick() {
			let bodyClick = document.getElementById('bodyClick')

			if (bodyClick === null) {
				let body = document.querySelector('body')
				let elem = document.createElement('div')
				elem.setAttribute('id', 'bodyClick')
				body.appendChild(elem)

				let bodyClick = document.getElementById('bodyClick')
				bodyClick.addEventListener('click', this.toggleNavbarMobile)
			} else {
				bodyClick.remove()
			}
		},
		toggleNavbarMobile() {
			this.NavbarStore.showNavbar = !this.NavbarStore.showNavbar
			this.toggledClass = !this.toggledClass
			this.bodyClick()
		},
		closeNavbarMobile() {
			this.NavbarStore.showNavbar = false
			this.toggledClass = false
		},
		handleScroll() {
			let scrollValue = document.body.scrollTop || document.documentElement.scrollTop
			let navbarColor = document.getElementById('toolbar')
			this.currentScrollValue = scrollValue
			if (this.colorOnScroll > 0 && scrollValue > this.colorOnScroll) {
				this.extraNavClasses = `md-${this.type}`
				navbarColor.classList.remove('md-transparent')
			} else {
				if (this.extraNavClasses) {
					this.extraNavClasses = ''
					navbarColor.classList.add('md-transparent')
				}
			}
		},
		scrollListener() {
			resizeThrottler(this.handleScroll)
		},
		scrollToElement() {
			// let element_id = document.getElementById('downloadSection')
			// if (element_id) {
			// 	element_id.scrollIntoView({ block: 'end', behavior: 'smooth' })
			// }
		}
	},
	mounted() {
		document.addEventListener('scroll', this.scrollListener)
	},
	beforeDestroy() {
		document.removeEventListener('scroll', this.scrollListener)
	}
}
</script>

<style lang="scss" scoped>
.md-title {
	font-size: 37px !important;
	line-height: 1;
	height: initial;
	padding-bottom: 4px;
	padding-top: 0px;
}
</style>
