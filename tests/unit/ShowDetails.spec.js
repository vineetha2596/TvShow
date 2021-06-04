import { shallowMount, createLocalVue } from "@vue/test-utils";
import ShowDetails from '@/views/ShowDetails.vue';

jest.mock('@/service/Apiservice.js', ()=>{
    return {
        getShowDetails: ()=>{
            return Promise.resolve({
                data: {"id":139,"url":"https://www.tvmaze.com/shows/139/girls","name":"Girls","type":"Scripted","language":"English","genres":["Drama","Romance"],"status":"Ended","runtime":30,"averageRuntime":30,"premiered":"2012-04-15","officialSite":"http://www.hbo.com/girls","schedule":{"time":"22:00","days":["Sunday"]},"rating":{"average":6.6},"weight":95,"network":{"id":8,"name":"HBO","country":{"name":"United States","code":"US","timezone":"America/New_York"}},"webChannel":null,"dvdCountry":null,"externals":{"tvrage":30124,"thetvdb":220411,"imdb":"tt1723816"},"image":{"medium":"https://static.tvmaze.com/uploads/images/medium_portrait/31/78286.jpg","original":"https://static.tvmaze.com/uploads/images/original_untouched/31/78286.jpg"},"summary":"<p>This Emmy winning series is a comic look at the assorted humiliations and rare triumphs of a group of girls in their 20s.</p>","updated":1611310521,"_links":{"self":{"href":"https://api.tvmaze.com/shows/139"},"previousepisode":{"href":"https://api.tvmaze.com/episodes/1079686"}}},
            });
        },
        getShowCast: ()=>{
            return Promise.resolve({
                data: [{"person":{"id":1,"url":"https://www.tvmaze.com/people/1/mike-vogel","name":"Mike Vogel","country":{"name":"United States","code":"US","timezone":"America/New_York"},"birthday":"1979-07-17","deathday":null,"gender":"Male","image":{"medium":"https://static.tvmaze.com/uploads/images/medium_portrait/0/1815.jpg","original":"https://static.tvmaze.com/uploads/images/original_untouched/0/1815.jpg"},"_links":{"self":{"href":"https://api.tvmaze.com/people/1"}}}}],
            });
        },
    }
});

describe("In ShowDetails component ", () => {
    let wrapper;
    beforeEach(() => {
        let localVue = createLocalVue()
        
        wrapper = shallowMount(ShowDetails, {
            localVue,
            data() {
                return {
                    searchCast: [],
                    tvShowDetail: null,
                };
              },
              mocks: {
                $route: {
                    params: {
                        id: 139,
                    }
                }
              }
        })
    });
    afterEach(()=>{
        wrapper.destroy()
    })
    it("should contain <div class='ShowDetails'>",()=>{
        expect(wrapper.html()).toContain('<div class="ShowDetails">')
    });
    it('should update the data after component is created',()=>{
        expect(wrapper.vm.tvShowDetail).toEqual({"id":139,"url":"https://www.tvmaze.com/shows/139/girls","name":"Girls","type":"Scripted","language":"English","genres":["Drama","Romance"],"status":"Ended","runtime":30,"averageRuntime":30,"premiered":"2012-04-15","officialSite":"http://www.hbo.com/girls","schedule":{"time":"22:00","days":["Sunday"]},"rating":{"average":6.6},"weight":95,"network":{"id":8,"name":"HBO","country":{"name":"United States","code":"US","timezone":"America/New_York"}},"webChannel":null,"dvdCountry":null,"externals":{"tvrage":30124,"thetvdb":220411,"imdb":"tt1723816"},"image":{"medium":"https://static.tvmaze.com/uploads/images/medium_portrait/31/78286.jpg","original":"https://static.tvmaze.com/uploads/images/original_untouched/31/78286.jpg"},"summary":"<p>This Emmy winning series is a comic look at the assorted humiliations and rare triumphs of a group of girls in their 20s.</p>","updated":1611310521,"_links":{"self":{"href":"https://api.tvmaze.com/shows/139"},"previousepisode":{"href":"https://api.tvmaze.com/episodes/1079686"}}});
        expect(wrapper.vm.searchCast).toEqual([{"person":{"id":1,"url":"https://www.tvmaze.com/people/1/mike-vogel","name":"Mike Vogel","country":{"name":"United States","code":"US","timezone":"America/New_York"},"birthday":"1979-07-17","deathday":null,"gender":"Male","image":{"medium":"https://static.tvmaze.com/uploads/images/medium_portrait/0/1815.jpg","original":"https://static.tvmaze.com/uploads/images/original_untouched/0/1815.jpg"},"_links":{"self":{"href":"https://api.tvmaze.com/people/1"}}}}]);
    });
})