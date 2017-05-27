
describe('moviesCtrl', function () {
    var moviesCtrl, httpBackend;
    
    beforeEach(function () {
        
        module('myApp');
 
        
        inject(function ($httpBackend, _moviesCtrl_) {
            moviesCtrl = _moviesCtrl_;
            httpBackend = $httpBackend;
        });
    });
 
    
    afterEach(function () {
        httpBackend.verifyNoOutstandingExpectation();
        httpBackend.verifyNoOutstandingRequest();
    });
 
    
    it('ServiceTestSpec', function () {
 
        var returnData = {};
 
        
        httpBackend.expectGET("https://raw.githubusercontent.com/hjorturlarsen/IMDB-top-100/master/data/movies.json").respond(returnData);
 
        
        var returnedPromise = moviesCtrl.get(1);
 
        
        var myData;
        returnedPromise.then(function (response) {
            myData = response.data;
        });
 
        
        httpBackend.flush();
 
                
        expect(myData).toEqual(returnData);
 
    });
 
 
});