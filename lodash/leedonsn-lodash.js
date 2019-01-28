var leedonsn = function(){

    function chunk(ary, size = 1) {
        var result = []
        for(var i = 0; i<ary.length; i++) {
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
    }

    return {
        chunk: chunk,
        compact: compact,
    }
}()
