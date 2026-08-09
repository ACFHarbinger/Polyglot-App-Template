import { http, HttpResponse } from 'msw';

/** MSW request handlers for integration tests. Extend as APIs are added. */
export const handlers = [
  http.get('/api/health', () => HttpResponse.json({ ok: true })),
];
