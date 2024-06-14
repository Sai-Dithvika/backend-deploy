function gaRequest(data){
    var param = {};
    for(let key in data){
        if(key!="dateRanges" && key!="dimensionFilter" && key!="metricsFilter"){
            param[key] = data[key].map((item) => {
                return { name: item };
            });
        }
        else if(key == "dateRanges"){
            param[key] = data[key].map((item)=>{
                return {
                    startDate: item[0],
                    endDate: item[1]
                }
            })
        }
        else{
            param[key] = {
              andGroup: {
                expressions: data[key].map((item) => {
                  return {
                    filter: {
                      fieldName: item.fieldName,
                      inListFilter: {
                        values: item.filters,
                      },
                    },
                  };
                }),
              },
            };
        }
    }
    return param;   
}

module.exports = gaRequest;