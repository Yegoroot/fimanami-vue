<template>
	<div class="wrapper">
		<parallax class="section page-header header-filter" :style="headerStyle"></parallax>

		<div class="main main-raised">
			<div class="section">
				<div class="container text-right">
					<div class="md-layout">
						<div class="md-layout-item md-xsmall-size-100 mx-auto">
							<h1 class="title">Let's talk product</h1>
							<h5 class="description">
								This is the paragraph where you can write more details about your product. Keep you user engaged by
								providing meaningful information. Remember that by this time, the user is curious, otherwise he wouldn't
								scroll to get here. Add a button if you want the user to see more.
							</h5>
						</div>
					</div>
					<div class="md-layout">
						<div class="md-layout-item md-xsmall-size-100 mx-auto">
							<h2>Некоторый заголоваок</h2>
							<p>
								An artist of considerable range, Chet Faker — the name taken by Melbourne-raised, Brooklyn-based Nick
								Murphy — writes, performs and records all of his own music, giving it a warm, intimate feel with a solid
								groove structure.
							</p>
							<h2>НеДругой заголовок</h2>
							<p>
								An artist of considerable range, Chet Faker — the name taken by Melbourne-raised, Brooklyn-based Nick
								Murphy — writes, performs and records all of his own music, <ar-sent>الاسلام في الارض</ar-sent> giving
								it a warm, intimate feel with a solid groove structure.An artist of considerable range, Chet Faker — the
								name taken by Melbourne-raised, Brooklyn-based Nick Murphy — writes, performs and records all of his own
								music,
							</p>
							<p>
								<ar-par
									>وَاخْتِلَافِ اللَّيْلِ وَالنَّهَارِ وَمَا أَنزَلَ اللَّهُ مِنَ السَّمَاءِ مِن رِّزْقٍ فَأَحْيَا بِهِ
									الْأَرْضَ بَعْدَ مَوْتِهَا وَتَصْرِيفِ الرِّيَاحِ آيَاتٌ لِّقَوْمٍ يَعْقِلُونَ</ar-par
								>
							</p>
							<h6>
								An artist of considerable range, Chet Faker — the name taken by Melbourne-raised, Brooklyn-based Nick
								Murphy — writes, performs and records all of his own music, giving it a warm, intimate feel with a solid
								groove structure.
							</h6>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	bodyClass: 'article-page',
	props: {
		someProps: { type: String, default: '' },
		header: {
			type: String,
			default: require('@/assets/img/mosques/mosque3.jpg')
		},
		img: {
			type: String,
			default: require('@/assets/img/faces/christian.jpg')
		}
	},
	computed: {
		headerStyle() {
			return {
				backgroundImage: `url(${this.header})`
			}
		}
	},
	created() {
		console.log(this._props)
	}
}
</script>

<style lang="sass" scoped>

.header-filter:before
	background: rgba(0, 0, 0, 0.5)

h5.description
    margin-top: 30px
</style>
