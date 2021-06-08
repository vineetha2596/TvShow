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
            mocks: {
                $router: {
                    push: jest.fn(),
                },
            },
            data() {
                return {
                    search: ' person',

                }
            }
        })
    });
    afterEach(() => {
        wrapper.destroy()
    })
    it("should contain <div class='app-header'>", () => {
        expect(wrapper.html()).toContain('<div class="app-header">')
    });
    it("on clicking the button it should call the push method", () => {
        wrapper.vm.getsearch();
        wrapper.find('.search-button').trigger("click");
        expect(wrapper.vm.$router.push).toHaveBeenCalled();
    });
    it("should contain the variable search", async () => {
        await wrapper.setData({ search: '' });
        wrapper.vm.getsearch();
        expect(wrapper.vm.search).toBe('');
    });
}
)