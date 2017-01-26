const getRandomArbitrary=(min:number, max:number) =>{
    let num=(Math.random() * (max - min) + min);
    return Math.round(num * 100) / 100;
};

export {getRandomArbitrary};