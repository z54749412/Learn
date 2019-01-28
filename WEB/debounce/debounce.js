    function debounce(fn, wait) {
        var timer = null;
        return function () {
            var context = this
            var args = arguments
            if (timer) {
                clearTimeout(timer);
                timer = null;
            }
            timer = setTimeout(function () {
                fn.apply(context, args)
            }, wait)
        }
    }

    var fn = function () {
        console.log('boom1')
    }

    setInterval(debounce(fn, 500), 600)
