<script setup lang="ts">
import TheWelcome from '../components/TheWelcome.vue'
import MyIndex from '../components/MyIndex.vue'
import { useRoute, useRouter } from 'vue-router';
import { defineComponent } from 'vue';

const userRoute = useRoute();
const userRouter = useRouter();
window.onload = () => {
    console.log("my route=" + userRoute.params.username + userRoute.meta.test);
    console.log("my route len=" + userRoute.redirectedFrom);
    // console.log("my index router="+userRouter.push('/') );//跳转相关的操作
    // push
    // replace
    // redirec
}
const User = {
    template: '<div>User {{ userRoute.params.id }}</div>',
}
defineComponent({
    name: "myIndex",
    components: {
        MyIndex
    }
})
</script>

<template>
    <main>
        <MyIndex msg="my index">{{ useRouter.arguments.username }}}</MyIndex>
    </main>
</template>
