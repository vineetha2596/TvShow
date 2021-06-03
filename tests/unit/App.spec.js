import { shallowMount, createLocalVue } from "@vue/test-utils";
import App from '@/App.vue';
import VueRouter from 'vue-router';
import {routes} from '@/router/index'

describe("In App component ", () => {
    let wrapper;
    beforeEach(() => {
        let localVue = createLocalVue();
        localVue.use(VueRouter);
        let router = new VueRouter({routes})
        wrapper = shallowMount(App, {
            localVue,
            router,
        })
    });
    afterEach(()=>{
        wrapper.destroy();
    })
    it("is a Vue instance",()=>{
        expect(wrapper.IsVueInstance)
    });
    it("should contain <div id='app'>",()=>{
        expect(wrapper.html()).toContain('<div id="app">')
    });
    it("should contain  <app-header />",()=>{
        expect(wrapper.html()).toContain("<app-header-stub></app-header-stub>");
    });
    it("should contain  <app-footer />",()=>{
        expect(wrapper.html()).toContain("<app-footer-stub></app-footer-stub>");
    });

}
)


