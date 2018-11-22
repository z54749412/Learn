function some(promises, count = 1) {

    const wrapped = promises.map(promise => promise.then(value => ({
        success: true,
        value
    }), () => ({
        success: false
    })));
    return Promise.all(wrapped).then(function (results) {
        const successful = results.filter(result => result.success);
        if (successful.length < count) {
            throw new Error(`Only ${successful.length} resolved.`)
        }
        return successful.map(result => result.value);
    });

}
