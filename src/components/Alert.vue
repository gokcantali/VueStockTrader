<template>
	<div :class="['alert', `alert-${type}`]" role="alert">
	  {{ message }}
	</div>
</template>

<script type="text/javascript">
	export default {
		props: ['type', 'message'],
		created() {
			console.log("alert shown")
		}
	}
</script>

<style>
	
</style>