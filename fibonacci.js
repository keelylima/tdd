const fibonacci = (num) => {
    // if(num == 1){
    //     return num;
    // }
    // if(num == 2) {
    //     return '1,1,2';
    // }

    if (num < 2) {
        return num
    }
    return fibonacci(num - 1) + fibonacci(num - 2)
}

module.exports = fibonacci;


//soma do numero anterior com o atual
