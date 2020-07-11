import { Response } from 'express';

function get() {
    const response = {
        send: jest.fn(),
        status: jest.fn()
    } as any;

    response.status.mockReturnValue(response);

    return response as Response;
}

export default {
    get
};