import { shallowMount, createLocalVue } from "@vue/test-utils";
import Home from '@/views/Home.vue';

jest.mock('@/service/Apiservice.js', () => {
    return {
        getAllTvShows: () => {
            return Promise.resolve({
                data: [
                    { "id": 139, "url": "https://www.tvmaze.com/shows/139/girls", "name": "Girls", "type": "Scripted", "language": "English", "genres": ["Drama", "Romance"], "status": "Ended", "runtime": 30, "averageRuntime": 30, "premiered": "2012-04-15", "officialSite": "http://www.hbo.com/girls", "schedule": { "time": "22:00", "days": ["Sunday"] }, "rating": { "average": 6.6 }, "weight": 95, "network": { "id": 8, "name": "HBO", "country": { "name": "United States", "code": "US", "timezone": "America/New_York" } }, "webChannel": null, "dvdCountry": null, "externals": { "tvrage": 30124, "thetvdb": 220411, "imdb": "tt1723816" }, "image": { "medium": "https://static.tvmaze.com/uploads/images/medium_portrait/31/78286.jpg", "original": "https://static.tvmaze.com/uploads/images/original_untouched/31/78286.jpg" }, "summary": "<p>This Emmy winning series is a comic look at the assorted humiliations and rare triumphs of a group of girls in their 20s.</p>", "updated": 1611310521, "_links": { "self": { "href": "https://api.tvmaze.com/shows/139" }, "previousepisode": { "href": "https://api.tvmaze.com/episodes/1079686" } } },
                    { "id": 2, "url": "https://www.tvmaze.com/shows/2/person-of-interest", "name": "Person of Interest", "type": "Scripted", "language": "English", "genres": ["Action", "Crime", "Science-Fiction"], "status": "Ended", "runtime": 60, "averageRuntime": 60, "premiered": "2011-09-22", "officialSite": "http://www.cbs.com/shows/person_of_interest/", "schedule": { "time": "22:00", "days": ["Tuesday"] }, "rating": { "average": 8.9 }, "weight": 96, "network": { "id": 2, "name": "CBS", "country": { "name": "United States", "code": "US", "timezone": "America/New_York" } }, "webChannel": null, "dvdCountry": null, "externals": { "tvrage": 28376, "thetvdb": 248742, "imdb": "tt1839578" }, "image": { "medium": "https://static.tvmaze.com/uploads/images/medium_portrait/163/407679.jpg", "original": "https://static.tvmaze.com/uploads/images/original_untouched/163/407679.jpg" }, "summary": "<p>You are being watched. The government has a secret system, a machine that spies on you every hour of every day. I know because I built it. I designed the Machine to detect acts of terror but it sees everything. Violent crimes involving ordinary people. People like you. Crimes the government considered \"irrelevant\". They wouldn't act so I decided I would. But I needed a partner. Someone with the skills to intervene. Hunted by the authorities, we work in secret. You'll never find us. But victim or perpetrator, if your number is up, we'll find you.</p>", "updated": 1588773151, "_links": { "self": { "href": "https://api.tvmaze.com/shows/2" }, "previousepisode": { "href": "https://api.tvmaze.com/episodes/659372" } } },
                ],
            });
        }
    }
});

