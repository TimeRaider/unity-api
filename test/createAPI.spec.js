import test from 'ava';
import fetchMock from 'fetch-mock';
import createAPI from '../src/createAPI';

const api = createAPI();

test('coverage', t => {
    t.pass()
});

test.before('mock fetch', () => {
    fetchMock.get('/api/user/get/1', { name: 'user' });
    fetchMock.post('/api/user/set/1', { name: 'user' });
    fetchMock.delete('/api/user/delete/1?force=true', { name: 'user' });
});

test.after('unmock fetch', () => {
    fetchMock.restore();
});
