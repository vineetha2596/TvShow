import { shallowMount, createLocalVue } from "@vue/test-utils";
import Footer from '@/components/Footer';

describe("In Footer component ", () => {
    let wrapper;
    beforeEach(() => {
        let localVue = createLocalVue()
        wrapper = shallowMount(Footer, {
            localVue
        })
    });
    afterEach(()=>{
        wrapper.destroy()
    })
    it("should contain <div class='appFooter'>",()=>{
        expect(wrapper.html()).toContain('<div class="appFooter">')
    })
}
)