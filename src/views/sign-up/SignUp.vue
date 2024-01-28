<template>
    <div class="col-lg-6 offset-lg-3 col-md-8 offset-md-2">
    <form class="card" @submit.prevent="submit" >
        <div class="card-header">
            <h1>Sign Up</h1>
        </div>
        <div class="card-body">
            <div class="mb-3">
                <label for="Username" class="form-label">Username</label>
                <input id="Username" type="text" class="form-control" v-model="formState.username" >       
            </div>

            <div class="mb-3">
                <label for="email" class="form-label">E-mail</label>
                <input id="email" type="email" class="form-control" v-model="formState.email">
            </div>

            <div class="mb-3">
                <label for="password" class="form-label">Password</label>
                <input 
                id="password"
                type="password" 
                v-model="formState.password"
                class="form-control"
                >
            </div>

            <div class="mb-3">
                <label for="passwordRepeat" class="form-label">Password Repeat</label>
                <input 
                id="passwordRepeat" 
                type="password" 
                v-model="formState.passwordRepeat"
                class="form-control"
                >
            </div>
            
            <div class="text-center">
                <button  :disabled="isDisabled || apiProgress" class="btn btn-primary" >Sign Up</button>
            </div>
        </div>
    </form>
    </div>
</template>

<script setup>
import axios from 'axios';
import {  reactive,computed, ref } from 'vue';

const formState = reactive({
    username : '',
    email: '',
    password: '',
    passwordRepeat: ''
})

const apiProgress = ref(false)


const submit = () => {
    apiProgress.value = true
    const {passwordRepeat, ...body} = formState
    axios.post('/api/v1/users', body)
    // fetch(window.location.origin +  '/api/v1/users', {
    //     method: 'POST',
    //     headers: {
    //         'Content-Type': 'application/json'
    //     },
    //     body: JSON.stringify(body)
    // })
}

const isDisabled = computed(() => {
    return formState.password || formState.passwordRepeat ? formState.password !== formState.passwordRepeat : true
    // return password.value == '' || password.value != passwordRepeat.value
})




</script>

<!-- <script>
export default {

import axios from 'axios';

    data(){
        return {
            formState: {
                username: '',
                email: '',
                disabled : true,
                password: '',
                passwordRepeat:'',
            },
            apiProgress : false
        }
    },
    methods: {
        submit() {
            this.apiProgress = true
            const {passwordRepeat, ...body} = this.formState
            axios.post('/api/v1/users', body)
        }
    }
    computed:{
        isDisabled() {
            return (this.formState.password || this.formState.passwordRepeat)
             ? this.formState.password !== this.formState.passwordRepeat : true
        }
    }
}
</script> -->