setTimeout(()=> {
    console.log('3');
    setTimeout(()=> {
        console.log('2');
        setTimeout(()=> {
            console.log('1');
        },3000);
    }, 2000);
},1000);