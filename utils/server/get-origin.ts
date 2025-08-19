import 'server-only'

import { env } from '@/env';

const allowedHostNames = [
    'localhost',
    'dev.book.oczkow.ski',
    'book.oczkow.ski'
];

export const getReturnOrigin = (headers: Headers) => {
    const originHeader = headers.get('origin');

    if (originHeader) {
        const originURL = new URL(originHeader);
        if (allowedHostNames.includes(originURL.host)) {
            return originHeader;
        }
    }

    return env.DEPLOY_URL;
}