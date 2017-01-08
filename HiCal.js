array = [
    {startTime: 0,  endTime: 1},
    {startTime: 3,  endTime: 5},
    {startTime: 4,  endTime: 8},
    {startTime: 10, endTime: 12},
    {startTime: 9,  endTime: 10},
];

mergeRanges = (array) => {

  array.sort((a, b) => {
    return a.startTime - b.startTime
  })

  var meetingsTotal = [array[0]];

  for(var i = 0; i<array.length; i++) {
    const current = array[i];
    const lastMergedMeeting = meetingsTotal[meetingsTotal.length-1];

    //console.log('next Startime', next.startTime, 'current EndTime', current.endTime)
   
   if(current.startTime <= lastMergedMeeting.endTime) {
    //console.log('pushing merge')
    lastMergedMeeting.endTime= Math.max(lastMergedMeeting.endTime, current.endTime)
    //console.log('after', current, lastMergedMeeting, meetingsTotal)
   } else {
    meetingsTotal.push(current);
   }



  }

  console.log(meetingsTotal)
};

mergeRanges(array);