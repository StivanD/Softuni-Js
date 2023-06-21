function distinctArray(arr) {
    
    function removeDuplicates(arr) {
        return arr.filter((item,
            index) => arr.indexOf(item) === index);
    }
    
    // function removeDuplicates(arr) {
    //     return [...new Set(arr)];
    // }
    
    console.log(removeDuplicates(arr).join(' '));
}
