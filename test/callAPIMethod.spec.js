import test from 'ava';
import fetchMock from 'fetch-mock';

import callAPIMethod, { getAPIPrefix } from '../src/callAPIMethod';

test('getAPIPrefix', t => {
    t.is(getAPIPrefix('api'), '/api', 'relative path');
    t.is(getAPIPrefix('/api'), '/api', 'absolute path');
    t.is(getAPIPrefix('http://api.example.com'), 'http://api.example.com', 'http url');
    t.is(getAPIPrefix('https://api.example.com'), 'https://api.example.com', 'http url');
    t.is(getAPIPrefix('//api.example.com'), '//api.example.com', 'protocol-less url');
});

test.before('mock fetch', () => {
    fetchMock.get('/api/user/get/1', { name: 'user' });
    fetchMock.post('/api/user/set/1', { name: 'user' });
    fetchMock.delete('/api/user/delete/1?force=true', { name: 'user' });
});

test.after('unmock fetch', () => {
    fetchMock.restore();
});