import { shallowMount, createLocalVue } from "@vue/test-utils";
import Search from '@/views/Search.vue';

jest.mock('@/service/Apiservice.js', () => {
    return {
        getSearchShowsService: () => {
            return Promise.resolve({
                data: [
                    {
                        "score": 17.743526, "show": { "id": 139, "url": "https://www.tvmaze.com/shows/139/girls", "name": "Girls", "type": "Scripted", "language": "English", "genres": ["Drama", "Romance"], "status": "Ended", "runtime": 30, "averageRuntime": 30, "premiered": "2012-04-15", "officialSite": "http://www.hbo.com/girls", "schedule": { "time": "22:00", "days": ["Sunday"] }, "rating": { "average": 6.6 }, "weight": 95, "network": { "id": 8, "name": "HBO", "country": { "name": "United States", "code": "US", "timezone": "America/New_York" } }, "webChannel": null, "dvdCountry": null, "externals": { "tvrage": 30124, "thetvdb": 220411, "imdb": "tt1723816" }, "image": { "medium": "https://static.tvmaze.com/uploads/images/medium_portrait/31/78286.jpg", "original": "https://static.tvmaze.com/uploads/images/original_untouched/31/78286.jpg" }, "summary": "<p>This Emmy winning series is a comic look at the assorted humiliations and rare triumphs of a group of girls in their 20s.</p>", "updated": 1611310521, "_links": { "self": { "href": "https://api.tvmaze.com/shows/139" }, "previousepisode": { "href": "https://api.tvmaze.com/episodes/1079686" } } },
                    }
                ],
            });
        }
    }
});

describe("In Search component ", () => {
    let wrapper;
    beforeEach(() => {
        let localVue = createLocalVue()
        wrapper = shallowMount(Search, {
            localVue,
            data() {
                return {
                    searchShows: [],
                };
            },
            mocks: {
                $router: {
                    push: jest.fn
                },
                $route: {
                    params: {
                        enteredValue: 'girls',
                    }
                }
            },
        })
    });
    afterEach(() => {
        wrapper.destroy()
    })
    it("should contain <div class='search'>", () => {
        expect(wrapper.html()).toContain('<div class="search">')
    });
    it('should update the data after component is created', () => {
        expect(wrapper.vm.searchShows).toEqual([
            {
                "score": 17.743526, "show": { "id": 139, "url": "https://www.tvmaze.com/shows/139/girls", "name": "Girls", "type": "Scripted", "language": "English", "genres": ["Drama", "Romance"], "status": "Ended", "runtime": 30, "averageRuntime": 30, "premiered": "2012-04-15", "officialSite": "http://www.hbo.com/girls", "schedule": { "time": "22:00", "days": ["Sunday"] }, "rating": { "average": 6.6 }, "weight": 95, "network": { "id": 8, "name": "HBO", "country": { "name": "United States", "code": "US", "timezone": "America/New_York" } }, "webChannel": null, "dvdCountry": null, "externals": { "tvrage": 30124, "thetvdb": 220411, "imdb": "tt1723816" }, "image": { "medium": "https://static.tvmaze.com/uploads/images/medium_portrait/31/78286.jpg", "original": "https://static.tvmaze.com/uploads/images/original_untouched/31/78286.jpg" }, "summary": "<p>This Emmy winning series is a comic look at the assorted humiliations and rare triumphs of a group of girls in their 20s.</p>", "updated": 1611310521, "_links": { "self": { "href": "https://api.tvmaze.com/shows/139" }, "previousepisode": { "href": "https://api.tvmaze.com/episodes/1079686" } } },
            }
        ]);
    });
})