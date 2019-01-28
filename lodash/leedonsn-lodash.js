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
        if(typeof args[args.length-1] === 'object') {
            difference(array,...args)
        } else if(typeof args[args.length-1] === 'string'){
            var result = []
            var arguments = []
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
    function dropRight(ary, n = 1){
        var result = []
        if(n >= ary.length){
            return []
        } else {
            for(i=0;i<ary.length-n;i++){
                result.push(ary[i])
            }
            return result
        }
    }
    function fill(ary, n, start = 0, end = ary.length){
        for(i = start;i < end; i++){
            ary[i] = n
        }
        return ary
    }
    return {
        chunk: chunk,
        compact: compact,
        difference: difference,
        differenceBy:differenceBy,
        join:join,
        drop:drop,
        dropRight:dropRight,
        fill:fill,
    }
}()
