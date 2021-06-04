import { shallowMount, createLocalVue } from "@vue/test-utils";
import Header from '@/components/Header.vue';
import BootstrapVue from "bootstrap-vue";

describe("In Header component ", () => {
    let wrapper;
    beforeEach(() => {
        let localVue = createLocalVue();
        localVue.use(BootstrapVue);
        wrapper = shallowMount(Header, {
            localVue,
            mocks:{
                $router:{
                    push: jest.fn
                                },
            },
            data(){
                return{
                    search:' person',
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