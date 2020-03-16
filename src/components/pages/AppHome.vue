<template>
    <section class="home">
        <video autoplay src="/C/Users/web_meng/Videos/1.mp4"></video>
        <ul class="list-all">
            <li class="list-item" v-for="(item,index) in list" :key="index">
                {{item.content}}
            </li>
        </ul>
        <BasicGroupButton />
    </section>
</template>
<script>
import BasicGroupButton from "../basic/BasicGroupButton";
export default {
    name:"home",
    components:{
        BasicGroupButton,
    },
    data:()=>({
        list:[
            {
                name:"",
                content:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta voluptate totam iusto."
            },
            {
                name:"",
                content:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta voluptate totam iusto."
            },
            {
                name:"",
                content:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta voluptate totam iusto."
            },
            {
                name:"",
                content:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta voluptate totam iusto."
            },
        ]
    }),
    watch:{

    },
    filters:{

    },
    created(){

    },
    methods:{

    },
}
</script>
<style lang="less" scoped>

</style>