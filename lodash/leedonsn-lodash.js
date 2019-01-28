var leedonsn = function(){

    function chunk(ary, size = 1) {
        var result = []
        for(var i = 0; i<ary.length; i+=size) {
            result.push(ary.slice(i, i + size))
        }
        return result
    }
    function compact(ary) {
        var result = []
        for (var item of ary) {
            if (item) {
                result.push(item)
            }
        }
        return result
    }
    function difference(array,...args) {
        var result = []
        var arguments = []
        for(i=0;i<args.length;i++){
            arguments = arguments.concat(args[i])
        }
        for(var i=0;i<array.length;i++){
            if(arguments.indexOf(array[i])==-1){
                result.push(array[i])
            }
        }
        return result
    }
    function differenceBy(array,...args) {
        var result = []
        var arguments = []
        if(typeof args[args.length-1] === 'object') {
            for (i = 0; i < args.length; i++) {
                arguments = arguments.concat(args[i])
            }
            for (var i = 0; i < array.length; i++) {
                if (arguments.indexOf(array[i]) == -1) {
                    result.push(array[i])
                }
            }
            return result
        } else if(typeof args[args.length-1] === 'string'){
            for (i = 0; i < args.length-1; i++) {
                arguments = arguments.concat(args[i])
            }
            for (var i = 0; i < array.length; i++) {
                if (arguments.indexOf(array[i]) == -1) {
                    result.push(array[i])
                }
            }
            return result
        }
    }
    function join(ary,str){
        var result = ""
        for(i=0;i<ary.length-1;i++){
            result = result + ary[i].toString() + str
        }
        result = result + ary[ary.length-1]
        return result
    }
    function drop(ary, n = 1){
        var result = []
        if(n >= ary.length){
            return []
        } else {
            for(i=n;i<ary.length;i++){
                result.push(ary[i])
            }
            return result
        }
    }
    return {
        chunk: chunk,
        compact: compact,
        difference: difference,
        differenceBy:differenceBy,
        join:join,
        drop:drop,
    }
}()
