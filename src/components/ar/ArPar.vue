<template>
	<div class="ar-par">
		<slot name="text"> Arabic sentence here </slot>
		<slot name="desc"> </slot>
	</div>
</template>

<style scoped lang="sass">
.ar-par
    font-size: 30px
    line-height: 1.5
    color: #3c4858
    text-align: right
    font-family: 'Mirza', 'Montserrat', sans-serif
</style>