describe("In Shows component ", () => {
    let wrapper;
    beforeEach(() => {
        let localVue = createLocalVue()

        wrapper = shallowMount(Home, {
            localVue,
            data() {
                return {
                    showList: [],
                    topShows: [],
                    genreName: [],
                };
            },
            mocks: {
                $router: {
                    push: jest.fn
                },
            },
        })
    });
    afterEach(() => {
        wrapper.destroy()
    })
    it("should contain <div class='shows'>", () => {
        expect(wrapper.html()).toContain('<div class="shows">')
    });
    it('should update the data after component is created', () => {
        let genreList = new Set(["Drama", "Romance", "Action", "Crime", "Science-Fiction"]);
        expect(wrapper.vm.genreName).toEqual(genreList);
        expect(wrapper.vm.topShows).toEqual([{ "id": 2, "url": "https://www.tvmaze.com/shows/2/person-of-interest", "name": "Person of Interest", "type": "Scripted", "language": "English", "genres": ["Action", "Crime", "Science-Fiction"], "status": "Ended", "runtime": 60, "averageRuntime": 60, "premiered": "2011-09-22", "officialSite": "http://www.cbs.com/shows/person_of_interest/", "schedule": { "time": "22:00", "days": ["Tuesday"] }, "rating": { "average": 8.9 }, "weight": 96, "network": { "id": 2, "name": "CBS", "country": { "name": "United States", "code": "US", "timezone": "America/New_York" } }, "webChannel": null, "dvdCountry": null, "externals": { "tvrage": 28376, "thetvdb": 248742, "imdb": "tt1839578" }, "image": { "medium": "https://static.tvmaze.com/uploads/images/medium_portrait/163/407679.jpg", "original": "https://static.tvmaze.com/uploads/images/original_untouched/163/407679.jpg" }, "summary": "<p>You are being watched. The government has a secret system, a machine that spies on you every hour of every day. I know because I built it. I designed the Machine to detect acts of terror but it sees everything. Violent crimes involving ordinary people. People like you. Crimes the government considered \"irrelevant\". They wouldn't act so I decided I would. But I needed a partner. Someone with the skills to intervene. Hunted by the authorities, we work in secret. You'll never find us. But victim or perpetrator, if your number is up, we'll find you.</p>", "updated": 1588773151, "_links": { "self": { "href": "https://api.tvmaze.com/shows/2" }, "previousepisode": { "href": "https://api.tvmaze.com/episodes/659372" } } }]);
        expect(wrapper.vm.showList).toEqual([
            { "id": 139, "url": "https://www.tvmaze.com/shows/139/girls", "name": "Girls", "type": "Scripted", "language": "English", "genres": ["Drama", "Romance"], "status": "Ended", "runtime": 30, "averageRuntime": 30, "premiered": "2012-04-15", "officialSite": "http://www.hbo.com/girls", "schedule": { "time": "22:00", "days": ["Sunday"] }, "rating": { "average": 6.6 }, "weight": 95, "network": { "id": 8, "name": "HBO", "country": { "name": "United States", "code": "US", "timezone": "America/New_York" } }, "webChannel": null, "dvdCountry": null, "externals": { "tvrage": 30124, "thetvdb": 220411, "imdb": "tt1723816" }, "image": { "medium": "https://static.tvmaze.com/uploads/images/medium_portrait/31/78286.jpg", "original": "https://static.tvmaze.com/uploads/images/original_untouched/31/78286.jpg" }, "summary": "<p>This Emmy winning series is a comic look at the assorted humiliations and rare triumphs of a group of girls in their 20s.</p>", "updated": 1611310521, "_links": { "self": { "href": "https://api.tvmaze.com/shows/139" }, "previousepisode": { "href": "https://api.tvmaze.com/episodes/1079686" } } },
            { "id": 2, "url": "https://www.tvmaze.com/shows/2/person-of-interest", "name": "Person of Interest", "type": "Scripted", "language": "English", "genres": ["Action", "Crime", "Science-Fiction"], "status": "Ended", "runtime": 60, "averageRuntime": 60, "premiered": "2011-09-22", "officialSite": "http://www.cbs.com/shows/person_of_interest/", "schedule": { "time": "22:00", "days": ["Tuesday"] }, "rating": { "average": 8.9 }, "weight": 96, "network": { "id": 2, "name": "CBS", "country": { "name": "United States", "code": "US", "timezone": "America/New_York" } }, "webChannel": null, "dvdCountry": null, "externals": { "tvrage": 28376, "thetvdb": 248742, "imdb": "tt1839578" }, "image": { "medium": "https://static.tvmaze.com/uploads/images/medium_portrait/163/407679.jpg", "original": "https://static.tvmaze.com/uploads/images/original_untouched/163/407679.jpg" }, "summary": "<p>You are being watched. The government has a secret system, a machine that spies on you every hour of every day. I know because I built it. I designed the Machine to detect acts of terror but it sees everything. Violent crimes involving ordinary people. People like you. Crimes the government considered \"irrelevant\". They wouldn't act so I decided I would. But I needed a partner. Someone with the skills to intervene. Hunted by the authorities, we work in secret. You'll never find us. But victim or perpetrator, if your number is up, we'll find you.</p>", "updated": 1588773151, "_links": { "self": { "href": "https://api.tvmaze.com/shows/2" }, "previousepisode": { "href": "https://api.tvmaze.com/episodes/659372" } } },
        ]);
    });
})