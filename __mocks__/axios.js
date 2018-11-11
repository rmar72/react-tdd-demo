const axiosMock = jest.genMockFromModule('axios');

let mockResponse = {
    data: {
        "shops":
            [{
                "location": "tst address",
                "address": "test address"
            }]
    }
};

axiosMock.get.mockImplementation(req);

function req(){
    return new Promise(function(resolve){
        axiosMock.delayTimer = setTimeout( function(){
            resolve(mockResponse);
        }, 1000);
    });
}

module.exports = axiosMock;