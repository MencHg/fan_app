<template>
    <section class="group-input">
        <div :class="['input-wrap',{'tips-input':tips}]">
            <i :class="['iconfont',icon]" v-if="icon"></i>
            <input :type="type" :placeholder="placeholder" :value="value" @input="$emit('input',$event.target.value)" />
        </div>
        <p class="tips">
            <span v-show="tips">{{tips}}</span>
        </p>
    </section>
</template>
<script>
export default {
    name:"group-input",
    props:{
        value:String,
        placeholder:{
            type:String,
            default:"Add Text"
        },
        type:{
            type:String,
            default:'text'
        },
        tips:String,
        type:{
            type:String,
            default:'text'
        },
        icon:{
            type:String,
            default:''
        },
    }
}
</script>
<style lang="less" scoped>
.input-wrap,input{
        box-sizing: border-box;
    }
.group-input{
    .input-wrap{
        display: flex;
        justify-content: flex-start;
        padding: 6px 10px;
        border: 1px solid #aaaaaa;
        box-shadow: 0 0 3px 1px #aaaaaa;
        border-radius: 8px;
        &:focus-within{
            border-color: rgb(0, 146, 56);
            box-shadow: 0 0 3px 1px rgb(0, 146, 56);
        }
        .iconfont{
            width: 45px;
        }
        input{
            width: 100%;
            padding: 2px 8px;
            outline: none;
            border: 0;
            font-size: 16px;
        }
    }
    .tips-input{
        border-color: rgb(245, 3, 56);
        box-shadow: 0 0 3px 1px rgb(245, 3, 56);
    }
    .tips{
        height: 16px;
        padding: 5px;
        span{
            color: rgb(245, 3, 56);
            font-weight: bold;
            font-size: 14px;
            transition: all .2s;
            animation: tips .5s 1;
        }
        @keyframes tips {
            0%{
                text-indent: 0em;
            }
            25%{
                text-indent: -1.5em;
            }
            50%{
                text-indent: 0em;
            }
            75%{
                text-indent: 1.5em;
            }
            100%{
                text-indent: 0em;
            }
        }
    }
}
</style>