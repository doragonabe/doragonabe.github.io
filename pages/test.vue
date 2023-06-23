<template>
    <div>
        <GoogleSignInButton @success="handleLoginSuccess" @error="handleLoginError"></GoogleSignInButton>
    </div>
</template>
<script setup lang="ts">
import {GoogleSignInButton, type CredentialResponse, decodeCredential} from 'vue3-google-signin';

// handle success event
const handleLoginSuccess = (response: CredentialResponse) => {
  const {credential} = response;
  console.log('Access Token', credential);
  const decodedCredential = decodeCredential(`${credential}`);
  console.log("User:", decodedCredential);
};

// handle an error event
const handleLoginError = () => {
  console.error('Login failed');
};
</script>
