// Jump Search

function binaryJump(arr, point) {
    let k = Math.floor(Math.sqrt(arr.length));
    let start = 0;
    let currentK = k;

    while(arr[Math.min(currentK, arr.length)-1] < point) {
        start = currentK;
        currentK += k;
    // if after running through point isn't on the list
    if(start > arr.length)
        return "Not found";
    }
    while(arr[start] < point) {
        start ++;
    if(start == Math.min(currentK, arr.length))
        return "Not found";
    }
    // if point is at the start of the list 
    if(arr[start] == point)
        return start + 1
    else    
        return "Not found";
}

// Interpolation Search



// Fibonacci Search