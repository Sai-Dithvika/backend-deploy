function gaResponse(data){
    var response = [];

    for(let itr of data.rows){
        var obj = {};
        itr.dimensionValues.forEach((element,index) => {
            obj["label"+(index+1)]=element.value;
        });
        itr.metricValues.forEach((element, index) => {
          obj["value" + (index + 1)] = element.value;
        });
        response.push(obj);
    }
    return response;
}

module.exports = gaResponse;