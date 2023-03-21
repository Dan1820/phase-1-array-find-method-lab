// code your solution here

const record=[
    {year:'2015', result:'W'},
    { year:'2014', result:'N/A'},
    {year:'2013', result:'L'}
]
function superbowlWin(record){
    
    // for(item of element){
        let resultW= record.find(function (record) {
            return record.result==='W'
            
        })
        if(resultW){
            return resultW.year
        // }
    }
    
}
console.log(record.find(superbowlWin))