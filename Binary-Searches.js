class Node {
    constructor(key) {
        this.key = key;
        this.right = null;
        this.left = null;
    }
}

class BinarySearchTree {
    constructor() {
      this.head = null;
    }

    ins(key){
        this.head = insert(head, key)
    }

    insert(key) {
        if(this.head == null) {
            this.head = new BinarySearchTree(key);
            return this.head;
        }
        if(key < this.head.key){
            this.head.left = ins(key)
        } else if (this.head > key) {
            this.head.right = ins(key)
        }
        return this.head;
    }

    find(key) {
        if(this.head == null || this.head.key == key)
            return this.head;
        if(this.head.key < key)
            return find(this.right, key);
        return find(this.left, key);        
    }
}

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
function binaryInterpol(arr, point) {
    let lo = 0;
    let hi = arr.length-1;
    let position = -1;
    let change = -1;

    while(lo <= hi && point >= arr[lo] && point <= arr[hi]) {
        change = (point - arr[lo])/(arr[hi])-(arr[lo]);
        position = lo + Math.floor((hi-lo)*change);
        if(arr[position] == point) {
            return position;
        }  else
        if(arr[position] < point) {
            lo = position + 1;
        } else {
            hi = position - 1;
        }
    }   
    return "Not found";

}
// Fibonacci Search
function binaryFib(arr, point) {
    let len = arr.length;
    let fib1 = 0;
    let fib2 = 1;
    let fib3 = fib1 + fib2;

    while( fib3 < len) {
        fib1 = fib2;
        fib2 = fib3;
        fib3 = fib1 + fib2;
    }
    let offset = len - 1;
    while(fib3 > 1) {
        let i = Math.min(offset + fib2, len - 1);
        if(arr[i] < point) {
            fib3 = fib2;
            fib2 = fib1;
            fib1 = fib3 - fib2;
            offset = i;
        } else if (arr[i] > point) {
            fib3 = fib1;
            fib2 = fib2 - fib1;
            fib1 = fib3 - fib2;
        } else {
            return i + 1;
        }
    }
    if(fib2 === 1 && arr[offset + 1] === point){
        return offset + 1;
    } else {
        return "Not found";
    }
}