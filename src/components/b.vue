<template>
    <div>
        源码实现：
        <button @click="myBind">bind实现</button>

    </div>
</template>
<script>
export default {
methods:{
    myBind(){
        Function.prototype.myBind = function(thisArg){
            // 当前this就是调用的函数
            if(typeof this !== 'function'){
                throw TypeError("绑定必须在一个函数上");
            }
            
            // 拿到参数agguments.slice(1) 截取第一个之后的参数
            const args = Array.prototype.slice.call(arguments,1);
            console.log('传入的参数',args);

            let self = this; // 存储原来的this

            let nop = function(){

            }

            console.log('apply传入的参数',arguments,args.concat(Array.prototype.slice.call(arguments)),Array.prototype.slice.call(arguments));
            // bind返回一个函数 如果是箭头函数this指向当前运行环境this 不是箭头函数就绑定传进来的this
            let bound = function(){
                return self.apply(this instanceof nop?this:thisArg,args.concat(Array.prototype.slice.call(arguments)))
            };

            if(this.prototype){
                nop.prototype = this.prototype;
            }

            bound.prototype = new nop();

            return bound;
        }

        const bar = function(){
            console.log(this.name,arguments)
        }

        bar.prototype.name = 'lili';

        const foo = {
            name:'foo'
        }

        // 让bar方法的this绑定foo的this
        
        const bound = bar.myBind(foo,22,33,44); // bind返回一个函数

        new bound(); // new调用时不改变this 优先级高于显示绑定和隐式绑定

        bound();
    }
}
}
</script>