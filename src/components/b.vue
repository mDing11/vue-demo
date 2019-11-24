<template>
    <div>
        源码实现：
        <button @click="myBind">bind实现</button>
        <button @click="myCall">myCall/myApply</button>
        <button @click="myReduce">myReduce</button>
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
    },
    myCall(){
        Function.prototype.myCall = function(thisArg){
            if(typeof this !== 'function'){
                throw TypeError('Error');
            }

            const args = [...arguments].slice(1); // 截取第一个之后的参数

            thisArg = thisArg || window;

            thisArg.fn = this;
            console.log('this',this);
            const result = thisArg.fn(...args);

            delete thisArg.fn;
            return result;
        }

        Function.prototype.myApply = function(thisArg){
            if(typeof this !== 'function'){
                throw TypeError('type Error');
            }

            const args = arguments[1];

            thisArg = thisArg || window;

            thisArg.fn = this;
            const result = thisArg.fn(...args);

            delete thisArg.fn;

            return result;
        }

        const bar = function(){
            console.log(this.name,arguments);
        }

        bar.prototype.name = bar;

        const foo = {
            name:'foo'
        }

        bar.myCall(foo,1,2,3);
        bar.myApply(foo,[1,2,3]);
    },
    myReduce(){
        Array.prototype.myReduce = function(fn){
            if(! (this instanceof Array)){
                throw TypeError('不是数组');
            }

            console.log(this);

        const arrayValue = this; // 存储数组值

        const len = arrayValue.length;

        let k = 0;

        let accum = undefined; // 累加值

        let keyPresent = false;

        let intl = arguments.length > 1? arguments[1]:undefined;

        // 有初始值 数组为空 报错

        if(arguments.length > 1){
            accum = intl;
        }else{
            accum = arrayValue[0];
            k++;
        }

        while(k<len){
            keyPresent = arrayValue.hasOwnProperty(k);

            if(keyPresent){
                const kValue = arrayValue[k];

                accum = fn.apply(undefined,[accum,kValue,k,arrayValue]);
            }

            ++k;
        }
        return accum;


        }

        const a = [1,2,3];
        const v = a.myReduce((a,b)=>a+b,3);

        const v1 = a.reduce((a,b)=>a+b,3)
        console.log(v,v1);
    }
}
}
</script>