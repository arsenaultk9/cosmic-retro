import { shallow, ShallowWrapper } from 'enzyme';

export const find = (
    wrapper: ShallowWrapper,
    selector: string
): ShallowWrapper => {
    return wrapper.find(`[data-test-id="${selector}"]`)
}

export const findAllForGroup = (
    wrapper: ShallowWrapper,
    selector: string
): ShallowWrapper => {
    return wrapper.find(`[data-test-group="${selector}"]`)
}
