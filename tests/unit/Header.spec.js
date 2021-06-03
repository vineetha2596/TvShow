import { shallowMount, createLocalVue } from "@vue/test-utils";
import Header from '@/components/Header.vue';
import BootstrapVue from "bootstrap-vue";
import VueRouter from 'vue-router';
import {routes} from '@/router/index'

describe("In Header component ", () => {
    let wrapper;
    beforeEach(() => {
        let localVue = createLocalVue();
        localVue.use(BootstrapVue);
        localVue.use(VueRouter);
        let router = new VueRouter({routes})
        wrapper = shallowMount(Header, {
            localVue,
            router,
            data(){
                return{
                    search:' ',
                }
            }
        })
    });
    afterEach(()=>{
        wrapper.destroy()
    })
    it("should contain <div class='appHeader'>",()=>{
        expect(wrapper.html()).toContain('<div class="appHeader">')
    });
    it("on clicking the button it should call the push method",()=>{
        wrapper.find('.search-button').trigger("click");
       
    })
    

}
)