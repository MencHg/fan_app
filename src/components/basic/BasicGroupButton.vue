<template>
    <button class="grou-button" :style="{'width':width+'%','height':height+'px','color':color,'filter': 'hue-rotate('+bgc+'deg)'}" @click="$emit('click')">
        {{value}}
    </button>
</template>
<script>
export default {
    name:"group-button",
    props:{
        value:{
            type:String,
            default:"button"
        },
        width:{
            type:String,
            default:"80"
        },
        height:{
            type:String,
            default:"30"
        },
        color:{
            type:String,
            default:"#fff"
        },
        bgc:{
            type:String,
            default:"0"
        },
    }
};
</script>
<style lang="less" scoped>
.grou-button{
    outline: none;
    line-height: 1.8;
    padding: 0 10px;
    border-radius: 8px;
    border: none;
    background-color: #f66;
    text-align: center;
    &:active{
        background-color: #f60;
        filter: blur(2px);
    }
}
</style>