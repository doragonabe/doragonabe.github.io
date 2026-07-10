<template>
  <div>
    <!--
      <GoogleSignInButton @error="handleLoginError" @success="handleLoginSuccess"></GoogleSignInButton>
      -->
  </div>
</template>
<script lang="ts" setup>
/*
import {GoogleSignInButton, type CredentialResponse, decodeCredential} from 'vue3-google-signin';

const allowGoogleAuth = useRuntimeConfig().public.iamAllowGoogleAuth === 'true';

const loginError = ref(<Error | null>null);
const loginSuccess = ref(false);

const handleLoginSuccess = async (response: CredentialResponse) => {
  //const {credential} = response;
  //console.log('Access Token', credential);
  //const decodedCredential = decodeCredential(`${credential}`);
  //console.log('User:', decodedCredential);

  const {credential} = response;
  //let res = null;
  //if (credential) res = await loginWithGoogle(credential);
  const decodedCredential = decodeCredential(`${credential}`);
  console.log('User:', decodedCredential);

  if (decodedCredential.id) {

  }

  //if (res?.error) loginError.value = res?.error;
  //else loginSuccessful();
};

const handleLoginError = () => {
  console.error('Login failed');
};

async function loginSuccessful() {
  loginSuccess.value = true;
  setTimeout(() => {
    navigateTo('/');
  }, 300);
}
*/
</script>
