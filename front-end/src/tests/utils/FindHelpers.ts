import { shallow, ShallowWrapper } from 'enzyme';

export const find = (
    wrapper: ShallowWrapper<any, any, any>,
    selector: string
): ShallowWrapper => {
    return wrapper.find(`[data-test-id="${selector}"]`);
};

export const findAllForGroup = (
    wrapper: ShallowWrapper<any, any, any>,
    selector: string
): ShallowWrapper => {
    return wrapper.find(`[data-test-group="${selector}"]`);
};
