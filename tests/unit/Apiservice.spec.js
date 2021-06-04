import axios from 'axios'
import {getAllTvShows,getSearchShowsService,getShowCast,getShowDetails} from '@/service/Apiservice.js'

jest.mock('axios', ()=> {
    return {
        get: jest.fn(),
    }
})

describe('In service',()=>{
    it('should get data from getAllTvShows',()=>{
        axios.get.mockImplementation(()=>{
            return Promise.resolve("Movie list");
        });
        getAllTvShows().then((response)=>{
            expect(response).toEqual("Movie list");
        });
    })

    it('should get data from getSearchShowsService',()=>{
        axios.get.mockImplementation(()=>{
            return Promise.resolve("Search list");
        });
        getSearchShowsService().then((response)=>{
            expect(response).toEqual("Search list");
        });
    });

    it('should get data from getShowCast',()=>{
        axios.get.mockImplementation(()=>{
            return Promise.resolve("Cast list");
        });
        getShowCast().then((response)=>{
            expect(response).toEqual("Cast list");
        });
    })

    it('should get data from getShowDetails',()=>{
        axios.get.mockImplementation(()=>{
            return Promise.resolve("Details");
        });
        getShowDetails().then((response)=>{
            expect(response).toEqual("Details");
        });
    })
});