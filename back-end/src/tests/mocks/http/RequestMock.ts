import { Request } from 'express';

function get(body?: any) {
    const request = {
        body
    } as any;

    return request as Request;
}

export default {
    get
};