<template>
    <div>
        <GoogleSignInButton @success="onSuccess" @error="onError"/>
    </div>
</template>
<script lang="ts" setup>
const onSuccess = (resp: any) => console.log(resp)
const onError = (resp: any) => console.error(resp)
</script>
