<script setup lang="ts">
import WelcomeItem from './WelcomeItem.vue'
import DocumentationIcon from './icons/IconDocumentation.vue'
import ToolingIcon from './icons/IconTooling.vue'
import EcosystemIcon from './icons/IconEcosystem.vue'
import CommunityIcon from './icons/IconCommunity.vue'
import SupportIcon from './icons/IconSupport.vue'
import { useRoute, useRouter } from 'vue-router'
import axios from 'axios'
import { axiosInstance } from '../utils/axios'

defineProps<{
    msg: string,
    // required: false,
    // default:"MyIndex"
}>()

// 如下三个基本上都是跟路径有关系的
const userRoute = useRoute();
const userRouter = useRouter();
const history = window.history;
console.log(history)
window.onload = () => {
    console.log(history.length)
    console.log("my index route=" + userRoute.params.username + "  meta元信息=" + userRoute.meta.test);
    console.log("my index route =" + userRouter.hasRoute.length);
    // console.log("my index router="+userRouter.push('/') );//跳转相关的操作
    // push
    // replace
    // redirec
    console.log(window.localStorage);
    console.log(window.sessionStorage);

}

const btn1click = () => {
    // alert("btn1 was clicked!")
    //向前走一步
    //userRouter.go(-1);
    alert("back word")
    //history.back();
    // axios({
    //     method: 'post',
    //     url: 'http://10.25.145.25:8098/user/12345',
    //     data: {
    //         firstName: 'Fred',
    //         lastName: 'Flintstone'
    //     }
    // }).then((result) => {
    //     console.log(result)
    // }).catch((err) => {
    //     console.log(err)
    // });
    // 封装后的
    axiosInstance({
        method: 'post',
        url: '/user/12345',
        data: {
            firstName: 'Fred',
            lastName: 'Flintstone'
        }
    }).then((result) => {
        console.log(result)
    }).catch((err) => {
        console.log(err)
    });


}
</script>

<template>
    <div class="greetings">
        <h1 class="green">{{ msg }}</h1>
        <h3>
            this is my index view
            <a href="https://vitejs.dev/" target="_blank" rel="noopener">Vite</a> +
            <a href="https://vuejs.org/" target="_blank" rel="noopener">Vue 3</a>. What's next?
        </h3>
        <div>
            <button @click="btn1click">btn1</button>
        </div>
    </div>
</template>

<style scoped>
h1 {
    font-weight: 500;
    font-size: 2.6rem;
    position: relative;
    top: -10px;
}

h3 {
    font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
    text-align: center;
}

@media (min-width: 1024px) {

    .greetings h1,
    .greetings h3 {
        text-align: left;
    }
}
</style>
