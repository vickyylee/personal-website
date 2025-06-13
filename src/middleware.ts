import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export const config = {
  runtime: 'experimental-edge',
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};

// Simple in-memory rate limiting
const RATE_LIMIT = 10; // requests
const WINDOW_SIZE = 10 * 1000; // 10 seconds in milliseconds
const ipRequests = new Map<string, { count: number; resetTime: number }>();

export async function middleware(request: NextRequest) {
  const ip = request.headers.get('x-forwarded-for') ?? '127.0.0.1';
  const now = Date.now();
  
  // Get or initialize rate limit data for this IP
  let rateLimitData = ipRequests.get(ip);
  if (!rateLimitData || now > rateLimitData.resetTime) {
    rateLimitData = { count: 0, resetTime: now + WINDOW_SIZE };
    ipRequests.set(ip, rateLimitData);
  }

  // Increment request count
  rateLimitData.count++;

  // Check if rate limit exceeded
  if (rateLimitData.count > RATE_LIMIT) {
    return new NextResponse('Too Many Requests', {
      status: 429,
      headers: {
        'X-RateLimit-Limit': RATE_LIMIT.toString(),
        'X-RateLimit-Remaining': '0',
        'X-RateLimit-Reset': rateLimitData.resetTime.toString(),
      },
    });
  }

  // Add rate limit headers to response
  const response = NextResponse.next();
  response.headers.set('X-RateLimit-Limit', RATE_LIMIT.toString());
  response.headers.set('X-RateLimit-Remaining', (RATE_LIMIT - rateLimitData.count).toString());
  response.headers.set('X-RateLimit-Reset', rateLimitData.resetTime.toString());

  return response;
} 