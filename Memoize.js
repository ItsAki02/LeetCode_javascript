function memoize(fn) {
    let cache = {}; // local variable to store data
    return function(...args) {       
        let cacheKey = args.join("#").toString(); // creating a uniquie key with the arguments
        let cacheValue = cache[cacheKey]; // trying to find the unique key in local cache, if it's not there, it will return `undefined`
        
        if( cacheValue != undefined ){ 
            // coming here means we have the key in our cache, we will just return it.
            return cacheValue;
        }
        // Coming here means the value is missing in cache, hence we will calculate the function, store it in our cache and return the value.
        return cache[cacheKey] = fn(...args);
    }
}