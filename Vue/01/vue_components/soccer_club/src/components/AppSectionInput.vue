<template>
    <input type="text" :value="value" @keyup="$emit('input', $event.target.value)" name="" id="" class="form-control" placeholder="Typewrite your club">
</template>

<script>
export default {
    props: {
        value: String
    }
}
</script>

<style scoped>

</style>