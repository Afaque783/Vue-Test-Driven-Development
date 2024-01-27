<template>
    <h1>Sign Up</h1>
    <div>
        <label for="Username">Username</label>
        <input id="Username" type="text">       
    </div>

    <div>
        <label for="email">E-mail</label>
        <input id="email" type="email">
    </div>

    <div>
        <label for="password">Password</label>
        <input id="password" type="password" @input="onChangePassword" >
    </div>

    <div>
        <label for="passwordRepeat">Password Repeat</label>
        <input id="passwordRepeat" type="password" @input="onChangePasswordRepeat">
    </div>

    <button :disabled="disabled">Sign Up</button>
</template>

<script setup>
import {  ref } from 'vue';
const disabled = ref(true)
const password = ref('')
const passwordRepeat = ref('')


const onChangePassword = (event) => {
    password.value = event.target.value
    disabled.value = password.value !== passwordRepeat.value
}

const onChangePasswordRepeat = (event) => {
    passwordRepeat.value = event.target.value
    disabled.value = password.value !== passwordRepeat.value
}
</script>