
const arr = [1, 40, -5, 0, 10];

for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - 1; j++) {
        let a = arr[j];
        let b = arr[j + 1]
        if (a > b) {
            let temp = a;
            a = b;
            b = temp;
        } 
        
        arr[j] = a;
        arr[j + 1] = b;
    };
    
};


console.log(arr);




for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
        if(arr[j] > arr[j + 1]) {
            let tmp = arr[j]; 
            arr[j] = arr[j + 1]; 
            arr[j + 1] = tmp; 
            
            
        };
            
        
    };

    
};



console.log(arr);